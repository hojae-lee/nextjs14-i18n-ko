import type { Metadata } from "next";

import Home from "@/app/[locale]/components/home/Home.tsx";

import { Locale } from "@/i18n.ts";
import getTranslation from "@/lib/i18n/getTranslation.ts";

interface Props {
  params: { locale: Locale };
}

export const dynamic = "force-dynamic";

// 동적 메타 태그 설정
export const generateMetadata = async ({
  params,
}: Props): Promise<Metadata> => {
  const translation = await getTranslation(params.locale);

  return {
    title: translation("meta.title"),
    description: translation("meta.description"),
  };
};

const HomePage = async ({ params }: Props) => {
  const translation = await getTranslation(params.locale);

  return (
    <section className="flex flex-col items-center">
      <Home translation={translation} />
    </section>
  );
};

export default HomePage;
