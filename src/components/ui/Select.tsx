"use client";

import { useEffect, useId, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Icon from "./Icon";

interface SelectProps {
  value: string;
  onChange: (value: string) => void;
  options: string[];
  placeholder: string;
  /** ish-haqida label for screen readers */
  ariaLabel?: string;
  error?: boolean;
}

export default function Select({
  value,
  onChange,
  options,
  placeholder,
  ariaLabel,
  error,
}: SelectProps) {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState(0);
  const rootRef = useRef<HTMLDivElement>(null);
  const listRef = useRef<HTMLUListElement>(null);
  const listId = useId();

  useEffect(() => {
    if (!open) return;
    const onClick = (e: MouseEvent) => {
      if (rootRef.current && !rootRef.current.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener("mousedown", onClick);
    return () => document.removeEventListener("mousedown", onClick);
  }, [open]);

  useEffect(() => {
    if (open) {
      const idx = options.indexOf(value);
      setActive(idx >= 0 ? idx : 0);
    }
  }, [open, value, options]);

  const choose = (opt: string) => {
    onChange(opt);
    setOpen(false);
  };

  const onKeyDown = (e: React.KeyboardEvent) => {
    if (!open && (e.key === "ArrowDown" || e.key === "Enter" || e.key === " ")) {
      e.preventDefault();
      setOpen(true);
      return;
    }
    if (!open) return;
    if (e.key === "Escape") {
      e.preventDefault();
      setOpen(false);
    } else if (e.key === "ArrowDown") {
      e.preventDefault();
      setActive((a) => Math.min(a + 1, options.length - 1));
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setActive((a) => Math.max(a - 1, 0));
    } else if (e.key === "Enter") {
      e.preventDefault();
      choose(options[active]);
    } else if (e.key === "Home") {
      e.preventDefault();
      setActive(0);
    } else if (e.key === "End") {
      e.preventDefault();
      setActive(options.length - 1);
    }
  };

  useEffect(() => {
    if (open && listRef.current) {
      const el = listRef.current.children[active] as HTMLElement | undefined;
      el?.scrollIntoView({ block: "nearest" });
    }
  }, [active, open]);

  return (
    <div ref={rootRef} className="relative">
      <button
        type="button"
        aria-haspopup="listbox"
        aria-expanded={open}
        aria-label={ariaLabel}
        onClick={() => setOpen((v) => !v)}
        onKeyDown={onKeyDown}
        className={`flex h-[52px] w-full items-center justify-between gap-2 rounded-[14px] border bg-surface px-4 text-left text-[15px] transition-colors hover:bg-surface-2 focus-visible:outline-none ${
          open ? "border-lime bg-surface-2" : error ? "border-coral/60" : "border-line-soft"
        }`}
      >
        <span className={value ? "text-cloud" : "text-faint"}>{value || placeholder}</span>
        <Icon
          name="chevron"
          size={18}
          className={`shrink-0 text-faint transition-transform duration-200 ${open ? "rotate-180 text-lime" : ""}`}
        />
      </button>

      <AnimatePresence>
        {open && (
          <motion.ul
            ref={listRef}
            id={listId}
            role="listbox"
            aria-label={ariaLabel}
            initial={{ opacity: 0, y: -6, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -6, scale: 0.98 }}
            transition={{ duration: 0.16, ease: [0.22, 1, 0.36, 1] }}
            className="no-scrollbar absolute z-30 mt-2 max-h-60 w-full overflow-auto rounded-[16px] border border-line bg-bg-2/95 p-1.5 shadow-2xl backdrop-blur-xl"
          >
            {options.map((opt, i) => {
              const selected = opt === value;
              const isActive = i === active;
              return (
                <li key={opt} role="option" aria-selected={selected}>
                  <button
                    type="button"
                    onClick={() => choose(opt)}
                    onMouseEnter={() => setActive(i)}
                    className={`flex w-full items-center justify-between rounded-[10px] px-3 py-2.5 text-left text-[14.5px] transition-colors ${
                      selected
                        ? "bg-lime/12 font-semibold text-lime"
                        : isActive
                          ? "bg-surface-2 text-cloud"
                          : "text-cloud"
                    }`}
                  >
                    {opt}
                    {selected && <Icon name="check" size={16} />}
                  </button>
                </li>
              );
            })}
          </motion.ul>
        )}
      </AnimatePresence>
    </div>
  );
}
