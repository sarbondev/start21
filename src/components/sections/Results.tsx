"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useDict } from "@/components/i18n/LocaleProvider";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { setActiveTestimonial } from "@/store/uiSlice";
import SectionHeading from "@/components/ui/SectionHeading";
import Icon from "@/components/ui/Icon";

const accentText: Record<string, string> = {
  lime: "text-lime",
  mint: "text-mint",
  sky: "text-sky",
  amber: "text-amber",
};

export default function Results() {
  const { results } = useDict();
  const active = useAppSelector((s) => s.ui.activeTestimonial);
  const dispatch = useAppDispatch();
  const items = results.items;
  const safeActive = active % items.length;
  const t = items[safeActive];

  const go = (dir: number) =>
    dispatch(setActiveTestimonial((safeActive + dir + items.length) % items.length));

  return (
    <section id="natijalar" className="relative scroll-mt-24 py-20 md:py-28">
      <div className="container-x">
        <SectionHeading
          kicker={results.kicker}
          title={
            <>
              {results.titlePlain}
              <span className="text-lime">{results.titleAccent}</span>
            </>
          }
          subtitle={results.subtitle}
        />

        <div className="mt-14 grid gap-5 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="grid grid-cols-2 gap-4">
            {results.bigStats.map((s) => (
              <div
                key={s.l}
                className="flex flex-col justify-between rounded-[var(--radius-card)] border border-line bg-surface/50 p-6"
              >
                <div className={`font-display text-3xl font-bold sm:text-4xl ${accentText[s.accent] ?? "text-lime"}`}>
                  {s.k}
                </div>
                <div className="mt-3 text-[13.5px] leading-snug text-muted">{s.l}</div>
              </div>
            ))}
          </div>

          <div className="relative flex flex-col justify-between overflow-hidden rounded-[var(--radius-card)] border border-line bg-gradient-to-br from-surface-2/80 to-surface/40 p-8 sm:p-10">
            <div className="pointer-events-none absolute -right-6 -top-8 font-display text-[160px] leading-none text-lime/10">
              &ldquo;
            </div>

            <AnimatePresence mode="wait">
              <motion.div
                key={safeActive}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -16 }}
                transition={{ duration: 0.4 }}
                className="relative"
              >
                <div className="flex gap-1">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Icon key={i} name="star" size={18} className="text-amber" />
                  ))}
                </div>
                <p className="mt-5 text-lg leading-relaxed text-cloud sm:text-xl">
                  &ldquo;{t.quote}&rdquo;
                </p>
                <div className="mt-7 flex items-center gap-3">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-lime font-display text-lg font-bold text-ink">
                    {t.name.charAt(0)}
                  </div>
                  <div>
                    <div className="font-display font-semibold text-cloud">{t.name}</div>
                    <div className="text-[13px] text-muted">{t.course}</div>
                  </div>
                  <div className="ml-auto rounded-full bg-lime/12 px-3 py-1.5 font-display text-sm font-bold text-lime">
                    {t.result}
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            <div className="mt-8 flex items-center justify-between">
              <div className="flex gap-1.5">
                {items.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => dispatch(setActiveTestimonial(i))}
                    aria-label={`${i + 1}`}
                    className={`h-1.5 rounded-full transition-all ${
                      i === safeActive ? "w-7 bg-lime" : "w-1.5 bg-faint/50 hover:bg-faint"
                    }`}
                  />
                ))}
              </div>
              <div className="flex gap-2">
                <NavBtn onClick={() => go(-1)} rotate />
                <NavBtn onClick={() => go(1)} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function NavBtn({ onClick, rotate }: { onClick: () => void; rotate?: boolean }) {
  return (
    <button
      onClick={onClick}
      aria-label={rotate ? "prev" : "next"}
      className="flex h-10 w-10 items-center justify-center rounded-full bg-surface text-cloud ring-1 ring-line transition-colors hover:bg-surface-3 hover:text-lime"
    >
      <Icon name="arrow" size={18} className={rotate ? "rotate-180" : ""} />
    </button>
  );
}
