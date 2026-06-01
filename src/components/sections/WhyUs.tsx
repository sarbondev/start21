"use client";

import { useDict } from "@/components/i18n/LocaleProvider";
import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/ui/Reveal";
import Icon from "@/components/ui/Icon";

const accentMap: Record<string, string> = {
  lime: "text-lime bg-lime/12",
  sky: "text-sky bg-sky/12",
  mint: "text-mint bg-mint/12",
  amber: "text-amber bg-amber/12",
  coral: "text-coral bg-coral/12",
};

export default function WhyUs() {
  const { why } = useDict();
  return (
    <section id="imkoniyat" className="relative scroll-mt-24 py-20 md:py-28">
      <div className="container-x">
        <SectionHeading
          kicker={why.kicker}
          title={
            <>
              {why.title}
              <br className="hidden sm:block" />{" "}
              <span className="text-lime">{why.titleHi}</span>
            </>
          }
          subtitle={why.subtitle}
        />

        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {why.features.map((f, i) => (
            <Reveal key={f.title} delay={i % 3}>
              <article className="lift group h-full rounded-[var(--radius-card)] border border-line bg-surface/50 p-7 hover:border-lime/30 hover:bg-surface-2/60">
                <div className={`flex h-12 w-12 items-center justify-center rounded-2xl ${accentMap[f.accent]}`}>
                  <Icon name={f.icon} size={22} />
                </div>
                <h3 className="mt-5 font-display text-lg font-semibold text-cloud">{f.title}</h3>
                <p className="mt-2.5 text-[14.5px] leading-relaxed text-muted">{f.text}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
