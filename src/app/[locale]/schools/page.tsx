import { PageHero } from "@/components/page-hero";
import { Link } from "@/i18n/navigation";
import { acts29Media } from "@/lib/acts29-media";
import { ecuadorCountryPostPath, ecuadorPostPath } from "@/lib/site";
import type { Metadata } from "next";
import { getMessages, getTranslations, setRequestLocale } from "next-intl/server";

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "Schools" });
  return {
    title: t("metaTitle"),
    description: t("metaDescription"),
  };
}

const regionIds = ["latam", "europe", "other"] as const;

export default async function SchoolsPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("Schools");
  const messages = await getMessages();
  const places = messages.Schools.places as Record<
    (typeof regionIds)[number],
    string[]
  >;

  return (
    <>
      <PageHero
        title={t("heroTitle")}
        subtitle={t("heroSubtitle")}
        imageSrc={acts29Media.schoolsHero}
        imageAlt={t("heroAlt")}
        kicker={t("kicker")}
      />

      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <p className="max-w-3xl text-lg leading-relaxed text-slate-600">
          {t("intro")}
        </p>

        <div className="mt-10 rounded-2xl bg-acts-navy px-6 py-10 text-white sm:px-10">
          <h2 className="font-serif text-2xl font-semibold">{t("ctaTitle")}</h2>
          <p className="mt-3 max-w-2xl text-white/90">{t("ctaBody")}</p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Link
              href="/ecuador"
              className="inline-flex rounded-md bg-white px-5 py-2.5 text-sm font-semibold text-acts-navy"
            >
              {t("ctaHub")}
            </Link>
            <Link
              href={ecuadorCountryPostPath}
              className="inline-flex rounded-md border border-white/40 px-5 py-2.5 text-sm font-semibold text-white"
            >
              {t("ctaCountry")}
            </Link>
          </div>
        </div>

        <div className="mt-14 rounded-2xl border border-slate-200 bg-slate-50/80 p-8 sm:p-10">
          <h2 className="font-serif text-2xl font-semibold text-acts-navy">
            {t("newsTitle")}
          </h2>
          <div className="mt-6 grid gap-8 md:grid-cols-2">
            <article>
              <h3 className="font-serif text-lg font-semibold text-acts-navy">
                {t("news1Title")}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">
                {t("news1Body")}
              </p>
            </article>
            <article>
              <h3 className="font-serif text-lg font-semibold text-acts-navy">
                {t("news2Title")}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">
                {t("news2Body")}
              </p>
            </article>
          </div>
        </div>

        <div className="mt-12 grid gap-8 lg:grid-cols-3">
          {regionIds.map((id) => (
            <article
              key={id}
              className="flex flex-col rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
            >
              <h2 className="font-serif text-xl font-semibold text-acts-navy">
                {t(`regions.${id}.name`)}
              </h2>
              <ul className="mt-4 flex flex-wrap gap-2">
                {places[id].map((p) => (
                  <li
                    key={p}
                    className="rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-700"
                  >
                    {p}
                  </li>
                ))}
              </ul>
              <p className="mt-4 text-sm leading-relaxed text-slate-600">
                {t(`regions.${id}.note`)}
              </p>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
