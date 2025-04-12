import countries, { Country } from "./countries";

export type ExperienceType = {
  date: {
    from: Date;
    to: Date;
  };
  position: string;
  company: string;
  country: Country;
};

const experiences: ExperienceType[] = [
  {
    date: {
      from: new Date("2024-09-16"),
      to: new Date("2024-11-06"),
    },
    position: "Software Engineer I",
    company: "Career Edge LLC",
    country: countries.unitedStates,
  },
  {
    date: {
      from: new Date("2024-04-18"),
      to: new Date("2024-07-31"),
    },
    position: "Software Engineer",
    company: "Freelance",
    country: countries.newZealand,
  },
  {
    date: {
      from: new Date("2022-06-28"),
      to: new Date("2024-03-27"),
    },
    position: "Front End Developer",
    company: "Lightweight Solutions",
    country: countries.philippines,
  },
  {
    date: {
      from: new Date("2023-03-01"),
      to: new Date("2023-04-30"),
    },
    position: "Consultant Software Engineer",
    company: "Airfi Networks Services Limited",
    country: countries.unitedKingdom,
  },
  {
    date: {
      from: new Date("2022-01-01"),
      to: new Date("2022-07-31"),
    },
    position: "Front End Developer",
    company: "Freelance",
    country: countries.philippines,
  },
  {
    date: {
      from: new Date("2021-12-01"),
      to: new Date("2022-06-30"),
    },
    position: "Front End Developer",
    company: "Real IT Consulting Corporation",
    country: countries.philippines,
  },
  {
    date: {
      from: new Date("2021-11-01"),
      to: new Date("2022-05-31"),
    },
    position: "Front End Developer",
    company: "Freelance",
    country: countries.canada,
  },
  {
    date: {
      from: new Date("2020-08-01"),
      to: new Date("2021-11-30"),
    },
    position: "Full Stack Developer",
    company: "Freelance",
    country: countries.dubai,
  },
] as const;

export default experiences;
