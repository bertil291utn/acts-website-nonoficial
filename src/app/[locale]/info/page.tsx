import { CoordinatorsTable } from "@/components/coordinators-table";
import { PageHero } from "@/components/page-hero";
import { coordinators } from "@/data/coordinators";
import { Link } from "@/i18n/navigation";
import { acts29Media } from "@/lib/acts29-media";
import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "Info" });
  return {
    title: t("metaTitle"),
    description: t("metaDescription"),
  };
}

const faqIds = ["faq1", "faq2", "faq3"] as const;

export default async function InfoPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("Info");

  return (
    <>
      <PageHero
        title={t("heroTitle")}
        subtitle={t("heroSubtitle")}
        imageSrc={acts29Media.infoHero}
        imageAlt={t("heroAlt")}
        kicker={t("kicker")}
      />

      <section
        id="contact"
        className="scroll-mt-28 border-b border-slate-200 bg-white py-16"
      >
        <div className="mx-auto grid max-w-6xl gap-12 px-4 sm:px-6 lg:grid-cols-2">
          <div>
            <h2 className="font-serif text-2xl font-semibold text-acts-navy">
              {t("formTitle")}
            </h2>
            <p className="mt-2 text-slate-600">{t("formNote")}</p>
            <form className="mt-8 space-y-6" action="#" method="post">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-slate-700"
                >
                  {t("labels.name")}
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  autoComplete="name"
                  className="mt-1 w-full border-b border-slate-300 bg-transparent py-2 text-slate-900 outline-none focus:border-acts-navy"
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-slate-700"
                >
                  {t("labels.email")}
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  className="mt-1 w-full border-b border-slate-300 bg-transparent py-2 text-slate-900 outline-none focus:border-acts-navy"
                />
              </div>
              <div>
                <label
                  htmlFor="country"
                  className="block text-sm font-medium text-slate-700"
                >
                  {t("labels.country")}
                </label>
                <input
                  id="country"
                  name="country"
                  type="text"
                  autoComplete="country-name"
                  className="mt-1 w-full border-b border-slate-300 bg-transparent py-2 text-slate-900 outline-none focus:border-acts-navy"
                />
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-slate-700"
                >
                  {t("labels.message")}
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  className="mt-1 w-full border border-slate-200 bg-slate-50 px-3 py-2 text-slate-900 outline-none focus:border-acts-navy"
                />
              </div>
              <button
                type="submit"
                className="inline-flex rounded-md bg-acts-navy px-8 py-3 text-sm font-semibold text-white"
              >
                {t("submit")}
              </button>
            </form>
          </div>
          <aside className="rounded-2xl border border-slate-200 bg-slate-50 p-8">
            <h3 className="font-serif text-lg font-semibold text-acts-navy">
              {t("asideTitle")}
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-slate-600">
              {t("asideBody")}
            </p>
            <ul className="mt-6 space-y-3 text-sm text-slate-700">
              <li>
                <span className="font-semibold text-acts-navy">
                  {t("asideEmailLabel")}
                </span>
                <br />
                <a
                  href="mailto:info@acts29.world"
                  className="text-acts-navy underline hover:no-underline"
                >
                  {t("asideEmail")}
                </a>
              </li>
              <li>
                <span className="font-semibold text-acts-navy">
                  {t("asideSocialLabel")}
                </span>
                <br />
                <Link href="/" className="underline hover:text-acts-navy">
                  {t("asideSocialLink")}
                </Link>
              </li>
            </ul>
          </aside>
        </div>
      </section>

      <section
        id="coordinators"
        className="scroll-mt-28 border-b border-slate-200 bg-slate-50 py-16"
      >
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <h2 className="font-serif text-2xl font-semibold text-acts-navy">
            {t("tableSectionTitle")}
          </h2>
          <p className="mt-2 max-w-3xl text-slate-600">{t("tableSectionLead")}</p>
          <div className="mt-8">
            <CoordinatorsTable
              rows={coordinators}
              caption={t("tableCaption")}
              colCountry={t("colCountry")}
              colContact={t("colContact")}
              colPhone={t("colPhone")}
              colEmail={t("colEmail")}
            />
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-4 py-16 sm:px-6">
        <h2 className="font-serif text-2xl font-semibold text-acts-navy">
          {t("faqTitle")}
        </h2>
        <div className="mt-8 divide-y divide-slate-200">
          {faqIds.map((id, i) => (
            <details
              key={id}
              className="group py-4"
              open={i === 0}
            >
              <summary className="cursor-pointer list-none font-medium text-acts-navy">
                <span className="mr-2 inline-block transition group-open:rotate-90">
                  ›
                </span>
                {t(`${id}.q`)}
              </summary>
              <p className="mt-3 pl-6 text-sm leading-relaxed text-slate-600">
                {t(`${id}.a`)}
              </p>
            </details>
          ))}
        </div>
      </section>
    </>
  );
}
