"use client";

import { useDict } from "@/components/i18n/LocaleProvider";
import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/ui/Reveal";
import Icon from "@/components/ui/Icon";
import { ButtonLink } from "@/components/ui/Button";

export default function Courses() {
  const { courses, common } = useDict();
  return (
    <section id="kurslar" className="relative scroll-mt-24 py-20 md:py-28">
      <div className="pointer-events-none absolute inset-x-0 top-1/4 h-px bg-gradient-to-r from-transparent via-line to-transparent" />
      <div className="container-x">
        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <SectionHeading kicker={courses.kicker} title={courses.title} subtitle={courses.subtitle} />
          <Reveal>
            <ButtonLink href="#royxat" variant="secondary" icon="arrow">
              {common.consult}
            </ButtonLink>
          </Reveal>
        </div>

        <div className="mt-14 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {courses.items.map((c, i) => (
            <Reveal key={c.slug} delay={i % 3}>
              <article
                className={`lift group relative flex h-full flex-col overflow-hidden rounded-[var(--radius-card)] border p-6 ${
                  c.popular
                    ? "border-lime/40 bg-gradient-to-b from-surface-3/70 to-surface/50"
                    : "border-line bg-surface/50 hover:border-lime/25 hover:bg-surface-2/60"
                }`}
              >
                {c.popular && (
                  <div className="pointer-events-none absolute -right-12 top-5 rotate-45 bg-lime px-12 py-1 text-[11px] font-bold uppercase tracking-wide text-ink">
                    Top
                  </div>
                )}

                <span className="w-fit rounded-full bg-lime/12 px-2.5 py-1 text-[11.5px] font-semibold uppercase tracking-wide text-lime">
                  {c.tag}
                </span>

                <h3 className="mt-4 font-display text-2xl font-bold text-cloud">{c.name}</h3>
                <p className="mt-1.5 text-[14px] font-medium text-mint">{c.outcome}</p>

                <div className="mt-5 grid grid-cols-3 gap-2">
                  <Meta icon="calendar" value={c.duration} />
                  <Meta icon="clock" value={c.perWeek} />
                  <Meta icon="layers" value={c.level} />
                </div>

                <ul className="mt-5 space-y-2">
                  {c.highlights.map((h) => (
                    <li key={h} className="flex items-center gap-2 text-[14px] text-muted">
                      <Icon name="check" size={15} className="shrink-0 text-lime" />
                      {h}
                    </li>
                  ))}
                </ul>

                <div className="mt-6 flex-1" />
                <div className="flex items-center justify-between gap-3 border-t border-line-soft pt-5">
                  <span className="text-[12.5px] text-faint">
                    {c.format} • {courses.groupLabel}
                  </span>
                  <ButtonLink
                    href="#royxat"
                    size="md"
                    variant={c.popular ? "primary" : "secondary"}
                    icon="arrow"
                  >
                    {common.enroll}
                  </ButtonLink>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function Meta({ icon, value }: { icon: "calendar" | "clock" | "layers"; value: string }) {
  return (
    <div className="rounded-xl bg-bg-2/60 p-2.5 text-center ring-1 ring-line-soft">
      <Icon name={icon} size={16} className="mx-auto text-faint" />
      <div className="mt-1.5 text-[11.5px] font-medium leading-tight text-cloud">{value}</div>
    </div>
  );
}
