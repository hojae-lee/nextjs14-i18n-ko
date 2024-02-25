import { TranslationObject } from "@/lib/i18n/loadTranslation";

type Props = {
  translation: TranslationObject;
};

export default function About({ translation }: Props) {
  return (
    <div className="max-w-lg text-center">
      <h1 className="text-4xl font-medium tracking-tight">
        {translation("views.about.title")}
      </h1>
      <p className="mt-4 text-xl font-light tracking-tight text-neutral-600">
        {translation("views.about.body")}
      </p>
    </div>
  );
}
