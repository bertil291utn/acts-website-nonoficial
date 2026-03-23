/** Image paths under `public/acts29/`. */
export const acts29Media = {
  hero: "/acts29/hero.jpg",
  discipleship: "/acts29/discipleship.jpg",
  leadership: "/acts29/leadership.jpg",
  mission: "/acts29/mission.jpg",
  celebrate: "/acts29/celebrate.jpg",
  community: "/acts29/community.jpg",
  schoolsHero: "/acts29/schools-hero.jpg",
  infoHero: "/acts29/info-hero.jpg",
  ecuadorHero: "/acts29/ecuador-hero.jpg",
} as const;

/**
 * Home school-life video from acts29.world (Wix Video CDN).
 * 720p keeps streaming reasonable; 1080p: swap `720p` → `1080p` in the path.
 */
export const acts29SchoolLifeVideo = {
  src: "https://video.wixstatic.com/video/eddefb_33d9e1e3a9624dc1bef682894ad428c4/720p/mp4/file.mp4",
  /** Poster: first gallery still (Thailand), matches pro-gallery order on the official site. */
  posterSrc: "/acts29/gallery/eddefb_22850424ce7b43889987ecceff789ec4.jpg",
} as const;

/** Pro-gallery images from acts29.world home (same order as on the official site). */
export const acts29GalleryImages = [
  "/acts29/gallery/eddefb_22850424ce7b43889987ecceff789ec4.jpg",
  "/acts29/gallery/eddefb_0fd58997816848a989290ce2d20152fe.jpg",
  "/acts29/gallery/eddefb_bcfb3459fb6d4ef3ad56eaaac71630b7.jpg",
  "/acts29/gallery/eddefb_3854f1fcceda4233a1287822b8dab9a1.jpg",
  "/acts29/gallery/eddefb_f40b879750884923bc0170fe5f405b55.jpg",
  "/acts29/gallery/eddefb_f281d1dfd6944df584e375f1ce957bf1.jpg",
  "/acts29/gallery/eddefb_f6dc5a1a46e9445e822af839b78db8e4.jpg",
  "/acts29/gallery/eddefb_817e0499e51b430da6fb28ddf4c55240.jpg",
  "/acts29/gallery/eddefb_28d447a5067446d8bc7f31e3c0418261.jpg",
  "/acts29/gallery/eddefb_8acc51d306fe409b83ef6d63c933d15a.jpg",
  "/acts29/gallery/eddefb_2a28b99c842b44aabbe50a65b373f120.jpg",
  "/acts29/gallery/eddefb_4b210551bc8542109f64e329757178ae.jpg",
  "/acts29/gallery/eddefb_45c642997169407680a50369894e714c.jpg",
] as const;
