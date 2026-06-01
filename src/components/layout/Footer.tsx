"use client";

import Link from "next/link";
import { useDict } from "@/components/i18n/LocaleProvider";
import { SITE } from "@/lib/i18n/config";
import Logo from "@/components/ui/Logo";
import Icon from "@/components/ui/Icon";
import SocialIcon, { type Brand } from "@/components/ui/SocialIcon";

export default function Footer() {
  const { footer, nav } = useDict();
  const year = 2026;

  const socials: { icon: Brand; href: string; label: string }[] = [
    { icon: "telegram", href: SITE.telegram, label: "Telegram" },
    { icon: "instagram", href: SITE.instagram, label: "Instagram" },
    { icon: "youtube", href: SITE.youtube, label: "YouTube" },
  ];

  return (
    <footer className="relative border-t border-line-soft bg-bg-2/60">
      <div className="container-x py-14">
        <div className="grid gap-10 lg:grid-cols-[1.4fr_1fr_1fr]">
          <div className="max-w-sm">
            <Logo />
            <p className="mt-4 text-[14.5px] leading-relaxed text-muted">{footer.about}</p>
            <div className="mt-5 flex gap-2.5">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-surface text-cloud ring-1 ring-line transition-colors hover:bg-lime hover:text-ink"
                >
                  <SocialIcon name={s.icon} size={18} />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="font-display text-sm font-semibold uppercase tracking-wide text-faint">
              {footer.nav}
            </h3>
            <ul className="mt-4 space-y-2.5">
              {nav.map((n) => (
                <li key={n.id}>
                  <Link
                    href={`#${n.id}`}
                    className="text-[14.5px] text-muted transition-colors hover:text-lime"
                  >
                    {n.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-display text-sm font-semibold uppercase tracking-wide text-faint">
              {footer.contact}
            </h3>
            <ul className="mt-4 space-y-3">
              <li>
                <a
                  href={`tel:${SITE.phonePrimaryHref}`}
                  className="flex items-center gap-2.5 text-[14.5px] text-cloud hover:text-lime"
                >
                  <Icon name="phone" size={16} className="text-lime" />
                  {SITE.phonePrimary}
                </a>
              </li>
              <li>
                <a
                  href={`tel:${SITE.phoneSecondaryHref}`}
                  className="flex items-center gap-2.5 text-[14.5px] text-cloud hover:text-lime"
                >
                  <Icon name="phone" size={16} className="text-lime" />
                  {SITE.phoneSecondary}
                </a>
              </li>
              <li className="flex items-center gap-2.5 text-[14.5px] text-muted">
                <Icon name="pin" size={16} className="text-lime" />
                Namangan, O&apos;zbekiston
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-3 border-t border-line-soft pt-6 text-center sm:flex-row sm:text-left">
          <p className="text-[13px] text-faint">
            © {year} {SITE.name}. {footer.rights}
          </p>
          <p className="text-[13px] text-faint">{footer.builtFor}</p>
        </div>
      </div>
    </footer>
  );
}
