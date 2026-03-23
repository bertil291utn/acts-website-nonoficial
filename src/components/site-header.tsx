import { Acts29LogoMark } from "@/components/acts29-logo-mark";
import { Link } from "@/i18n/navigation";
import { ecuadorPostPath, navRoutes } from "@/lib/site";
import { getTranslations } from "next-intl/server";

export async function SiteHeader() {
  const t = await getTranslations("Nav");
  const tSite = await getTranslations("site");

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-acts-charcoal/95 backdrop-blur-md">
      <div className="mx-auto flex min-w-0 max-w-6xl items-center justify-between gap-2 px-3 py-3 sm:gap-4 sm:px-6 sm:py-4">
        <Link
          href="/"
          className="group flex min-w-0 flex-1 flex-col items-start gap-1.5 pr-1 sm:flex-row sm:items-center sm:gap-4 sm:pr-0"
          aria-label={`${t("brandTitle")} — ${tSite("tagline")}`}
        >
          <Acts29LogoMark />
          <div className="flex min-w-0 w-full flex-col justify-center gap-0.5 sm:w-auto sm:max-w-md">
            <span className="font-serif text-base font-semibold leading-tight tracking-tight text-acts-cream sm:text-lg md:text-xl">
              {t("brandTitle")}
            </span>
            <span className="text-[0.625rem] leading-snug text-acts-muted sm:max-w-64 sm:text-[0.65rem]">
              {tSite("tagline")}
            </span>
          </div>
        </Link>
        <nav
          className="hidden items-center gap-1 lg:flex"
          aria-label="Main"
        >
          {navRoutes.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="rounded-md px-3 py-2 text-sm font-medium text-acts-muted transition hover:bg-acts-slate hover:text-acts-teal"
            >
              {t(item.navKey)}
            </Link>
          ))}
        </nav>
        <div className="flex shrink-0 items-center gap-1.5 sm:gap-2">
          <Link
            href="/info#contact"
            className="hidden rounded-md border border-white/20 px-4 py-2 text-sm font-medium text-acts-cream transition hover:border-acts-teal sm:inline-flex"
          >
            {t("contact")}
          </Link>
          <Link
            href={ecuadorPostPath}
            className="inline-flex rounded-md bg-acts-lime px-4 py-2 text-sm font-semibold text-acts-on-lime shadow-sm transition hover:bg-acts-lime/90"
          >
            {t("applyEcuador")}
          </Link>
        </div>
      </div>
      <nav
        className="flex gap-1 overflow-x-auto border-t border-white/10 bg-acts-charcoal px-4 py-2 lg:hidden"
        aria-label="Mobile"
      >
        {navRoutes.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className="whitespace-nowrap rounded-full bg-acts-slate px-3 py-1.5 text-xs font-medium text-acts-cream"
          >
            {t(item.navKey)}
          </Link>
        ))}
      </nav>
    </header>
  );
}
