import { TranslationObject } from "@/lib/i18n/loadTranslation";

interface Props {
  translation: TranslationObject;
}

const Home = ({ translation }: Props) => {
  return (
    <div className="max-w-lg text-center">
      <h1 className="text-4xl font-medium tracking-tight">
        {translation("views.home.title")}
      </h1>
      <p className="mt-4 text-xl font-light tracking-tight text-neutral-600">
        {translation("views.home.body")}
      </p>
    </div>
  );
};

export default Home;
