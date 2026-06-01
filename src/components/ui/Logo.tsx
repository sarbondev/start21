import Image from "next/image";
import Link from "next/link";
import { SITE } from "@/lib/i18n/config";

export default function Logo({ className = "" }: { className?: string }) {
  return (
    <Link
      href="#top"
      aria-label="START21"
      className={`inline-flex items-center ${className}`}
    >
      <Image
        src={SITE.logo}
        alt="START21"
        width={132}
        height={36}
        priority
        unoptimized
        className="h-8 w-auto"
      />
    </Link>
  );
}
