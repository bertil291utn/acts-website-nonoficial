import Image from "next/image";
import type { ReactNode } from "react";

type PageHeroProps = {
  title: ReactNode;
  subtitle?: ReactNode;
  imageSrc: string;
  imageAlt: string;
  kicker?: string;
};

/** Full-bleed hero: ESCA-style photo + deep ink gradient for readable overlay type. */
export function PageHero({
  title,
  subtitle,
  imageSrc,
  imageAlt,
  kicker,
}: PageHeroProps) {
  return (
    <section className="relative overflow-hidden bg-acts-charcoal">
      <div className="absolute inset-0">
        <Image
          src={imageSrc}
          alt={imageAlt}
          fill
          className="object-cover opacity-90"
          sizes="100vw"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-acts-charcoal/95 via-acts-charcoal/78 to-acts-charcoal/35" />
      </div>
      <div className="relative mx-auto max-w-6xl px-4 py-24 sm:px-6 sm:py-32 lg:py-40">
        {kicker ? (
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-white/80">
            {kicker}
          </p>
        ) : null}
        <h1 className="max-w-3xl font-serif text-4xl font-semibold tracking-tight text-white sm:text-5xl lg:text-6xl">
          {title}
        </h1>
        {subtitle ? (
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-white/85">
            {subtitle}
          </p>
        ) : null}
      </div>
    </section>
  );
}
