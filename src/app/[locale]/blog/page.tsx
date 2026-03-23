import { localeToDateStringLocale } from "@/lib/locale-dates";
import { posts } from "@/lib/posts";
import { Link } from "@/i18n/navigation";
import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";
import Image from "next/image";

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "Blog" });
  return {
    title: t("metaTitle"),
    description: t("metaDescription"),
  };
}

export default async function BlogPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("Blog");
  const tPosts = await getTranslations("Posts");

  const list = Object.values(posts)
    .map((p) => ({
      href: `/post/${p.slug}` as const,
      date: p.date,
      image: p.coverSrc,
      title: tPosts(`${p.tKey}.title`),
      excerpt: tPosts(`${p.tKey}.excerpt`),
    }))
    .sort((a, b) => (a.date < b.date ? 1 : -1));

  return (
    <div className="bg-acts-charcoal">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-acts-muted">
          {t("eyebrow")}
        </p>
        <h1 className="mt-2 font-serif text-4xl font-semibold text-acts-cream">
          {t("title")}
        </h1>
        <p className="mt-4 max-w-2xl text-lg text-acts-muted">{t("intro")}</p>

        <div className="mt-12 grid gap-8 sm:grid-cols-2">
          {list.map((post) => (
            <article
              key={post.href}
              className="flex flex-col overflow-hidden rounded-2xl border border-white/10 bg-acts-slate/90 shadow-sm"
            >
              <Link href={post.href} className="relative block aspect-[16/10]">
                <Image
                  src={post.image}
                  alt=""
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </Link>
              <div className="flex flex-1 flex-col p-6">
                <time
                  dateTime={post.date}
                  className="text-xs font-medium uppercase tracking-wide text-acts-muted"
                >
                  {new Date(post.date).toLocaleDateString(
                    localeToDateStringLocale(locale),
                    {
                      year: "numeric",
                      month: "short",
                      day: "numeric",
                    },
                  )}
                </time>
                <h2 className="mt-2 font-serif text-xl font-semibold text-acts-cream">
                  <Link href={post.href} className="hover:text-acts-teal hover:underline">
                    {post.title}
                  </Link>
                </h2>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-acts-muted">
                  {post.excerpt}
                </p>
                <Link
                  href={post.href}
                  className="mt-4 text-sm font-semibold text-acts-teal"
                >
                  {t("read")}
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}
