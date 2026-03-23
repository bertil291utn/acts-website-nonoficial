import { GalleryCarousel } from "@/components/gallery-carousel";
import { PageHero } from "@/components/page-hero";
import { acts29GalleryImages, acts29Media } from "@/lib/acts29-media";
import { buildPageMetadata } from "@/lib/seo";
import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "Gallery" });
  const tSite = await getTranslations({ locale, namespace: "site" });
  return buildPageMetadata({
    locale,
    pathname: "/gallery",
    title: t("metaTitle"),
    description: t("metaDescription"),
    siteName: tSite("name"),
  });
}

export default async function GalleryPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("Gallery");

  const imageAlts = acts29GalleryImages.map((_, i) =>
    t("slideAlt", { n: i + 1 }),
  );

  return (
    <>
      <PageHero
        title={t("heroTitle")}
        subtitle={t("heroSubtitle")}
        imageSrc={acts29Media.community}
        imageAlt={t("heroAlt")}
        kicker={t("kicker")}
      />

      <section className="mx-auto max-w-4xl px-4 py-16 sm:px-6">
        <p className="text-center text-xs font-semibold uppercase tracking-[0.2em] text-acts-muted">
          {t("eyebrow")}
        </p>
        <h2 className="mt-2 text-center font-serif text-2xl font-semibold text-acts-cream sm:text-3xl">
          {t("sectionTitle")}
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-center text-acts-muted">
          {t("sectionBody")}
        </p>
        <div className="mt-8">
          <GalleryCarousel
            images={acts29GalleryImages}
            imageAlts={imageAlts}
          />
        </div>
      </section>
    </>
  );
}
