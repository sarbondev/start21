"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useDict } from "@/components/i18n/LocaleProvider";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { setActiveFaq } from "@/store/uiSlice";
import SectionHeading from "@/components/ui/SectionHeading";
import Icon from "@/components/ui/Icon";

export default function Faq() {
  const { faq } = useDict();
  const active = useAppSelector((s) => s.ui.activeFaq);
  const dispatch = useAppDispatch();

  return (
    <section id="savol" className="relative scroll-mt-24 py-20 md:py-28">
      <div className="container-x">
        <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
          <SectionHeading kicker={faq.kicker} title={faq.title} subtitle={faq.subtitle} />

          <div className="space-y-3">
            {faq.items.map((f, i) => {
              const open = active === i;
              return (
                <div
                  key={i}
                  className={`overflow-hidden rounded-2xl border transition-colors ${
                    open ? "border-lime/30 bg-surface-2/60" : "border-line bg-surface/40"
                  }`}
                >
                  <button
                    onClick={() => dispatch(setActiveFaq(i))}
                    aria-expanded={open}
                    className="flex w-full items-center justify-between gap-4 p-5 text-left"
                  >
                    <span className="font-display text-[16px] font-semibold text-cloud">{f.q}</span>
                    <span
                      className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full transition-all ${
                        open ? "rotate-180 bg-lime text-ink" : "bg-surface text-lime"
                      }`}
                    >
                      <Icon name="chevron" size={18} />
                    </span>
                  </button>
                  <AnimatePresence initial={false}>
                    {open && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                      >
                        <p className="px-5 pb-5 text-[14.5px] leading-relaxed text-muted">{f.a}</p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
