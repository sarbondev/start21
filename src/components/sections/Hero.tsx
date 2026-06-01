"use client";

import { motion } from "framer-motion";
import { SITE } from "@/lib/i18n/config";
import { useDict } from "@/components/i18n/LocaleProvider";
import { ButtonLink } from "@/components/ui/Button";
import Icon from "@/components/ui/Icon";

const ease = [0.22, 1, 0.36, 1] as const;

export default function Hero() {
  const { hero } = useDict();

  return (
    <section id="top" className="relative overflow-hidden pt-28 pb-20 sm:pt-32 md:pt-40 md:pb-28">
      <div className="pointer-events-none absolute inset-0 aurora" />
      <div className="pointer-events-none absolute inset-x-0 top-0 h-[640px] grid-dots" />
      <div className="pointer-events-none absolute -top-40 left-1/2 h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-lime/10 blur-[120px]" />

      <div className="container-x relative">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease }}
          className="mx-auto flex w-fit items-center gap-2.5 rounded-full bg-surface/70 px-4 py-2 text-[13px] font-medium text-cloud ring-1 ring-line backdrop-blur"
        >
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-lime opacity-60" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-lime" />
          </span>
          {hero.badge}
        </motion.div>

        <div className="mx-auto mt-7 max-w-4xl text-center">
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease, delay: 0.05 }}
            className="font-display text-[40px] font-bold leading-[1.04] tracking-tight text-cloud sm:text-6xl md:text-[76px]"
          >
            {hero.titleTop}{" "}
            <span className="relative whitespace-nowrap text-lime text-glow">
              {hero.titleAccent}
              <svg
                className="absolute -bottom-2 left-0 w-full text-lime/60"
                viewBox="0 0 300 12"
                fill="none"
                aria-hidden="true"
              >
                <path
                  d="M2 9C72 3 228 3 298 9"
                  stroke="currentColor"
                  strokeWidth="3"
                  strokeLinecap="round"
                />
              </svg>
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease, delay: 0.15 }}
            className="mx-auto mt-6 max-w-2xl text-[17px] leading-relaxed text-muted sm:text-lg"
          >
            {hero.subtitle}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease, delay: 0.25 }}
            className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row"
          >
            <ButtonLink href="#royxat" size="lg" icon="arrow" className="w-full sm:w-auto">
              {hero.ctaPrimary}
            </ButtonLink>
            <ButtonLink
              href="#kurslar"
              size="lg"
              variant="secondary"
              icon="chevron"
              className="w-full sm:w-auto"
            >
              {hero.ctaSecondary}
            </ButtonLink>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="mt-5 flex items-center justify-center gap-2 text-[13.5px] text-faint"
          >
            <Icon name="shield" size={15} className="text-mint" />
            {hero.microtrust}
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease, delay: 0.35 }}
          className="relative mx-auto mt-16 max-w-5xl"
        >
          <div className="relative overflow-hidden rounded-[28px] border border-line bg-gradient-to-b from-surface-2/80 to-surface/40 p-2 backdrop-blur">
            <div className="rounded-[20px] bg-bg-2/60 p-6 sm:p-10">
              <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
                {hero.statBoxes.map((s) => (
                  <div key={s.l} className="text-center">
                    <div className="font-display text-2xl font-bold text-lime sm:text-4xl">{s.k}</div>
                    <div className="mt-1 text-[12.5px] text-muted sm:text-sm">{s.l}</div>
                  </div>
                ))}
              </div>
              <div className="mt-8 flex flex-wrap items-center justify-center gap-2.5">
                {hero.chips.map((c) => (
                  <span
                    key={c}
                    className="rounded-full bg-surface px-3.5 py-1.5 text-[13px] font-medium text-cloud ring-1 ring-line"
                  >
                    {c}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <motion.div
            className="absolute -left-4 top-12 hidden rounded-2xl border border-line bg-surface-2/90 px-4 py-3 shadow-xl backdrop-blur md:block"
            animate={{ y: [0, -12, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          >
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-lime/15">
                <Icon name="star" size={18} className="text-lime" />
              </div>
              <div>
                <div className="font-display text-lg font-bold text-cloud">{hero.floating[0].value}</div>
                <div className="text-[11px] text-muted">{hero.floating[0].label}</div>
              </div>
            </div>
          </motion.div>

          <motion.div
            className="absolute -right-4 bottom-10 hidden rounded-2xl border border-line bg-surface-2/90 px-4 py-3 shadow-xl backdrop-blur md:block"
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
          >
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-mint/15">
                <Icon name="badge" size={18} className="text-mint" />
              </div>
              <div>
                <div className="font-display text-lg font-bold text-cloud">{hero.floating[1].value}</div>
                <div className="text-[11px] text-muted">{hero.floating[1].label}</div>
              </div>
            </div>
          </motion.div>
        </motion.div>

        <div className="mt-8 text-center text-sm text-faint">
          {hero.callLine}{" "}
          <a href={`tel:${SITE.phonePrimaryHref}`} className="font-semibold text-cloud hover:text-lime">
            {SITE.phonePrimary}
          </a>
        </div>
      </div>
    </section>
  );
}
