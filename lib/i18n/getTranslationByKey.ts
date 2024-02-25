// 중첩된 키-값 쌍 번역 객체에 대한 타입을 정의합니다.
type TranslationKeyValue = {
  [key: string]: string | TranslationKeyValue;
};

/**
 * 주어진 키와 번역을 기반으로 번역 값 문자열을 가져옵니다.
 * @param keys 문자열 배열 형태의 번역 키입니다.
 * @param translation 키-값 쌍을 포함하는 번역 객체입니다.
 * @returns 번역 값 문자열 또는 키-값 쌍을 포함하는 번역 객체입니다.
 */
function getTranslationValue(
  keys: string[],
  translation: TranslationKeyValue | string
): TranslationKeyValue | string {
  // 번역이 문자열 타입인 경우, 번역을 반환합니다.
  if (typeof translation === "string") {
    return translation;
  }

  // 번역이 존재하지 않거나 키 배열이 비어 있는 경우, 빈 문자열을 반환합니다.
  if (!translation || keys.length === 0) {
    return "";
  }

  // 키 배열에서 첫 번째 키를 할당하고 키 배열에서 제거합니다.
  const key: string = keys.shift() || "";

  // 남은 키와 함께 자기 자신을 재귀적으로 호출합니다.
  return getTranslationValue(keys, translation[key]);
}

/**
 * 주어진 키와 번역을 기반으로 번역 값을 가져옵니다.
 * @param key 번역 키 문자열입니다.
 * @param translation 키-값 쌍을 포함하는 번역 객체입니다.
 * @returns 문자열 형태의 번역 값입니다.
 */
export default function getTranslationByKey(
  key: string,
  translation: TranslationKeyValue
): string {
  // 중첩된 키가 있는 경우 키를 배열 형태로 변환합니다.
  const keys = key.split(".");

  // 번역 값을 가져옵니다.
  const translationValue = getTranslationValue(keys, translation);

  // 번역 값이 존재하지 않거나 문자열 타입이 아닌 경우, 키를 반환합니다.
  if (!translationValue || typeof translationValue !== "string") {
    return key;
  }

  // 번역 값을 반환합니다.
  return translationValue;
}
