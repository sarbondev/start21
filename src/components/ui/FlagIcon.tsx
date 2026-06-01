"use client";

import { useId } from "react";
import type { Locale } from "@/lib/i18n/config";

/**
 * Dumaloq SVG bayroqlar (emoji emas — Windows'da emoji bayroqlar ishlamaydi).
 * uz — O'zbekiston, ru — Rossiya, en — Union Jack (ingliz tili).
 */
export default function FlagIcon({ locale, size = 28 }: { locale: Locale; size?: number }) {
  const id = useId().replace(/:/g, "");
  const clip = `flag-${id}`;

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      role="img"
      aria-hidden="true"
      style={{ display: "block" }}
    >
      <defs>
        <clipPath id={clip}>
          <circle cx="12" cy="12" r="12" />
        </clipPath>
      </defs>
      <g clipPath={`url(#${clip})`}>
        {locale === "uz" && (
          <>
            <rect x="0" y="0" width="24" height="7.6" fill="#0099B5" />
            <rect x="0" y="7.6" width="24" height="0.9" fill="#CE1126" />
            <rect x="0" y="8.5" width="24" height="7" fill="#FFFFFF" />
            <rect x="0" y="15.5" width="24" height="0.9" fill="#CE1126" />
            <rect x="0" y="16.4" width="24" height="7.6" fill="#1EB53A" />
            {/* crescent */}
            <circle cx="5" cy="4" r="2" fill="#FFFFFF" />
            <circle cx="5.9" cy="4" r="1.7" fill="#0099B5" />
          </>
        )}

        {locale === "ru" && (
          <>
            <rect x="0" y="0" width="24" height="8" fill="#FFFFFF" />
            <rect x="0" y="8" width="24" height="8" fill="#0039A6" />
            <rect x="0" y="16" width="24" height="8" fill="#D52B1E" />
          </>
        )}

        {locale === "en" && (
          <>
            <rect x="0" y="0" width="24" height="24" fill="#012169" />
            {/* white diagonals */}
            <path d="M0 0L24 24M24 0L0 24" stroke="#FFFFFF" strokeWidth="4.5" />
            {/* red diagonals */}
            <path d="M0 0L24 24M24 0L0 24" stroke="#C8102E" strokeWidth="1.8" />
            {/* white cross */}
            <path d="M12 0V24M0 12H24" stroke="#FFFFFF" strokeWidth="6" />
            {/* red cross */}
            <path d="M12 0V24M0 12H24" stroke="#C8102E" strokeWidth="3.2" />
          </>
        )}
      </g>
      <circle cx="12" cy="12" r="11.5" fill="none" stroke="rgba(255,255,255,0.18)" strokeWidth="1" />
    </svg>
  );
}
