import type { ReactNode } from "react";
import Reveal from "./Reveal";

interface Props {
  kicker?: string;
  title: ReactNode;
  subtitle?: ReactNode;
  center?: boolean;
  className?: string;
}

export default function SectionHeading({
  kicker,
  title,
  subtitle,
  center = false,
  className = "",
}: Props) {
  return (
    <div className={`${center ? "mx-auto text-center" : ""} max-w-2xl ${className}`}>
      {kicker && (
        <Reveal>
          <div
            className={`mb-4 inline-flex items-center gap-2 rounded-full bg-surface px-3.5 py-1.5 text-[12.5px] font-medium uppercase tracking-[0.14em] text-lime ring-1 ring-line ${
              center ? "" : ""
            }`}
          >
            <span className="h-1.5 w-1.5 rounded-full bg-lime animate-livepulse" />
            {kicker}
          </div>
        </Reveal>
      )}
      <Reveal delay={1}>
        <h2 className="font-display text-3xl font-bold leading-[1.08] tracking-tight text-cloud sm:text-4xl md:text-[44px]">
          {title}
        </h2>
      </Reveal>
      {subtitle && (
        <Reveal delay={2}>
          <p className={`mt-4 text-[17px] leading-relaxed text-muted ${center ? "mx-auto" : ""}`}>
            {subtitle}
          </p>
        </Reveal>
      )}
    </div>
  );
}
