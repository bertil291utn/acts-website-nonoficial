import { defineRouting } from "next-intl/routing";

export const routing = defineRouting({
  locales: ["en", "es", "sv"],
  defaultLocale: "en",
  localePrefix: "as-needed",
});
