export type PostSlug = "ecuador";

export type PostTKey = "ecuadorCountry";

export type PostMeta = {
  slug: PostSlug;
  tKey: PostTKey;
  date: string;
  coverSrc: string;
};

export const posts: Record<PostSlug, PostMeta> = {
  ecuador: {
    slug: "ecuador",
    tKey: "ecuadorCountry",
    date: "2026-01-15",
    coverSrc: "/acts29/ecuador-hero.jpg",
  },
};
