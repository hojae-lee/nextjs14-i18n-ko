export const i18nConfig = {
  defaultLocale: "ko",
  locales: ["ko", "en"],
} as const;

export type Locale = (typeof i18nConfig)["locales"][number];
