"use client";

import { useState, useRef, useEffect } from "react";
import { useRouter, usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { locales, localeNames } from "@/lib/i18n/config";
import { useLocale } from "@/components/i18n/LocaleProvider";
import FlagIcon from "@/components/ui/FlagIcon";

export default function LanguageSwitcher() {
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
        aria-label={`Til: ${localeNames[locale]}. Tilni almashtirish`}
        aria-expanded={open}
        className={`flex h-10 w-10 items-center justify-center rounded-full ring-1 transition-all hover:scale-105 ${
          open ? "ring-2 ring-lime" : "ring-line hover:ring-lime/50"
        }`}
      >
        <FlagIcon locale={locale} size={28} />
      </button>

      <AnimatePresence>
        {open && (
          <motion.ul
            initial={{ opacity: 0, y: -6, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -6, scale: 0.95 }}
            transition={{ duration: 0.16, ease: [0.22, 1, 0.36, 1] }}
            className="absolute right-0 z-50 mt-2 flex flex-col gap-1.5 rounded-2xl border border-line bg-bg-2/95 p-1.5 shadow-2xl backdrop-blur-xl"
          >
            {locales.map((l) => {
              const isActive = l === locale;
              return (
                <li key={l}>
                  <button
                    onClick={() => switchTo(l)}
                    aria-label={localeNames[l]}
                    aria-current={isActive}
                    title={localeNames[l]}
                    className={`flex h-11 w-11 items-center justify-center rounded-full transition-all hover:scale-105 ${
                      isActive ? "ring-2 ring-lime" : "opacity-70 hover:opacity-100"
                    }`}
                  >
                    <FlagIcon locale={l} size={30} />
                  </button>
                </li>
              );
            })}
          </motion.ul>
        )}
      </AnimatePresence>
    </div>
  );
}
