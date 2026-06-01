"use client";

import { useState, useRef, useEffect } from "react";
import { useRouter, usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { locales, localeNames, localeShort } from "@/lib/i18n/config";
import { useLocale } from "@/components/i18n/LocaleProvider";
import Icon from "@/components/ui/Icon";

export default function LanguageSwitcher({ compact = false }: { compact?: boolean }) {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener("mousedown", onClick);
    return () => document.removeEventListener("mousedown", onClick);
  }, []);

  const switchTo = (next: string) => {
    // Foydalanuvchi tanlovini eslab qolamiz
    document.cookie = `NEXT_LOCALE=${next}; path=/; max-age=${60 * 60 * 24 * 365}`;
    const segments = pathname.split("/");
    segments[1] = next;
    router.push(segments.join("/") || "/");
    setOpen(false);
  };

  return (
    <div ref={ref} className="relative">
      <button
        onClick={() => setOpen((v) => !v)}
        aria-label="Tilni tanlash"
        aria-expanded={open}
        className={`inline-flex items-center gap-1.5 rounded-full ring-1 ring-line transition-colors hover:bg-surface-2 ${
          compact ? "h-10 px-3" : "h-10 px-3.5"
        } bg-surface text-[13px] font-semibold text-cloud`}
      >
        {localeShort[locale]}
        <Icon name="chevron" size={14} className={`text-faint transition-transform ${open ? "rotate-180" : ""}`} />
      </button>

      <AnimatePresence>
        {open && (
          <motion.ul
            initial={{ opacity: 0, y: -6, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -6, scale: 0.97 }}
            transition={{ duration: 0.16 }}
            className="absolute right-0 z-50 mt-2 w-40 overflow-hidden rounded-2xl border border-line bg-bg-2/95 p-1.5 backdrop-blur-xl shadow-2xl"
          >
            {locales.map((l) => (
              <li key={l}>
                <button
                  onClick={() => switchTo(l)}
                  className={`flex w-full items-center justify-between rounded-xl px-3 py-2.5 text-left text-sm transition-colors ${
                    l === locale
                      ? "bg-lime/12 font-semibold text-lime"
                      : "text-cloud hover:bg-surface-2"
                  }`}
                >
                  {localeNames[l]}
                  {l === locale && <Icon name="check" size={15} />}
                </button>
              </li>
            ))}
          </motion.ul>
        )}
      </AnimatePresence>
    </div>
  );
}
