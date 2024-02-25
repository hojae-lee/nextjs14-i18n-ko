import { Locale } from "@/i18n";
import getTranslationByKey from "@/lib/i18n/getTranslationByKey";
import loadTranslation, { TranslationObject } from "@/lib/i18n/loadTranslation";
import "server-only";

/**
 * 주어진 로케일을 기반으로 서버 측에서 번역 객체를 가져옵니다.
 * @param locale
 * @returns
 */
export default async function getTranslation(
  locale: Locale
): Promise<TranslationObject> {
  // 로케일을 기반으로 파일에서 번역 내용을 로드합니다.

  const translation = await loadTranslation(locale);

  // 번역 데이터를 반환합니다.
  return (key: string) => getTranslationByKey(key, translation);
}
