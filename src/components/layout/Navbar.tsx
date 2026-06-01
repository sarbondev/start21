"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { SITE } from "@/lib/i18n/config";
import { useDict } from "@/components/i18n/LocaleProvider";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { closeMobileMenu, toggleMobileMenu } from "@/store/uiSlice";
import Logo from "@/components/ui/Logo";
import Icon from "@/components/ui/Icon";
import { ButtonLink } from "@/components/ui/Button";
import LanguageSwitcher from "./LanguageSwitcher";

export default function Navbar() {
  const { nav, common, hero } = useDict();
  const [scrolled, setScrolled] = useState(false);
  const open = useAppSelector((s) => s.ui.mobileMenuOpen);
  const dispatch = useAppDispatch();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div
        className={`transition-all duration-300 ${
          scrolled
            ? "border-b border-line-soft bg-bg/80 backdrop-blur-xl"
            : "border-b border-transparent bg-transparent"
        }`}
      >
        <nav className="container-x flex h-16 items-center justify-between gap-4 md:h-[72px]">
          <Logo />

          <ul className="hidden items-center gap-0.5 lg:flex">
            {nav.map((item) => (
              <li key={item.id}>
                <Link
                  href={`#${item.id}`}
                  className="rounded-full px-3.5 py-2 text-[14.5px] font-medium text-muted transition-colors hover:text-cloud"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-2.5">
            <a
              href={`tel:${SITE.phonePrimaryHref}`}
              aria-label={common.callUs}
              className="group hidden items-center gap-2 md:inline-flex"
            >
              <span className="flex h-9 w-9 items-center justify-center rounded-full bg-surface ring-1 ring-line transition-colors group-hover:bg-surface-2">
                <Icon name="phone" size={16} className="text-lime" />
              </span>
              <span className="tnum hidden text-[14.5px] font-medium text-cloud xl:inline">
                {SITE.phonePrimary}
              </span>
            </a>

            <LanguageSwitcher />

            <ButtonLink href="#royxat" size="md" icon="arrow" className="hidden md:inline-flex">
              {common.register}
            </ButtonLink>

            <button
              onClick={() => dispatch(toggleMobileMenu())}
              aria-label="Menu"
              aria-expanded={open}
              className="flex h-10 w-10 items-center justify-center rounded-full bg-surface text-cloud ring-1 ring-line md:hidden"
            >
              <Icon name={open ? "close" : "menu"} size={20} />
            </button>
          </div>
        </nav>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 top-16 z-40 bg-bg/95 backdrop-blur-xl md:hidden"
          >
            <motion.ul
              initial="hidden"
              animate="show"
              variants={{ show: { transition: { staggerChildren: 0.05 } } }}
              className="container-x flex flex-col gap-1 py-6"
            >
              {nav.map((item) => (
                <motion.li
                  key={item.id}
                  variants={{ hidden: { opacity: 0, x: -16 }, show: { opacity: 1, x: 0 } }}
                >
                  <Link
                    href={`#${item.id}`}
                    onClick={() => dispatch(closeMobileMenu())}
                    className="flex items-center justify-between border-b border-line-soft py-4 text-lg font-medium text-cloud"
                  >
                    {item.label}
                    <Icon name="arrowUpRight" size={18} className="text-faint" />
                  </Link>
                </motion.li>
              ))}
              <div className="mt-6 flex flex-col gap-3">
                <ButtonLink
                  href="#royxat"
                  size="lg"
                  icon="arrow"
                  className="w-full"
                  onClick={() => dispatch(closeMobileMenu())}
                >
                  {hero.ctaPrimary}
                </ButtonLink>
                <a
                  href={`tel:${SITE.phonePrimaryHref}`}
                  className="inline-flex h-12 items-center justify-center gap-2 rounded-full bg-surface text-cloud ring-1 ring-line"
                >
                  <Icon name="phone" size={18} className="text-lime" />
                  {SITE.phonePrimary}
                </a>
              </div>
            </motion.ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
