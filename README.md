# Next.js 14 앱 라우터에서의 국제화 (i18n)

안녕하세요. Nextjs14 에서 다국어 기능 구현 프로젝트입니다.

## 디자인 컬러

- [컬러](https://tailwindcss.com/docs/customizing-colors)

## 커스터마이즈 가능한 i18n 기능을 구현한 Next.js 14 프로젝트

- .json 파일을 사용하여 다양한 번역 생성
- 생성된 기본 번역에 대한 TypeScript 타이핑 자동 생성으로 개발자 경험 향상
- 프론트엔드에서 필요한 번역 문자열을 키로 가져오기
- 미들웨어에서의 자동 로케일 감지 및 리다이렉션
- 기능을 설명하는 서버 및 클라이언트 컴포넌트로 이루어진 작은 애플리케이션
- public 파일 미들웨어 허용 추가
- github actions 기본 추가
- PR Template 추가
- health check 추가

## 프로젝트 설치 및 실행 방법

1. 프로젝트를 클론합니다.

2. 프로젝트 루트에서 노드 모듈을 설치합니다.

```
yarn
```

3. 로컬 개발 서버를 실행합니다.

```
yarn dev
```

## 프로젝트에서 번역 사용 및 추가하는 방법

1. `@/locales` 디렉토리 안에 새로운 locale.json 파일을 생성합니다. 이 파일은 기본 로케일 파일인 `en.json`과 동일한 중첩된 키 구조를 따라야 합니다.

2. `@/lib/i18n/loadTranslation.ts`에서 translations 상수에 새로운 locale.json을 로드할 수 있도록 추가합니다.

```
const translations = {
	ko: () => import('@/locales/en.json').then((module) => module.default),
	...,

	locale: () => import('@/locales/locale.json').then((module) => module.default)
}
```

3. `@/i18n.ts`의 i18nConfig에서 locales 배열에 새로운 로케일을 문자열로 추가합니다. 여기서 기본 로케일도 변경할 수 있습니다.

```
export const i18nConfig = {
	defaultLocale: 'ko',
	locales: ['ko', 'en'],
} as const;
```

4. 이제 서버 측 파일에서 새로운 로케일 내용에 자동으로 액세스할 수 있어야 합니다. 예를 들어 `@/app/[locale]/layout.tsx`와 `@/app/[locale]/page.tsx`를 참조하세요.

5. 클라이언트 측 컴포넌트에서 로케일 내용에 액세스하려면 `t` 상수를 클라이언트 컴포넌트에 전달해야 합니다. 올바른 TypeScript 타이핑을 사용하여 이를 수행하는 방법은 `@/app/[locale]/layout.tsx`, `@/components/nav.tsx`, `@/components/locale-selector.tsx`를 참조하세요.
