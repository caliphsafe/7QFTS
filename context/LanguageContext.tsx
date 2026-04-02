"use client";

import { createContext, useContext, useEffect, useMemo, useState } from "react";
import { countries, CountryOption } from "@/lib/countries";

type LanguageContextType = {
  countryCode: string;
  locale: string;
  country: CountryOption;
  setCountryCode: (code: string) => void;
};

const LanguageContext = createContext<LanguageContextType | null>(null);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [countryCode, setCountryCodeState] = useState("US");

  useEffect(() => {
    const saved = window.localStorage.getItem("soul-country-code");
    if (saved && countries.find((c) => c.code === saved)) {
      setCountryCodeState(saved);
    }
  }, []);

  function setCountryCode(code: string) {
    setCountryCodeState(code);
    window.localStorage.setItem("soul-country-code", code);
  }

  const country = useMemo(() => {
    return countries.find((c) => c.code === countryCode) || countries[0];
  }, [countryCode]);

  const value = useMemo(
    () => ({
      countryCode,
      locale: country.locale,
      country,
      setCountryCode,
    }),
    [countryCode, country]
  );

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used inside LanguageProvider");
  }
  return context;
}
