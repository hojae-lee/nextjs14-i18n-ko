import { Locale } from "@/i18n";
import getTranslation from "@/lib/i18n/getTranslation";
import Home from "@/components/Home";
import type { Metadata } from "next";

type Props = {
  params: { locale: Locale };
};

export const dynamic = "force-dynamic";

// 동적 메타 태그 설정
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const translation = await getTranslation(params.locale);

  return {
    title: translation("meta.title"),
    description: translation("meta.description"),
  };
}

export default async function HomePage({ params }: Props) {
  const translation = await getTranslation(params.locale);

  return (
    <section className="flex flex-col items-center">
      <Home translation={translation} />
    </section>
  );
}
