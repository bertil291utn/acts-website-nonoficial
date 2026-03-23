import { PageHero } from "@/components/page-hero";
import { Link } from "@/i18n/navigation";
import { localeToDateStringLocale } from "@/lib/locale-dates";
import { posts, type PostSlug } from "@/lib/posts";
import { routing } from "@/i18n/routing";
import { buildPageMetadata } from "@/lib/seo";
import { postPath } from "@/lib/site";
import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { notFound } from "next/navigation";

type Props = { params: Promise<{ locale: string; slug: string }> };

export function generateStaticParams() {
  return routing.locales.flatMap((locale) =>
    (Object.keys(posts) as PostSlug[]).map((slug) => ({ locale, slug })),
  );
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale, slug } = await params;
  const post = posts[slug as PostSlug];
  if (!post) return { title: "Not found" };
  const t = await getTranslations({ locale, namespace: "Posts" });
  const tSite = await getTranslations({ locale, namespace: "site" });
  const slugKey = slug as PostSlug;
  return buildPageMetadata({
    locale,
    pathname: postPath(slugKey),
    title: t(`${post.tKey}.title`),
    description: t(`${post.tKey}.excerpt`),
    siteName: tSite("name"),
  });
}

export default async function PostPage({ params }: Props) {
  const { locale, slug } = await params;
  const post = posts[slug as PostSlug];
  if (!post) notFound();

  setRequestLocale(locale);
  const t = await getTranslations({ locale, namespace: "Posts" });
  const tk = post.tKey;

  return (
    <article>
      <PageHero
        title={t(`${tk}.title`)}
        subtitle={t(`${tk}.excerpt`)}
        imageSrc={post.coverSrc}
        imageAlt={t(`${tk}.coverAlt`)}
        kicker={t(`${tk}.kicker`)}
      />

      <div className="mx-auto max-w-3xl px-4 py-16 sm:px-6">
        <p className="text-sm text-acts-muted">
          {new Date(post.date).toLocaleDateString(localeToDateStringLocale(locale), {
            year: "numeric",
            month: "long",
            day: "numeric",
          })}
        </p>

        <div className="prose prose-invert mt-8 max-w-none prose-headings:font-serif prose-headings:text-acts-cream prose-a:text-acts-teal">
          <p className="lead text-xl text-acts-muted">{t(`${tk}.lead`)}</p>
          <h3 className="font-serif text-2xl text-acts-cream">{t(`${tk}.hPartnership`)}</h3>
          <p>{t(`${tk}.pPartnership`)}</p>
          <h3 className="font-serif text-2xl text-acts-cream">{t(`${tk}.hLand`)}</h3>
          <p>{t(`${tk}.pLand`)}</p>
          <h3 className="font-serif text-2xl text-acts-cream">{t(`${tk}.hPeople`)}</h3>
          <p>{t(`${tk}.pPeople`)}</p>
          <p className="font-medium text-acts-cream">{t(`${tk}.closing`)}</p>
          <p className="not-prose mt-8 text-sm font-semibold">
            <Link href="/ecuador" className="text-acts-teal underline">
              {t(`${tk}.schoolLink`)}
            </Link>
          </p>
        </div>

        <div className="mt-14 flex flex-wrap gap-3 border-t border-white/10 pt-10">
          <Link
            href="/blog"
            className="text-sm font-semibold text-acts-teal hover:underline"
          >
            {t("backBlog")}
          </Link>
          <Link
            href="/"
            className="text-sm font-semibold text-acts-muted hover:text-acts-cream"
          >
            {t("home")}
          </Link>
        </div>
      </div>
    </article>
  );
}
