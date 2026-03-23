import { EcuadorWordLinks } from "@/components/ecuador-word-links";
import { PageHero } from "@/components/page-hero";
import { Link } from "@/i18n/navigation";
import { acts29Media } from "@/lib/acts29-media";
import { buildPageMetadata } from "@/lib/seo";
import {
  ecuadorApplyEuropeExternalUrl,
  ecuadorApplyLatamDocx,
  ecuadorCountryPostPath,
} from "@/lib/site";
import type { Metadata } from "next";
import { getMessages, getTranslations, setRequestLocale } from "next-intl/server";
import Image from "next/image";

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "EcuadorPage" });
  const tSite = await getTranslations({ locale, namespace: "site" });
  return buildPageMetadata({
    locale,
    pathname: "/ecuador",
    title: t("metaTitle"),
    description: t("metaDescription"),
    siteName: tSite("name"),
  });
}

export default async function EcuadorPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("EcuadorPage");
  const messages = await getMessages();
  const school = messages.EcuadorPage.school as {
    daysList: string[];
    monthsList: string[];
  };

  return (
    <>
      <PageHero
        title={<EcuadorWordLinks text={t("heroTitle")} />}
        subtitle={<EcuadorWordLinks text={t("school.lead")} />}
        imageSrc={acts29Media.ecuadorHero}
        imageAlt={t("heroAlt")}
        kicker={t("school.kicker")}
      />

      <div className="mx-auto max-w-6xl px-4 pb-8 pt-6 sm:px-6">
        <Link
          href={ecuadorCountryPostPath}
          className="inline-flex rounded-md bg-acts-lime px-6 py-3 text-sm font-semibold text-acts-on-lime shadow-sm transition hover:bg-acts-lime/90"
        >
          {t("moreAboutEcuador")}
        </Link>
      </div>

      <section id="program" className="mx-auto max-w-3xl px-4 py-8 sm:px-6">
        <div className="prose prose-invert max-w-none prose-headings:font-serif prose-headings:text-acts-cream prose-a:text-acts-teal">
          <p className="not-prose font-serif text-xl font-semibold text-acts-cream">
            <EcuadorWordLinks text={t("school.pAndes")} />
          </p>
          <p className="text-acts-muted">
            <EcuadorWordLinks text={t("school.pHost")} />
          </p>
          <h3 className="font-serif text-xl text-acts-cream">
            <EcuadorWordLinks text={t("school.hSchool")} />
          </h3>
          <p>
            <EcuadorWordLinks text={t("school.pSchool")} />
          </p>
          <h3 className="font-serif text-xl text-acts-cream">
            <EcuadorWordLinks text={t("school.hWorld")} />
          </h3>
          <p>
            <EcuadorWordLinks text={t("school.pWorld")} />
          </p>
          <h3 className="font-serif text-xl text-acts-cream">
            <EcuadorWordLinks text={t("school.hDays")} />
          </h3>
          <ul className="list-disc space-y-2 pl-5">
            {school.daysList.map((line) => (
              <li key={line}>
                <EcuadorWordLinks text={line} />
              </li>
            ))}
          </ul>
          <p>
            <EcuadorWordLinks text={t("school.pWeekends")} />
          </p>
          <h3 className="font-serif text-xl text-acts-cream">
            <EcuadorWordLinks text={t("school.hFacts")} />
          </h3>
          <div className="not-prose my-6 grid gap-3 sm:grid-cols-2">
            {(
              [
                ["factDatesLabel", "factDates"],
                ["factLocationLabel", "factLocation"],
                ["factCostLabel", "factCost"],
                ["factLangLabel", "factLang"],
                ["factDeadlineLabel", "factDeadline"],
              ] as const
            ).map(([lk, vk]) => (
              <div
                key={vk}
                className="rounded-xl border border-white/10 bg-acts-slate/80 p-4 shadow-sm"
              >
                <p className="text-xs font-semibold uppercase text-acts-muted">
                  {t(`school.${lk}`)}
                </p>
                <p className="mt-1 text-sm font-medium text-acts-cream">
                  <EcuadorWordLinks text={t(`school.${vk}`)} />
                </p>
              </div>
            ))}
          </div>
          <h3 className="font-serif text-xl text-acts-cream">
            <EcuadorWordLinks text={t("school.hMonths")} />
          </h3>
          <ul className="list-disc space-y-2 pl-5">
            {school.monthsList.map((line) => (
              <li key={line}>
                <EcuadorWordLinks text={line} />
              </li>
            ))}
          </ul>
          <p className="font-medium text-acts-cream">
            <EcuadorWordLinks text={t("school.closing")} />
          </p>
          <h3 className="font-serif text-xl text-acts-cream">
            <EcuadorWordLinks text={t("school.hContact")} />
          </h3>
          <p>
            <EcuadorWordLinks text={t("school.pContact")} />
          </p>
          <h3 className="font-serif text-xl text-acts-cream">
            <EcuadorWordLinks text={t("school.applyTitle")} />
          </h3>
          <p>
            <EcuadorWordLinks text={t("school.applyBody")} />
          </p>

          <div className="not-prose mt-10 space-y-12 border-t border-white/10 pt-10">
            <div>
              <h3 className="font-serif text-xl font-semibold text-acts-cream">
                {t("applyLatamTitle")}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-acts-muted">
                <EcuadorWordLinks text={t("applyLatamBody")} />
              </p>
              <div className="mt-4 flex flex-wrap gap-3">
                <a
                  href={ecuadorApplyLatamDocx.applicationForm}
                  className="inline-flex rounded-md bg-acts-lime px-5 py-2.5 text-sm font-semibold text-acts-on-lime shadow-sm transition hover:bg-acts-lime/90"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {t("downloadApplicationForm")}
                </a>
                <a
                  href={ecuadorApplyLatamDocx.pastoralReference}
                  className="inline-flex rounded-md border border-white/25 bg-transparent px-5 py-2.5 text-sm font-semibold text-acts-cream transition hover:border-acts-teal"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {t("downloadPastoralReference")}
                </a>
              </div>
            </div>
            <div>
              <h3 className="font-serif text-xl font-semibold text-acts-cream">
                {t("applyEuropeTitle")}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-acts-muted">
                <EcuadorWordLinks text={t("applyEuropeBody")} />
              </p>
              <a
                href={ecuadorApplyEuropeExternalUrl}
                className="mt-4 inline-flex rounded-md bg-acts-lime px-5 py-2.5 text-sm font-semibold text-acts-on-lime shadow-sm transition hover:bg-acts-lime/90"
                target="_blank"
                rel="noopener noreferrer"
              >
                {t("applyHereCta")}
              </a>
            </div>
          </div>
        </div>

        <div className="relative mt-12 aspect-[16/9] overflow-hidden rounded-2xl bg-acts-slate lg:aspect-[2/1]">
          <Image
            src={acts29Media.community}
            alt={t("communityImageAlt")}
            fill
            className="object-cover"
            sizes="(max-width: 1024px) 100vw, 768px"
          />
        </div>
      </section>

      <section className="border-y border-white/10 bg-acts-charcoal py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="rounded-2xl bg-acts-slate px-6 py-12 text-white sm:px-12">
            <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
              <div>
                <h2 className="font-serif text-2xl font-semibold sm:text-3xl">
                  <EcuadorWordLinks text={t("bandTitle")} />
                </h2>
                <p className="mt-3 max-w-xl text-white/90">
                  <EcuadorWordLinks text={t("bandBody")} />
                </p>
              </div>
              <Link
                href="/info#contact"
                className="inline-flex shrink-0 rounded-md bg-acts-lime px-8 py-3 text-sm font-semibold text-acts-on-lime hover:bg-acts-lime/90"
              >
                {t("bandCta")}
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <h2 className="font-serif text-2xl font-semibold text-acts-cream">
          <EcuadorWordLinks text={t("beforeTitle")} />
        </h2>
        <ul className="mt-6 grid gap-4 sm:grid-cols-2">
          {(messages.EcuadorPage.checks as string[]).map((item) => (
            <li
              key={item}
              className="flex gap-3 rounded-lg border border-white/10 bg-acts-slate/50 p-4 text-sm text-acts-muted"
            >
              <span className="text-acts-lime">✓</span>
              <span>
                <EcuadorWordLinks text={item} />
              </span>
            </li>
          ))}
        </ul>
        <div className="mt-10 flex flex-wrap gap-3">
          <Link
            href="/info#contact"
            className="inline-flex rounded-md bg-acts-lime px-6 py-3 text-sm font-semibold text-acts-on-lime hover:bg-acts-lime/90"
          >
            {t("contactCta")}
          </Link>
          <Link
            href="/schools"
            className="inline-flex rounded-md border border-white/25 px-6 py-3 text-sm font-semibold text-acts-cream hover:border-acts-teal"
          >
            {t("schoolsCta")}
          </Link>
        </div>
      </section>
    </>
  );
}
