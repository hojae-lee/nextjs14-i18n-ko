import { Locale, i18nConfig } from "@/i18n";
import { ObjectKeys } from "@/lib/utils/objectKeys";

// 지정된 로케일에 대한 번역 .json 파일을 비동기적으로 가져오는 함수를 포함합니다.
const translations = {
  ko: () => import("@/locales/ko.json").then((module) => module.default),
  en: () => import("@/locales/en.json").then((module) => module.default),
};

// 번역 객체에 대한 생성된 타입을 정의합니다.
export type Translation = Awaited<
  ReturnType<(typeof translations)[typeof i18nConfig.defaultLocale]>
>;

// Translation 타입에서 발견된 모든 중첩 키에 대한 생성된 타입을 정의합니다.
export type TranslationObject = (key: ObjectKeys<Translation>) => string;

/**
 * 주어진 로케일을 기반으로 번역 .json 파일을 비동기적으로 로드합니다.
 * @param locale 로케일 문자열
 * @returns 번역 키-값 쌍을 포함하는 번역 객체입니다.
 */
export default async function loadTranslation(
  locale: Locale
): Promise<Translation> {
  // translations 객체에서 지원하는 모든 로케일 키를 확인합니다.
  const supportedLocales = Object.keys(translations);

  // 주어진 로케일이 지원되는지 확인합니다.
  if (!supportedLocales.includes(locale)) {
    // 지원되지 않는 로케일인 경우, 적절한 오류 메시지와 함께 예외를 발생시킵니다.
    throw new Error(
      `Locale '${locale}' is not supported. Supported locales are: ${supportedLocales.join(", ")}`
    );
  }
  // 주어진 로케일 키에 해당하는 번역을 호출합니다.
  return translations[locale]();
}
