type Props = {
  className?: string;
};

/** Full Acts29 vector from site (viewBox 0 0 1771 1516), served from `public/acts29/acts29-logo.svg`. */
export function Acts29LogoMark({ className }: Props) {
  return (
    // eslint-disable-next-line @next/next/no-img-element -- static SVG asset; avoids huge JSX bundle
    <img
      src="/acts29/acts29-logo.svg"
      alt=""
      width={1771}
      height={1516}
      className={[
        "h-10 w-auto shrink-0 object-contain object-left sm:h-14",
        className,
      ]
        .filter(Boolean)
        .join(" ")}
      aria-hidden
    />
  );
}
