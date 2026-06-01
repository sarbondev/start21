import Link from "next/link";
import type { ComponentProps, ReactNode } from "react";
import Icon, { type IconName } from "./Icon";

type Variant = "primary" | "secondary" | "ghost";
type Size = "md" | "lg";

const base =
  "group inline-flex items-center justify-center gap-2 font-display font-semibold rounded-full transition-all duration-200 ease-out focus-visible:outline-none disabled:opacity-60 disabled:pointer-events-none select-none";

const variants: Record<Variant, string> = {
  primary:
    "bg-lime text-ink hover:bg-lime-bright hover:shadow-[0_10px_40px_-8px_rgba(230,255,44,0.55)] active:scale-[0.98]",
  secondary:
    "bg-surface-2 text-cloud ring-1 ring-line hover:bg-surface-3 hover:ring-lime/40 active:scale-[0.98]",
  ghost:
    "text-cloud hover:text-lime",
};

const sizes: Record<Size, string> = {
  md: "h-11 px-5 text-[15px]",
  lg: "h-14 px-7 text-base",
};

interface CommonProps {
  variant?: Variant;
  size?: Size;
  icon?: IconName;
  children: ReactNode;
  className?: string;
}

export function ButtonLink({
  href,
  variant = "primary",
  size = "md",
  icon = "arrowUpRight",
  children,
  className = "",
  ...rest
}: CommonProps & ComponentProps<typeof Link>) {
  return (
    <Link
      href={href}
      className={`${base} ${variants[variant]} ${sizes[size]} ${className}`}
      {...rest}
    >
      {children}
      {icon && (
        <Icon
          name={icon}
          size={size === "lg" ? 20 : 18}
          className="transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
        />
      )}
    </Link>
  );
}

export function Button({
  variant = "primary",
  size = "md",
  icon,
  children,
  className = "",
  ...rest
}: CommonProps & ComponentProps<"button">) {
  return (
    <button className={`${base} ${variants[variant]} ${sizes[size]} ${className}`} {...rest}>
      {children}
      {icon && <Icon name={icon} size={size === "lg" ? 20 : 18} />}
    </button>
  );
}
