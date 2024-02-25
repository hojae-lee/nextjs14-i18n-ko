import { Locale } from "@/i18n";

export default function redirectToLocale(locale: Locale, pathname: string) {
  // 만약 pathname이 발견되지 않으면, 리다이렉션 경로로 "/"를 반환합니다.
  if (!pathname) {
    return "/";
  }

  // "/"를 패턴으로 사용하여 pathname을 부분 문자열로 나누어 배열로 만듭니다.
  const pathParts = pathname.split("/");

  // 배열의 인덱스 1을 로케일로 설정합니다. 이 위치에는 로케일이 들어 있습니다.
  pathParts[1] = locale;

  // 유효한 URL 경로(/ko, /en 등)를 얻기 위해 로케일을 "/"와 함께 결합합니다.
  const url = pathParts.join("/");

  // 로케일이 포함된 URL을 반환합니다.
  return url;
}
