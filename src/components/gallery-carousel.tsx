"use client";

import Image from "next/image";
import { useCallback, useRef, useState } from "react";

type Props = {
  images: readonly string[];
  imageAlts: readonly string[];
};

export function GalleryCarousel({ images, imageAlts }: Props) {
  const scrollerRef = useRef<HTMLDivElement>(null);
  const [index, setIndex] = useState(0);

  const scrollTo = useCallback((dir: -1 | 1) => {
    const el = scrollerRef.current;
    if (!el) return;
    const w = el.clientWidth;
    el.scrollBy({ left: dir * w, behavior: "smooth" });
  }, []);

  const onScroll = useCallback(() => {
    const el = scrollerRef.current;
    if (!el) return;
    const w = el.clientWidth || 1;
    const i = Math.round(el.scrollLeft / w);
    setIndex(Math.max(0, Math.min(images.length - 1, i)));
  }, [images.length]);

  return (
    <div className="relative">
      <div
        ref={scrollerRef}
        onScroll={onScroll}
        className="flex snap-x snap-mandatory overflow-x-auto scroll-smooth rounded-2xl border border-white/10 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      >
        {images.map((src, i) => (
          <div
            key={src}
            className="relative w-full min-w-full shrink-0 snap-center snap-always"
          >
            <div className="relative aspect-4/3 bg-acts-slate sm:aspect-video">
              <Image
                src={src}
                alt={imageAlts[i] ?? ""}
                fill
                className="object-cover"
                sizes="100vw"
                priority={i === 0}
              />
            </div>
          </div>
        ))}
      </div>

      <div className="mt-4 flex items-center justify-center gap-3">
        <button
          type="button"
          onClick={() => scrollTo(-1)}
          disabled={index === 0}
          className="rounded-md border border-white/20 px-4 py-2 text-sm font-medium text-acts-cream transition hover:border-acts-teal hover:text-acts-teal disabled:cursor-not-allowed disabled:opacity-40"
        >
          ←
        </button>
        <span className="text-sm tabular-nums text-acts-muted">
          {index + 1} / {images.length}
        </span>
        <button
          type="button"
          onClick={() => scrollTo(1)}
          disabled={index === images.length - 1}
          className="rounded-md border border-white/20 px-4 py-2 text-sm font-medium text-acts-cream transition hover:border-acts-teal hover:text-acts-teal disabled:cursor-not-allowed disabled:opacity-40"
        >
          →
        </button>
      </div>
    </div>
  );
}
