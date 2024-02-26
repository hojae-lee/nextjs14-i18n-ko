import { Locale, i18nConfig } from "@/i18n";
import { match } from "@formatjs/intl-localematcher";
import Negotiator from "negotiator";
import { NextRequest } from "next/server";

/**
 * 사용 가능한 클라이언트 및 앱/서버 로케일을 기반으로 최적의 일치 로케일을 가져옵니다.
 * @param request
 * @returns
 */
export function getMatchingLocale(request: NextRequest): Locale {
  // 사용자 헤더 객체를 초기화합니다.
  let userHeaders: Record<string, string> = {};

  // 요청에서 헤더로부터 사용자 헤더 객체를 채웁니다.
  request.headers.forEach(
    (headerValue, headerKey) => (userHeaders[headerKey] = headerValue)
  );

  // 클라이언트에서 사용 가능한 모든 로케일을 가져옵니다.
  const clientLocales = new Negotiator({ headers: userHeaders }).languages();

  // 앱/서버 로케일 객체를 초기화합니다.
  let appLocales: Locale[] = [];

  // i18n 구성에서 로케일로 app/서버 로케일을 채웁니다.
  i18nConfig.locales.forEach((locale: Locale) => {
    appLocales.push(locale);
  });

  // intl-localematcher의 match 함수를 호출하여 사용 가능한 클라이언트 로케일, 앱/서버 로케일 및 앱/서버 기본 로케일을 기반으로 최적의 일치 로케일을 가져옵니다.
  let localeMatch: Locale = "ko";
  
  try {
    localeMatch = match(
      clientLocales,
      appLocales,
      i18nConfig.defaultLocale
    ) as Locale;
  } catch (error) {
    localeMatch = i18nConfig.defaultLocale;
  }
  // 일치하는 로케일을 반환합니다.
  return localeMatch;
}
