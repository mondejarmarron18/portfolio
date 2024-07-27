import { useLayoutEffect, useState } from "react";
import skillsData from "@/constants/skills";
import { theme } from "tailwindcss/defaultConfig";

type ConfigType = {
  skills: string[];
  height: number;
  gap: number;
};

const skillHeights: number[][] = [
  [47, 28, 13],
  [67, 44, 28],
  [80, 55, 35],
  [110, 76, 50],
];

const defaultSkillHeights = skillHeights[skillHeights.length - 1];

const config: ConfigType[] = [
  {
    skills: skillsData.technical,
    height: defaultSkillHeights[0],
    gap: 12.5,
  },
  {
    skills: skillsData.nonTechnical,
    height: defaultSkillHeights[1],
    gap: 16.5,
  },
  {
    skills: skillsData.core,
    height: defaultSkillHeights[2],
    gap: 24,
  },
];

const screens = Object.values(theme?.screens || {}).map((screen) =>
  screen.replace("px", ""),
);

const useSkills = () => {
  const [skills, setSkills] = useState(config);

  const reconfigTechs = () => {
    const windowInnerWidth = window.innerWidth;

    loop: for (let i = 0; i < screens.length - 1; i++) {
      if (windowInnerWidth < screens[i]) {
        const newSkills = skillHeights[i].map((height, j) => {
          return {
            ...skills[j],
            height,
          };
        });

        setSkills(newSkills);

        break loop;
      }
    }
  };

  useLayoutEffect(() => {
    reconfigTechs();
    window.addEventListener("resize", reconfigTechs);
  }, []);

  return { skills };
};

export default useSkills;
