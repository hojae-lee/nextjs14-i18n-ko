import { NextRequest, NextResponse } from "next/server";
import { Locale, i18nConfig } from "./i18n";
import { getMatchingLocale } from "./lib/i18n/getMatchingLocale";

export default function middleware(request: NextRequest) {
  // 국제화.

  // i18n 구성에서 사용 가능한 로케일을 반복하여 현재 요청 URL에 해당 로케일이 없는 경우에만 true로 설정합니다.
  const localeNotFound: boolean = i18nConfig.locales.every(
    (locale: Locale) =>
      !request.nextUrl.pathname.startsWith(`/${locale}/`) &&
      request.nextUrl.pathname !== `/${locale}`
  );

  // 요청 URL에서 로케일을 찾을 수 없는 경우, 일치하는 로케일 URL로 리다이렉트합니다.
  if (localeNotFound) {
    // 사용자에게 일치하는 로케일을 가져옵니다.
    const newLocale: Locale = getMatchingLocale(request);

    // 새 URL 리다이렉트를 반환하고 사용자를 올바른 로케일 URL로 리다이렉트합니다.
    return NextResponse.redirect(
      new URL(`/${newLocale}/${request.nextUrl.pathname}`, request.url)
    );
  }
}

export const config = {
  // /_next/ 및 /api/를 무시하는 매처
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
};
