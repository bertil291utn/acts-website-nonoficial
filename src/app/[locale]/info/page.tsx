import { CoordinatorsTable } from "@/components/coordinators-table";
import { InfoContactForm } from "@/components/info-contact-form";
import { PageHero } from "@/components/page-hero";
import { coordinators } from "@/data/coordinators";
import { acts29Media } from "@/lib/acts29-media";
import { buildPageMetadata } from "@/lib/seo";
import { officialInfoEmail, officialInfoMailto, site } from "@/lib/site";
import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "Info" });
  const tSite = await getTranslations({ locale, namespace: "site" });
  return buildPageMetadata({
    locale,
    pathname: "/info",
    title: t("metaTitle"),
    description: t("metaDescription"),
    siteName: tSite("name"),
  });
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
        className="scroll-mt-28 border-b border-white/10 bg-acts-charcoal py-16"
      >
        <div className="mx-auto grid max-w-6xl gap-12 px-4 sm:px-6 lg:grid-cols-2">
          <div>
            <h2 className="font-serif text-2xl font-semibold text-acts-cream">
              {t("formTitle")}
            </h2>
            <p className="mt-2 text-acts-muted">{t("formNote")}</p>
            <InfoContactForm />
          </div>
          <aside className="rounded-2xl border border-white/10 bg-acts-slate/80 p-8">
            <h3 className="font-serif text-lg font-semibold text-acts-cream">
              {t("asideTitle")}
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-acts-muted">
              {t("asideBody")}
            </p>
            <ul className="mt-6 space-y-3 text-sm text-acts-muted">
              <li>
                <span className="font-semibold text-acts-cream">
                  {t("asideEmailLabel")}
                </span>
                <br />
                <a
                  href={officialInfoMailto}
                  className="text-acts-teal underline hover:no-underline"
                >
                  {officialInfoEmail}
                </a>
              </li>
              <li>
                <span className="font-semibold text-acts-cream">
                  {t("asideSocialLabel")}
                </span>
                <ul className="mt-2 space-y-2">
                  {site.social.map((s) => (
                    <li key={s.href}>
                      <a
                        href={s.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-acts-teal underline hover:no-underline"
                      >
                        {s.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </li>
            </ul>
          </aside>
        </div>
      </section>

      <section
        id="coordinators"
        className="scroll-mt-28 border-b border-white/10 bg-acts-slate/30 py-16"
      >
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <h2 className="font-serif text-2xl font-semibold text-acts-cream">
            {t("tableSectionTitle")}
          </h2>
          <p className="mt-2 max-w-3xl text-acts-muted">{t("tableSectionLead")}</p>
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
        <h2 className="font-serif text-2xl font-semibold text-acts-cream">
          {t("faqTitle")}
        </h2>
        <div className="mt-8 divide-y divide-white/10">
          {faqIds.map((id, i) => (
            <details
              key={id}
              className="group py-4"
              open={i === 0}
            >
              <summary className="cursor-pointer list-none font-medium text-acts-cream">
                <span className="mr-2 inline-block transition group-open:rotate-90">
                  ›
                </span>
                {t(`${id}.q`)}
              </summary>
              <p className="mt-3 pl-6 text-sm leading-relaxed text-acts-muted">
                {t(`${id}.a`)}
              </p>
            </details>
          ))}
        </div>
      </section>
    </>
  );
}
