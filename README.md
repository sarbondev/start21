# START21 — landing (Next.js)

Namangandagi **START21** ingliz tili o'quv markazi uchun zamonaviy, marketingga yo'naltirilgan landing sayt. Eski Tilda saytining o'rnini bosadigan, natijaga (ariza) qaratilgan premium versiya.

## Texnologiyalar

- **Next.js 15** (App Router, SSG) — kuchli SEO
- **TypeScript**
- **Tailwind CSS v4** (design tokenlar `@theme` orqali)
- **Redux Toolkit + RTK Query** — UI holati va ariza yuborish (`/api/lead`)
- **Framer Motion** — scroll-reveal va mikroanimatsiyalar
- **lucide-react** — ikonkalar
- **3 til**: O'zbekcha (standart), Ruscha, Inglizcha — `[locale]` marshruti + hreflang

## Ishga tushirish

```bash
npm install
npm run dev      # http://localhost:3000  (development)
```

Production:

```bash
npm run build
npm start
```

## Tuzilma

```
src/
  app/
    [locale]/        # layout (SEO metadata, JSON-LD), page (barcha bo'limlar)
    api/lead/        # ariza qabul qiluvchi endpoint (demo)
    sitemap.ts robots.ts manifest.ts
  components/
    layout/          # Navbar, Footer, LanguageSwitcher
    sections/        # Hero, WhyUs, Courses, Method, Results, Branches, Register, Faq, FinalCta...
    ui/              # Button, Select, Counter, Reveal, Icon, SectionHeading...
    i18n/            # LocaleProvider (dict konteksti)
  lib/
    i18n/            # config + uz/ru/en lug'atlari (barcha matnlar shu yerda)
    seo.ts           # JSON-LD @graph (FAQPage, Course, LocalBusiness) + hreflang
  middleware.ts      # til aniqlash/redirect (standart — uz)
```

## SEO

- Har bir til uchun alohida `title`, `description`, `keywords`, OG/Twitter
- `hreflang` (uz/ru/en + **x-default**) va canonical
- Boy **JSON-LD**: EducationalOrganization + LocalBusiness, WebSite, **FAQPage**, **Course** ro'yxati, AggregateRating, OpeningHours
- `sitemap.xml`, `robots.txt`, `manifest.webmanifest`

## Eslatmalar (real ishga ulash uchun)

- **Ariza**: `src/app/api/lead/route.ts` hozir demo javob qaytaradi. Real loyihada bu yerga Telegram bot / CRM / Google Sheets integratsiyasini qo'shing.
- **Matnlar**: barcha marketing matnlari `src/lib/i18n/dictionaries/*.ts` da — tahrirlash oson.
- **Ranglar**: brend tokenlari `src/app/globals.css` `@theme` blokida (lime `#e6ff2c`, teal fon).
- **Logo**: hozir original CDN URL'idan olinmoqda (`SITE.logo`).
