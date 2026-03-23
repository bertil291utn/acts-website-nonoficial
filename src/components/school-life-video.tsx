import { acts29SchoolLifeVideo } from "@/lib/acts29-media";

type Props = {
  title: string;
  eyebrow: string;
  body: string;
  videoLabel: string;
};

export function SchoolLifeVideo({ title, eyebrow, body, videoLabel }: Props) {
  return (
    <section
      className="border-y border-white/10 bg-acts-charcoal py-16"
      aria-labelledby="school-life-video-heading"
    >
      <div className="mx-auto grid max-w-6xl gap-10 px-4 sm:px-6 lg:grid-cols-2 lg:items-center lg:gap-16">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-acts-muted">
            {eyebrow}
          </p>
          <h2
            id="school-life-video-heading"
            className="mt-2 font-serif text-3xl font-semibold text-acts-cream sm:text-4xl"
          >
            {title}
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-acts-muted">{body}</p>
        </div>
        <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-black shadow-lg">
          <video
            className="aspect-video w-full object-cover"
            controls
            playsInline
            preload="metadata"
            poster={acts29SchoolLifeVideo.posterSrc}
            aria-label={videoLabel}
          >
            <source src={acts29SchoolLifeVideo.src} type="video/mp4" />
          </video>
        </div>
      </div>
    </section>
  );
}
