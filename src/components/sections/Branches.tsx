"use client";

import { useDict } from "@/components/i18n/LocaleProvider";
import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/ui/Reveal";
import Icon from "@/components/ui/Icon";

export default function Branches() {
  const { branches } = useDict();
  return (
    <section id="filiallar" className="relative scroll-mt-24 py-20 md:py-28">
      <div className="container-x">
        <SectionHeading kicker={branches.kicker} title={branches.title} subtitle={branches.subtitle} />

        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {branches.items.map((b, i) => (
            <Reveal key={b.name} delay={i % 3}>
              <article className="lift group flex items-center gap-4 rounded-[var(--radius-card)] border border-line bg-surface/50 p-5 hover:border-lime/25 hover:bg-surface-2/60">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-lime/12 text-lime transition-transform group-hover:scale-110">
                  <Icon name="pin" size={22} />
                </div>
                <div className="min-w-0">
                  <h3 className="font-display text-lg font-semibold text-cloud">{b.name}</h3>
                  <p className="truncate text-[13.5px] text-muted">{b.area}</p>
                </div>
                <span className="ml-auto shrink-0 rounded-full bg-bg-2/70 px-2.5 py-1 text-[11.5px] font-medium text-faint ring-1 ring-line-soft">
                  {b.note}
                </span>
              </article>
            </Reveal>
          ))}

          <Reveal delay={1}>
            <a
              href="#royxat"
              className="lift flex h-full items-center justify-center gap-2 rounded-[var(--radius-card)] border border-dashed border-lime/30 bg-lime/5 p-5 text-center font-display font-semibold text-lime hover:bg-lime/10"
            >
              {branches.ctaCard}
              <Icon name="arrowUpRight" size={18} />
            </a>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
