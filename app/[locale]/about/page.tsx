import { Locale } from "@/i18n";
import About from "@/components/About";
import getTranslation from "@/lib/i18n/getTranslation";

type Props = {
  params: { locale: Locale };
};

export default async function AboutPage({ params }: Props) {
  const translation = await getTranslation(params.locale);

  return (
    <section className="flex flex-col items-center mt-8 gap-7">
      <div>
        <About translation={translation} />
      </div>
    </section>
  );
}
