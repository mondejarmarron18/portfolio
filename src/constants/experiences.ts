export type ExperienceType = {
  date: {
    from: Date;
    to?: Date; //The value will currently be "present" or "active" if not defined
  };
  position: string;
  company: string;
};

const experiences: ExperienceType[] = [
  {
    date: {
      from: new Date("2024-04-18"),
      to: new Date("2024-07-31"),
    },
    position: "Software Engineer",
    company: "Freelance",
  },
  {
    date: {
      from: new Date("2022-06-28"),
      to: new Date("2024-03-27"),
    },
    position: "Front End Developer",
    company: "Lightweight Solutions",
  },
  {
    date: {
      from: new Date("2023-03-01"),
      to: new Date("2023-04-31"),
    },
    position: "Consultant Software Engineer",
    company: "Airfi Networks Services Limited",
  },
  {
    date: {
      from: new Date("2022-01-01"),
      to: new Date("2022-07-31"),
    },
    position: "Front End Developer",
    company: "Freelance",
  },
  {
    date: {
      from: new Date("2021-12-01"),
      to: new Date("2022-06-31"),
    },
    position: "Front End Developer",
    company: "Real IT Consulting Corporation",
  },
  {
    date: {
      from: new Date("2021-11-01"),
      to: new Date("2022-05-31"),
    },
    position: "Front End Developer",
    company: "Freelance",
  },
  {
    date: {
      from: new Date("2020-08-01"),
      to: new Date("2021-11-31"),
    },
    position: "Full Stack Developer",
    company: "Freelance",
  },
] as const;

export default experiences;
