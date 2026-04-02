export type CountryOption = {
  code: string;
  locale: string;
  country: string;
  label: string;
};

export const countries: CountryOption[] = [
  { code: "US", locale: "en", country: "United States", label: "United States · English" },
  { code: "CN", locale: "zh", country: "China", label: "China · 中文" },
  { code: "IN", locale: "hi", country: "India", label: "India · हिन्दी" },
  { code: "BR", locale: "pt", country: "Brazil", label: "Brazil · Português" },
  { code: "RU", locale: "ru", country: "Russia", label: "Russia · Русский" },
  { code: "DE", locale: "de", country: "Germany", label: "Germany · Deutsch" },
  { code: "UK", locale: "en", country: "United Kingdom", label: "United Kingdom · English" },
  { code: "FR", locale: "fr", country: "France", label: "France · Français" },
  { code: "JP", locale: "ja", country: "Japan", label: "Japan · 日本語" },
  { code: "CA", locale: "en", country: "Canada", label: "Canada · English" },
  { code: "AU", locale: "en", country: "Australia", label: "Australia · English" },
  { code: "ZA", locale: "en", country: "South Africa", label: "South Africa · English" },
  { code: "MX", locale: "es", country: "Mexico", label: "Mexico · Español" },
  { code: "IT", locale: "it", country: "Italy", label: "Italy · Italiano" },
  { code: "ES", locale: "es", country: "Spain", label: "Spain · Español" },
  { code: "ID", locale: "id", country: "Indonesia", label: "Indonesia · Bahasa Indonesia" },
  { code: "TR", locale: "tr", country: "Turkey", label: "Turkey · Türkçe" },
  { code: "SA", locale: "ar", country: "Saudi Arabia", label: "Saudi Arabia · العربية" },
  { code: "AR", locale: "es", country: "Argentina", label: "Argentina · Español" },
  { code: "NG", locale: "en", country: "Nigeria", label: "Nigeria · English" },
  { code: "EG", locale: "ar", country: "Egypt", label: "Egypt · العربية" }
];
