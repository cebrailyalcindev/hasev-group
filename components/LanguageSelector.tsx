import { useCallback, useState, useEffect } from "react";

type Lang = {
  code: string;
  label: string;
  countryCode: string; // pour drapeau
};

const languages: Lang[] = [
  { code: "fr", label: "FR", countryCode: "fr" },
  { code: "nl", label: "NL", countryCode: "nl" },
  { code: "de", label: "DE", countryCode: "de" },
  { code: "en", label: "EN", countryCode: "gb" },  // exemple US pour EN
];

type SelectLangProps = {
  locale: string;
};

export function LanguageSelector({ locale }: SelectLangProps) {
  const LANGUAGE_SELECTOR_ID = 'language-selector';
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const handleChange = useCallback((country: Lang) => {
    const l = country.code;
    const parts = window.location.pathname.split("/").filter(Boolean);
    if (parts.length === 0) {
      window.location.pathname = "/" + l;
    } else {
      parts[0] = l;
      window.location.pathname = "/" + parts.join("/");
    }
  }, []);

  useEffect(() => {
      const handleWindowClick = (event: any) => {
          const target = event.target.closest('button');
          if (target && target.id === LANGUAGE_SELECTOR_ID) {
              return;
          }
          setIsOpen(false);
      }
      window.addEventListener('click', handleWindowClick)
      return () => {
          window.removeEventListener('click', handleWindowClick);
      }
  }, []);

  const selectedLanguage = languages.find(language => language.code === locale);

  return (
    <>
        <button
            onClick={() => setIsOpen(!isOpen)}
            type="button"
            className="inline-flex items-center gap-2 justify-center w-[100%] rounded-md border border-gray-300 shadow-sm px-2 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            id={LANGUAGE_SELECTOR_ID}
            aria-expanded={isOpen}
        >
            <span className={`fi fis fi-${selectedLanguage.countryCode} inline-block w-6 h-4`} />
            {selectedLanguage.label}
            <svg
                className="-me-1 ms-2 h-5 w-5"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
            >
                <path
                    fillRule="evenodd"
                    d="M10.293 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L10 12.586l3.293-3.293a1 1 0 011.414 1.414l-4 4z"
                    clipRule="evenodd"
                />
            </svg>
        </button>
        {isOpen && <div
            className="origin-bottom-right absolute md:right-0 top-12 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5"
            role="menu"
            aria-orientation="vertical"
            aria-labelledby={LANGUAGE_SELECTOR_ID}
        >
            <div className="py-1" role="none">
                {languages.map((language, index) => {
                    return (
                        <button
                            key={language.code}
                            onClick={() => handleChange(language)}
                            className={`${
                                selectedLanguage.code === language.code
                                    ? "bg-gray-100 text-gray-900"
                                    : "text-gray-700"
                            } block px-6 py-2 text-sm text-start items-center flex gap-2 hover:bg-gray-100`}
                            role="menuitem"
                        >
                            <span className={`fi fis fi-${language.countryCode} inline-block w-6 h-4`} />
                            <span className="truncate">{language.label}</span>
                        </button>
                    );
                })}
            </div>
        </div>}
     </>
  );
}
