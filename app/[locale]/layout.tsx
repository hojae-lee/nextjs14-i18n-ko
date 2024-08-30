import type { Metadata } from "next";

import Nav from "@/common/components/navigation/index.tsx";

import { Locale, i18nConfig } from "@/i18n.ts";
import getTranslation from "@/lib/i18n/getTranslation.ts";
import { GeistSans } from "geist/font/sans";
import "@/app/globals.css";

export const metadata: Metadata = {
  title: "Next.js 14 i18n",
  description: "Next.js 14 i18n",
  icons: {
    icon: "./favicon.ico?v=1",
  },
};

// 라우팅 후, 경로 데이터 정적으로 사용. params.locale 로 사용 가능.
export const generateStaticParams = async () => {
  return i18nConfig.locales.map((locale: Locale) => ({ locale: locale }));
};

type Props = {
  children: React.ReactNode;
  params: {
    locale: Locale;
  };
};

const RootLayout = async ({ children, params }: Props) => {
  const translation = await getTranslation(params.locale);

  return (
    <html lang={params.locale} className={GeistSans.className}>
      <body>
        <Nav translation={translation} />
        <main className="px-8 pt-16 lg:px-48">{children}</main>
      </body>
    </html>
  );
};

export default RootLayout;
