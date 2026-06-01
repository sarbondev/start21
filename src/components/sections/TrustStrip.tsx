"use client";

import { useDict } from "@/components/i18n/LocaleProvider";
import Icon from "@/components/ui/Icon";

export default function TrustStrip() {
  const { trustItems } = useDict();
  const items = [...trustItems, ...trustItems];
  return (
    <div className="relative border-y border-line-soft bg-bg-2/60 py-5">
      <div className="marquee-mask overflow-hidden">
        <div className="animate-marquee flex w-max items-center gap-8 pr-8">
          {items.map((item, i) => (
            <div key={i} className="flex shrink-0 items-center gap-2.5">
              <Icon name="check" size={16} className="text-lime" />
              <span className="text-sm font-medium text-muted">{item}</span>
              <span className="ml-6 h-1 w-1 rounded-full bg-faint/50" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
