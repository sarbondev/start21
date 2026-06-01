"use client";

import { useDict } from "@/components/i18n/LocaleProvider";
import Counter from "@/components/ui/Counter";
import Reveal from "@/components/ui/Reveal";

export default function Stats() {
  const { stats } = useDict();
  return (
    <section className="relative py-16 md:py-20">
      <div className="container-x">
        <div className="grid grid-cols-2 gap-px overflow-hidden rounded-[24px] border border-line bg-line-soft lg:grid-cols-4">
          {stats.map((s, i) => (
            <Reveal key={s.label} delay={i}>
              <div className="h-full bg-surface/60 p-6 transition-colors hover:bg-surface-2/70 sm:p-8">
                <div className="font-display text-4xl font-bold text-lime sm:text-5xl">
                  <Counter value={s.value} suffix={s.suffix} />
                </div>
                <div className="mt-2 font-display text-base font-semibold text-cloud">{s.label}</div>
                <div className="mt-1 text-[13px] leading-snug text-muted">{s.sub}</div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
