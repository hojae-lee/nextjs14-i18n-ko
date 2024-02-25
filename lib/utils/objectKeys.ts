// 중첩된 타입의 모든 키를 가져오는 도우미 타입입니다.
export type ObjectKeys<
  // T = 전달된 타입, 알 수 없는 값 타입을 가진 객체로 확장됩니다.
  T extends Record<string, unknown>,
  // Key = 전달된 타입의 키입니다.
  Key = keyof T,
> =
  // 키가 문자열인지 확인합니다.
  Key extends string
    ? // 키가 중첩된 객체를 가지고 있는지 계속 확인합니다.
      T[Key] extends Record<string, unknown>
      ? // 중첩된 객체가 발견되면 해당 객체에 ObjectKeys를 재귀적으로 실행합니다.
        `${Key}.${ObjectKeys<T[Key]>}`
      : // 중첩된 객체가 발견되지 않으면 키를 반환합니다.
        `${Key}`
    : // 아무것도 반환하지 않습니다.
      never;
