const countries = {
  australia: {
    name: "Australia",
    code: "AU",
    flag: "🇦🇺",
  },
  canada: {
    name: "Canada",
    code: "CA",
    flag: "🇨🇦",
  },
  philippines: {
    name: "Philippines",
    code: "PH",
    flag: "🇵🇭",
  },
  unitedStates: {
    name: "United States",
    code: "US",
    flag: "🇺🇸",
  },
  unitedKingdom: {
    name: "United Kingdom",
    code: "GB",
    flag: "🇬🇧",
  },
  newZealand: {
    name: "New Zealand",
    code: "NZ",
    flag: "🇳🇿",
  },
  dubai: {
    name: "Dubai",
    code: "AE",
    flag: "🇦🇪",
  },
} as const;

export type Country = (typeof countries)[keyof typeof countries];
export type CountryKey = keyof typeof countries;

export default countries;
