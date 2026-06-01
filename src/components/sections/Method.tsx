"use client";

import { useDict } from "@/components/i18n/LocaleProvider";
import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/ui/Reveal";

export default function Method() {
  const { method } = useDict();
  return (
    <section id="metod" className="relative scroll-mt-24 overflow-hidden py-20 md:py-28">
      <div className="pointer-events-none absolute right-0 top-1/2 h-[400px] w-[400px] -translate-y-1/2 rounded-full bg-sky/5 blur-[120px]" />
      <div className="container-x relative">
        <SectionHeading
          center
          kicker={method.kicker}
          title={
            <>
              {method.titlePlain}
              <span className="text-lime">{method.titleAccent}</span>
            </>
          }
          subtitle={method.subtitle}
        />

        <div className="mt-16 grid gap-5 lg:grid-cols-4">
          {method.steps.map((m, i) => (
            <Reveal key={m.step} delay={i}>
              <div className="relative h-full rounded-[var(--radius-card)] border border-line bg-surface/40 p-7">
                <div className="font-display text-5xl font-bold text-lime/25">{m.step}</div>
                <h3 className="mt-4 font-display text-lg font-semibold text-cloud">{m.title}</h3>
                <p className="mt-2.5 text-[14.5px] leading-relaxed text-muted">{m.text}</p>
                {i < method.steps.length - 1 && (
                  <div className="absolute right-4 top-8 hidden text-faint lg:block">
                    <svg width="28" height="14" viewBox="0 0 28 14" fill="none" aria-hidden="true">
                      <path
                        d="M0 7h25M20 2l5 5-5 5"
                        stroke="currentColor"
                        strokeWidth="1.6"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                )}
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
