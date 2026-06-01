"use client";

import { useState, type FormEvent } from "react";
import { motion } from "framer-motion";
import { SITE } from "@/lib/i18n/config";
import { useDict } from "@/components/i18n/LocaleProvider";
import { useSubmitLeadMutation } from "@/store/leadsApi";
import Icon from "@/components/ui/Icon";
import Select from "@/components/ui/Select";
import { Button } from "@/components/ui/Button";

export default function Register() {
  const { register, branches } = useDict();
  const [submitLead, { isLoading, isSuccess, data }] = useSubmitLeadMutation();
  const [form, setForm] = useState({ name: "", phone: "", course: "", branch: "" });
  const [errors, setErrors] = useState<Record<string, string>>({});

  const set = (k: string, v: string) => {
    setForm((p) => ({ ...p, [k]: v }));
    if (errors[k]) setErrors((p) => ({ ...p, [k]: "" }));
  };

  const formatPhone = (raw: string) => {
    let d = raw.replace(/\D/g, "");
    if (d.startsWith("998")) d = d.slice(3);
    d = d.slice(0, 9);
    const p = ["+998"];
    if (d.length) p.push(" " + d.slice(0, 2));
    if (d.length > 2) p.push(" " + d.slice(2, 5));
    if (d.length > 5) p.push("-" + d.slice(5, 7));
    if (d.length > 7) p.push("-" + d.slice(7, 9));
    return p.join("");
  };

  const validate = () => {
    const e: Record<string, string> = {};
    if (form.name.trim().length < 2) e.name = register.errors.name;
    if (form.phone.replace(/\D/g, "").length < 12) e.phone = register.errors.phone;
    if (!form.course) e.course = register.errors.course;
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const onSubmit = async (ev: FormEvent) => {
    ev.preventDefault();
    if (!validate()) return;
    try {
      await submitLead({ ...form, branch: form.branch || "—" }).unwrap();
    } catch {
      setErrors({ form: register.errors.form });
    }
  };

  return (
    <section id="royxat" className="relative scroll-mt-24 py-20 md:py-28">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-lime/30 to-transparent" />
      <div className="container-x">
        <div className="overflow-hidden rounded-[28px] border border-line bg-gradient-to-br from-surface-2/70 via-surface/50 to-bg-2/60">
          <div className="grid lg:grid-cols-2">
            {/* Left — pitch */}
            <div className="relative flex flex-col justify-between p-8 sm:p-10 lg:p-12">
              <div className="pointer-events-none absolute -left-10 -top-10 h-48 w-48 rounded-full bg-lime/10 blur-3xl" />
              <div className="relative">
                <div className="inline-flex items-center gap-2 rounded-full bg-lime/12 px-3.5 py-1.5 text-[12.5px] font-semibold uppercase tracking-wide text-lime">
                  <span className="h-1.5 w-1.5 rounded-full bg-lime animate-livepulse" />
                  {register.badge}
                </div>
                <h2 className="mt-5 font-display text-3xl font-bold leading-tight text-cloud sm:text-4xl">
                  {register.title}
                </h2>
                <p className="mt-4 text-[15.5px] leading-relaxed text-muted">{register.text}</p>

                <ul className="mt-7 space-y-3">
                  {register.benefits.map((b) => (
                    <li key={b} className="flex items-start gap-3 text-[14.5px] text-cloud">
                      <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-lime/15">
                        <Icon name="check" size={13} className="text-lime" />
                      </span>
                      {b}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="relative mt-8 flex flex-wrap items-center gap-4 border-t border-line-soft pt-6">
                <a
                  href={`tel:${SITE.phonePrimaryHref}`}
                  className="flex items-center gap-2 text-sm font-medium text-cloud hover:text-lime"
                >
                  <Icon name="phone" size={16} className="text-lime" />
                  {SITE.phonePrimary}
                </a>
                <a
                  href={SITE.telegram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm font-medium text-cloud hover:text-lime"
                >
                  <Icon name="telegram" size={16} className="text-sky" />
                  Telegram
                </a>
              </div>
            </div>

            {/* Right — form */}
            <div className="border-t border-line-soft bg-bg-2/50 p-8 sm:p-10 lg:border-l lg:border-t-0 lg:p-12">
              {isSuccess ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.96 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex h-full flex-col items-center justify-center py-10 text-center"
                >
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-lime/15">
                    <Icon name="check" size={32} className="text-lime" />
                  </div>
                  <h3 className="mt-5 font-display text-2xl font-bold text-cloud">
                    {register.successTitle}
                  </h3>
                  <p className="mt-3 max-w-sm text-[15px] text-muted">{data?.message}</p>
                  {data?.id && (
                    <p className="mt-2 text-[13px] text-faint">
                      {register.successId}{" "}
                      <span className="font-semibold text-cloud">{data.id}</span>
                    </p>
                  )}
                  <a
                    href={SITE.telegram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-6 inline-flex items-center gap-2 rounded-full bg-surface px-5 py-2.5 text-sm font-medium text-cloud ring-1 ring-line hover:text-lime"
                  >
                    <Icon name="telegram" size={16} className="text-sky" />
                    {register.telegramCta}
                  </a>
                </motion.div>
              ) : (
                <form onSubmit={onSubmit} noValidate className="space-y-4">
                  <Field label={register.nameLabel} error={errors.name}>
                    <input
                      type="text"
                      value={form.name}
                      onChange={(e) => set("name", e.target.value)}
                      placeholder={register.namePlaceholder}
                      className="s21-input"
                      autoComplete="name"
                    />
                  </Field>

                  <Field label={register.phoneLabel} error={errors.phone}>
                    <input
                      type="tel"
                      inputMode="tel"
                      value={form.phone}
                      onChange={(e) => set("phone", formatPhone(e.target.value))}
                      onFocus={(e) => !e.target.value && set("phone", "+998 ")}
                      placeholder="+998 90 123-45-67"
                      className="s21-input tnum"
                      autoComplete="tel"
                    />
                  </Field>

                  <div className="grid gap-4 sm:grid-cols-2">
                    <Field label={register.courseLabel} error={errors.course}>
                      <Select
                        value={form.course}
                        onChange={(v) => set("course", v)}
                        placeholder={register.selectPlaceholder}
                        options={register.courseOptions}
                        ariaLabel={register.courseLabel}
                        error={!!errors.course}
                      />
                    </Field>
                    <Field label={register.branchLabel} optional={register.optional}>
                      <Select
                        value={form.branch}
                        onChange={(v) => set("branch", v)}
                        placeholder={register.selectPlaceholder}
                        options={branches.items.map((b) => b.name)}
                        ariaLabel={register.branchLabel}
                      />
                    </Field>
                  </div>

                  {errors.form && <p className="text-[13px] text-coral">{errors.form}</p>}

                  <Button
                    type="submit"
                    size="lg"
                    icon={isLoading ? undefined : "arrow"}
                    disabled={isLoading}
                    className="w-full"
                  >
                    {isLoading ? (
                      <span className="flex items-center gap-2">
                        <span className="h-4 w-4 animate-spin rounded-full border-2 border-ink/30 border-t-ink" />
                        {register.submitting}
                      </span>
                    ) : (
                      register.submit
                    )}
                  </Button>

                  <p className="text-center text-[12.5px] leading-relaxed text-faint">
                    {register.consent}
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .s21-input {
          width: 100%;
          height: 52px;
          border-radius: 14px;
          background: var(--color-surface);
          border: 1px solid var(--color-line-soft);
          padding: 0 16px;
          color: var(--color-cloud);
          font-size: 15px;
          transition: border-color .2s, background-color .2s;
        }
        .s21-input::placeholder { color: var(--color-faint); }
        .s21-input:focus {
          outline: none;
          border-color: var(--color-lime);
          background: var(--color-surface-2);
        }
      `}</style>
    </section>
  );
}

function Field({
  label,
  error,
  optional,
  children,
}: {
  label: string;
  error?: string;
  optional?: string;
  children: React.ReactNode;
}) {
  return (
    <label className="block">
      <span className="mb-1.5 flex items-center gap-2 text-[13px] font-medium text-muted">
        {label}
        {optional && <span className="text-faint">{optional}</span>}
        {error && <span className="ml-auto text-[12px] text-coral">{error}</span>}
      </span>
      {children}
    </label>
  );
}
