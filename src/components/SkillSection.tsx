import React from "react";

interface Skill {
  title: string;
  hash: string;
  icon: string | readonly [string, string];
  color: string | readonly [string, string];
}

interface SkillCategory {
  readonly skillsTitle: string;
  readonly skills: readonly Skill[];
}

interface SkillSectionProps {
  skillsData: readonly SkillCategory[];
  theme: "dark" | "light";
}

const SkillSection: React.FC<SkillSectionProps> = ({ skillsData, theme }) => {
  const getSkillIconSrc = (theme: string, skill: Skill): string => {
    if (Array.isArray(skill.icon)) {
      return theme === "dark" &&
        (skill.title.includes("Next") || skill.title.includes("Express"))
        ? skill.icon[1]
        : skill.icon[0];
    }
    return skill.icon as string; // Type assertion since we know it's a string in this case
  };

  const getSkillColor = (theme: string, skill: Skill): string => {
    if (Array.isArray(skill.color)) {
      return theme === "dark" &&
        (skill.title.includes("Next") || skill.title.includes("Express"))
        ? skill.color[1]
        : skill.color[0];
    }
    return skill.color as string; // Type assertion since we know it's a string in this case
  };

  return (
    <article
      className={`h-auto rounded-2xl p-16 pt-32 grid grid-cols-3 gap-10 relative z-10 max-lg:w-full max-lg:grid-cols-3 max-lg:gap-5 max-lg:p-10 max-lg:pt-28 ${
        theme === "dark"
          ? "bg-[--blackblue] dark-mode-shadow"
          : "bg-[--icewhite] dark-shadow"
      }`}
    >
      <div className="absolute top-10 left-1/2 transform -translate-x-1/2 px-4 py-2 rounded-t-xl">
        <p className="font-black text-4xl max-lg:text-[2.8rem]">
          <span className="text-[--orange]">&lt;</span>
          {skillsData[0].skillsTitle}
          <span className="text-[--orange]">/&gt;</span>
        </p>
      </div>
      {skillsData[0].skills.map((skill, index) => (
        <div
          key={index}
          className={`skill-item cursor-pointer flex flex-col justify-center aspect-square gap-2 rounded-xl p-3 border-solid border-[0.2rem] text-center max-lg:items-center ${
            theme === "dark" ? "bg-[--darkblue]" : "bg-[--icewhite]"
          }`}
          data-tooltip-id="my-tooltip"
          data-tooltip-content={skill.title}
          style={{
            borderColor: getSkillColor(theme, skill),
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.animation = "pulse 2s infinite";
            e.currentTarget.style.transform = "scale(1)";
            document.documentElement.style.setProperty(
              "--box-shadow-color",
              `${getSkillColor(theme, skill)}b3`
            );
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.animation = "";
            e.currentTarget.style.transform = "";
            document.documentElement.style.setProperty(
              "--box-shadow-color",
              "inherit"
            );
          }}
        >
          <div className="flex-1 flex items-center justify-center">
            <img
              src={getSkillIconSrc(theme, skill)}
              alt={`${skill.title}-icon`}
              className="h-[12rem] max-lg:h-[5.5rem] w-auto object-contain"
            />
          </div>
        </div>
      ))}
    </article>
  );
};

export default SkillSection;
