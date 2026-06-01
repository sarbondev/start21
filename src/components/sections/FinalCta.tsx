"use client";

import { useDict } from "@/components/i18n/LocaleProvider";
import Reveal from "@/components/ui/Reveal";
import { ButtonLink } from "@/components/ui/Button";

export default function FinalCta() {
  const { finalCta } = useDict();
  return (
    <section className="relative py-12 md:py-16">
      <div className="container-x">
        <div className="relative overflow-hidden rounded-[28px] bg-lime px-7 py-12 text-ink sm:px-12 sm:py-16">
          {/* texture */}
          <div
            className="pointer-events-none absolute inset-0 opacity-[0.07]"
            style={{
              backgroundImage:
                "radial-gradient(circle at 1px 1px, #001110 1.2px, transparent 0)",
              backgroundSize: "20px 20px",
            }}
          />
          <div className="pointer-events-none absolute -right-16 -top-16 h-64 w-64 rounded-full bg-ink/5 blur-2xl" />

          <div className="relative mx-auto max-w-2xl text-center">
            <Reveal>
              <p className="text-[13px] font-bold uppercase tracking-[0.16em] text-ink/60">
                {finalCta.kicker}
              </p>
            </Reveal>
            <Reveal delay={1}>
              <h2 className="mt-3 font-display text-3xl font-bold leading-[1.05] tracking-tight sm:text-5xl">
                {finalCta.title}
              </h2>
            </Reveal>
            <Reveal delay={2}>
              <p className="mx-auto mt-5 max-w-xl text-[15.5px] leading-relaxed text-ink/70 sm:text-lg">
                {finalCta.text}
              </p>
            </Reveal>
            <Reveal delay={3}>
              <div className="mt-8 flex justify-center">
                <ButtonLink
                  href="#royxat"
                  size="lg"
                  variant="secondary"
                  icon="arrow"
                  className="!bg-ink !text-lime hover:!bg-[#001b1a] hover:!text-lime-bright !ring-0"
                >
                  {finalCta.button}
                </ButtonLink>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
