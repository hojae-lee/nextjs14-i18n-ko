import LocaleSelector from "./LocaleSelector";
import MenuItem from "./MenuItem";
import { TranslationObject } from "@/lib/i18n/loadTranslation";

interface Props {
  translation: TranslationObject;
};

export default function Nav({ translation }: Props) {
  return (
    <nav className="absolute h-16 w-full flex items-center justify-between border-b border-b-neutral-200 bg-white px-8 lg:px-48">
      <div className="flex items-center">
        <Logo />
      </div>

      <div className="flex items-center space-x-4">
        <div className="hidden md:flex space-x-4">
          <MenuItem href="/" text={translation("nav.menu.home")} />
          <MenuItem href="/about" text={translation("nav.menu.about")} />
          <MenuItem href="/contact" text={translation("nav.menu.contact")} />
        </div>

        <LocaleSelector message={translation("nav.locale-selector.message")} />
      </div>
    </nav>
  );
}

function Logo() {
  return (
    <span className="text-xl font-bold text-gray-800 cursor-pointer">Logo</span>
  );
}
