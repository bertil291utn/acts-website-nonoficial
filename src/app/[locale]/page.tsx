import { funnel } from "@/lib/funnel";
import { acts29Media } from "@/lib/acts29-media";
import { ecuadorCountryPostPath, ecuadorPostPath } from "@/lib/site";
import { getTranslations, setRequestLocale } from "next-intl/server";
import Image from "next/image";
import { Link } from "@/i18n/navigation";

type Props = { params: Promise<{ locale: string }> };

const pillarIds = ["d1", "d2", "d3"] as const;
const statIds = ["s1", "s2", "s3"] as const;
const partnerIds = ["p1", "p2"] as const;
const pillarMedia = [
  acts29Media.discipleship,
  acts29Media.leadership,
  acts29Media.mission,
] as const;
const stepKeys = ["s1", "s2", "s3", "s4"] as const;

export default async function HomePage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);

  const t = await getTranslations("Home");
  const tf = await getTranslations("funnel");

  const pillars = pillarIds.map((id, idx) => ({
    title: t(`pillars.${id}.title`),
    body: t(`pillars.${id}.body`),
    icon: id === "d1" ? "◎" : id === "d2" ? "◇" : "✦",
    image: pillarMedia[idx],
  }));

  const stats = statIds.map((id) => ({
    value: t(`stats.${id}.value`),
    label: t(`stats.${id}.label`),
  }));

  return (
    <>
      <section
        data-section="hero"
        className="relative overflow-hidden bg-acts-charcoal"
      >
        <div className="mx-auto grid max-w-6xl gap-10 px-4 py-16 sm:grid-cols-2 sm:items-center sm:px-6 lg:gap-16 lg:py-24">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-acts-muted">
              {t("eyebrow")}
            </p>
            <h1 className="mt-4 font-serif text-4xl font-semibold tracking-tight text-acts-cream sm:text-5xl">
              {t("heroLine1")}
              <span className="block text-acts-muted">{t("heroLine2")}</span>
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-acts-muted">
              {t("heroBody")}
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href={ecuadorPostPath}
                className="inline-flex rounded-md bg-acts-lime px-6 py-3 text-sm font-semibold text-acts-on-lime shadow-sm transition hover:bg-acts-lime/90"
              >
                {tf("primaryCta")}
              </Link>
              <Link
                href={funnel.secondaryCta.href}
                className="inline-flex rounded-md border border-white/25 bg-transparent px-6 py-3 text-sm font-semibold text-acts-cream transition hover:border-acts-teal hover:text-acts-teal"
              >
                {tf("secondaryCta")}
              </Link>
            </div>
          </div>
          <div className="relative aspect-4/5 overflow-hidden rounded-2xl bg-acts-slate shadow-lg sm:aspect-3/4">
            <Image
              src={acts29Media.hero}
              alt={t("photoAlt")}
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
              priority
            />
            <div className="absolute bottom-4 left-4 right-4 rounded-xl border border-white/10 bg-acts-slate/95 p-4 shadow-lg backdrop-blur">
              <p className="font-serif text-lg font-semibold text-acts-cream">
                {t("quoteCard")}
              </p>
              <p className="mt-1 text-sm text-acts-muted">{t("quoteSub")}</p>
            </div>
          </div>
        </div>
      </section>

      <section
        data-section="partners"
        className="border-y border-white/10 bg-acts-slate py-12"
      >
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <p className="text-center text-xs font-semibold uppercase tracking-[0.2em] text-acts-muted">
            {t("partnersEyebrow")}
          </p>
          <div className="mt-6 flex flex-wrap items-center justify-center gap-x-10 gap-y-4 opacity-80 grayscale">
            {partnerIds.map((id) => (
              <span
                key={id}
                className="font-serif text-lg font-semibold text-acts-muted"
              >
                {t(`partners.${id}`)}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-20 sm:px-6" data-section="vision">
        <div className="max-w-2xl">
          <h2 className="font-serif text-3xl font-semibold text-acts-cream sm:text-4xl">
            {t("visionTitle")}
          </h2>
          <blockquote className="mt-6 border-l-4 border-acts-lime pl-6 text-xl leading-relaxed text-acts-muted">
            {t("visionQuote")}
          </blockquote>
        </div>

        <div
          className="mt-16 grid gap-6 sm:grid-cols-3"
          data-section="pillars"
        >
          {pillars.map((p) => (
            <article
              key={p.title}
              className="overflow-hidden rounded-2xl border border-white/10 bg-acts-slate/80 shadow-sm"
            >
              <div className="relative aspect-4/3 bg-acts-slate">
                <Image
                  src={p.image}
                  alt=""
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 33vw"
                />
              </div>
              <div className="p-6">
                <span className="text-2xl text-acts-lime">{p.icon}</span>
                <h3 className="mt-3 font-serif text-xl font-semibold text-acts-cream">
                  {p.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-acts-muted">
                  {p.body}
                </p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section
        data-section="celebrate"
        className="border-y border-white/10 bg-acts-charcoal py-16"
      >
        <div className="mx-auto grid max-w-6xl gap-10 px-4 sm:grid-cols-2 sm:items-center sm:px-6 lg:gap-16">
          <div className="relative aspect-4/3 overflow-hidden rounded-2xl bg-acts-slate shadow-lg">
            <Image
              src={acts29Media.celebrate}
              alt={t("celebrateAlt")}
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-acts-muted">
              {t("celebrateEyebrow")}
            </p>
            <h2 className="mt-2 font-serif text-3xl font-semibold text-acts-cream sm:text-4xl">
              {t("celebrateTitle")}
              <span className="block text-acts-muted">{t("celebrateSubtitle")}</span>
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-acts-muted">
              {t("celebrateBody")}
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6" data-section="movement">
        <h2 className="font-serif text-2xl font-semibold text-acts-cream sm:text-3xl">
          {t("movementTitle")}
        </h2>
        <p className="mt-4 max-w-3xl text-lg leading-relaxed text-acts-muted">
          {t("movementBody")}
        </p>
      </section>

      <section
        data-section="path"
        className="bg-acts-slate py-20 text-white"
      >
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="flex flex-col gap-10 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-xl">
              <h2 className="font-serif text-3xl font-semibold sm:text-4xl">
                {tf("pathTitle")}
              </h2>
              <p className="mt-4 text-white/85">{tf("pathBody")}</p>
            </div>
            <Link
              href="/info"
              className="inline-flex w-fit rounded-md bg-acts-lime px-6 py-3 text-sm font-semibold text-acts-on-lime hover:bg-acts-lime/90"
            >
              {tf("pathCta")}
            </Link>
          </div>
          <ol className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {stepKeys.map((k, i) => (
              <li
                key={k}
                className="rounded-xl border border-white/20 bg-white/5 p-5"
              >
                <span className="text-xs font-semibold uppercase tracking-wide text-white/70">
                  {t("stepLabel", { n: i + 1 })}
                </span>
                <p className="mt-2 font-medium">{tf(`steps.${k}`)}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section
        data-section="stats"
        className="mx-auto max-w-6xl px-4 py-20 sm:px-6"
      >
        <div className="grid gap-10 lg:grid-cols-3 lg:items-center">
          {stats.map((s) => (
            <div key={s.label} className="text-center lg:text-left">
              <p className="font-serif text-4xl font-semibold text-acts-lime">
                {s.value}
              </p>
              <p className="mt-1 text-sm font-medium uppercase tracking-wide text-acts-muted">
                {s.label}
              </p>
            </div>
          ))}
        </div>
        <div
          className="mt-14 overflow-hidden rounded-2xl border border-white/10"
          data-section="ecuador"
        >
          <div className="grid lg:grid-cols-2">
            <div className="relative min-h-[280px]">
              <Image
                src={acts29Media.community}
                alt={t("communityAlt")}
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
            <div className="flex flex-col justify-center bg-acts-slate p-8 sm:p-12">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-acts-muted">
                {t("ecuadorEyebrow")}
              </p>
              <h3 className="mt-2 font-serif text-2xl font-semibold text-acts-cream">
                {t("ecuadorTitle")}
              </h3>
              <p className="mt-3 text-acts-muted">{t("ecuadorBody")}</p>
              <div className="mt-6 flex flex-wrap gap-3">
                <Link
                  href="/ecuador"
                  className="inline-flex rounded-md bg-acts-lime px-5 py-2.5 text-sm font-semibold text-acts-on-lime hover:bg-acts-lime/90"
                >
                  {t("ecuadorHub")}
                </Link>
                <Link
                  href={ecuadorCountryPostPath}
                  className="inline-flex rounded-md border border-white/25 bg-transparent px-5 py-2.5 text-sm font-semibold text-acts-cream hover:border-acts-teal"
                >
                  {t("ecuadorArticle")}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        data-section="closing"
        className="border-t border-white/10 bg-acts-charcoal py-16"
      >
        <div className="mx-auto flex max-w-6xl flex-col items-center px-4 text-center sm:px-6">
          <h2 className="font-serif text-3xl font-semibold text-acts-cream">
            {t("closingTitle")}
          </h2>
          <p className="mt-3 max-w-xl text-acts-muted">{t("closingBody")}</p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Link
              href="/info#contact"
              className="inline-flex rounded-md bg-acts-lime px-8 py-3 text-sm font-semibold text-acts-on-lime hover:bg-acts-lime/90"
            >
              {tf("coordinators")}
            </Link>
            <Link
              href="/blog"
              className="inline-flex rounded-md border border-white/25 px-8 py-3 text-sm font-semibold text-acts-cream hover:border-acts-teal"
            >
              {t("closingBlog")}
            </Link>
          </div>
        </div>
      </section>

      {/* Hidden audit hook: required sections from funnel config */}
      <span className="sr-only" aria-hidden>
        {funnel.requiredHomeSections.join(",")}
      </span>
    </>
  );
}
