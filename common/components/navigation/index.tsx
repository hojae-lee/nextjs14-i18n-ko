import LocaleSelector from "@/common/components/navigation/LocaleSelector.tsx";
import MenuItem from "@/common/components/navigation/MenuItem.tsx";
import Logo from "@/common/components/Logo.tsx";

import { TranslationObject } from "@/lib/i18n/loadTranslation.ts";

interface Props {
  translation: TranslationObject;
}

const Nav = ({ translation }: Props) => {
  return (
    <nav className="absolute h-16 w-full flex items-center justify-between border-b border-b-neutral-200 bg-white px-8 lg:px-48">
      <div className="flex items-center">
        <Logo />
      </div>

      <div className="flex items-center space-x-4">
        <div className="hidden md:flex space-x-4">
          <MenuItem href="/" text={translation("nav.menu.home")} />
        </div>

        <LocaleSelector message={translation("nav.locale-selector.message")} />
      </div>
    </nav>
  );
};

export default Nav;
