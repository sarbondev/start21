import type { IconName } from "@/components/ui/Icon";

export interface Feature {
  icon: IconName;
  title: string;
  text: string;
  accent: "lime" | "sky" | "mint" | "amber" | "coral";
}

export interface CourseT {
  slug: string;
  name: string;
  tag: string;
  outcome: string;
  duration: string;
  perWeek: string;
  format: string;
  level: string;
  highlights: string[];
  popular?: boolean;
}

export interface MethodStep {
  step: string;
  title: string;
  text: string;
}

export interface Testimonial {
  name: string;
  result: string;
  course: string;
  quote: string;
}

export interface Branch {
  name: string;
  area: string;
  note: string;
}

export interface Faq {
  q: string;
  a: string;
}

export interface Dictionary {
  nav: { id: string; label: string }[];
  common: {
    register: string;
    consult: string;
    enroll: string;
    callUs: string;
    questionCta: string;
    phoneLabel: string;
  };
  hero: {
    badge: string;
    titleTop: string;
    titleAccent: string;
    subtitle: string;
    ctaPrimary: string;
    ctaSecondary: string;
    microtrust: string;
    statBoxes: { k: string; l: string }[];
    chips: string[];
    floating: { value: string; label: string }[];
    callLine: string;
  };
  trustItems: string[];
  stats: { value: number; suffix: string; label: string; sub: string }[];
  why: {
    kicker: string;
    title: string;
    titleHi: string;
    subtitle: string;
    features: Feature[];
  };
  courses: {
    kicker: string;
    title: string;
    subtitle: string;
    items: CourseT[];
    groupLabel: string;
  };
  method: {
    kicker: string;
    titlePlain: string;
    titleAccent: string;
    subtitle: string;
    steps: MethodStep[];
  };
  results: {
    kicker: string;
    titlePlain: string;
    titleAccent: string;
    subtitle: string;
    bigStats: { k: string; l: string; accent: string }[];
    items: Testimonial[];
  };
  branches: {
    kicker: string;
    title: string;
    subtitle: string;
    items: Branch[];
    ctaCard: string;
  };
  faq: {
    kicker: string;
    title: string;
    subtitle: string;
    items: Faq[];
  };
  register: {
    badge: string;
    title: string;
    text: string;
    benefits: string[];
    formTitle: string;
    nameLabel: string;
    namePlaceholder: string;
    phoneLabel: string;
    courseLabel: string;
    branchLabel: string;
    optional: string;
    selectPlaceholder: string;
    submit: string;
    submitting: string;
    consent: string;
    successTitle: string;
    successId: string;
    telegramCta: string;
    errors: {
      name: string;
      phone: string;
      course: string;
      form: string;
    };
    courseOptions: string[];
  };
  finalCta: {
    kicker: string;
    title: string;
    text: string;
    button: string;
  };
  footer: {
    about: string;
    nav: string;
    contact: string;
    rights: string;
    builtFor: string;
  };
  meta: {
    title: string;
    description: string;
    keywords: string[];
  };
}
