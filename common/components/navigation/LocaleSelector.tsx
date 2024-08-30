"use client";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { useState } from "react";

import GlobeIcon from "@/common/components/navigation/GlobeIcon.tsx";

import { i18nConfig } from "@/i18n";
import redirectToLocale from "@/lib/i18n/redirectToLocale";

interface Props {
  message: string;
}

const LocaleSelector = ({ message }: Props) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const pathname = usePathname() ?? "/";

  const localeInfo = {
    en: {
      native: "English",
      english: "English",
    },
    ko: { native: "한국어", english: "Korea" },
  };

  return (
    <>
      <button
        className={`flex h-12 w-12 items-center justify-center rounded-lg hover:bg-neutral-100 ${
          isOpen ? "bg-neutral-100" : ""
        } `}
        onClick={() => setIsOpen(!isOpen)}
      >
        <GlobeIcon />
      </button>

      {isOpen && (
        <div className="absolute translate-y-28">
          <div className="flex py-1 w-48 flex-col rounded-md border border-neutral-200 bg-white shadow-lg">
            <div className="px-3 py-2">
              <h1 className="text-md font-medium">{message}</h1>
            </div>
            <ul className="flex w-full flex-col divide-y divide-neutral-200">
              {i18nConfig.locales.map((locale, index) => {
                return (
                  <Link key={index} href={redirectToLocale(locale, pathname)}>
                    <li className="flex w-full flex-col items-start justify-center px-3 py-2 hover:bg-neutral-100 cursor-pointer transition-colors duration-300 ease-in-out">
                      <h2 className="text-md font-medium text-neutral-900">
                        {localeInfo[locale].native}
                      </h2>
                      <p className="text-sm text-neutral-600">
                        {localeInfo[locale].english}
                      </p>
                    </li>
                  </Link>
                );
              })}
            </ul>
          </div>
        </div>
      )}
    </>
  );
};

export default LocaleSelector;
