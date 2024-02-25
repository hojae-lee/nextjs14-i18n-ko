import { Locale } from "@/i18n";
import getTranslation from "@/lib/i18n/getTranslation";
import Home from "@/components/Home";

type Props = {
  params: { locale: Locale };
};

export default async function HomePage({ params }: Props) {
  const translation = await getTranslation(params.locale);

  return (
    <section className="flex flex-col items-center mt-8 gap-7">
      <div>
        <Home translation={translation} />
      </div>
      <div>
        <div className="">
          <input
            type="file"
            accept="image/*"
            className="border rounded-lg px-4 py-2"
          />
          <div className="mt-4"></div>
        </div>
      </div>
    </section>
  );
}
