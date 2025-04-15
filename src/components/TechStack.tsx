import React, { useRef } from "react";
import { Tooltip as ReactTooltip } from "react-tooltip";
import { useSectionInView } from "../assets/lib/hooks";
import {
  skillsDataCMS,
  skillsDataDesign,
  skillsDataWeb,
} from "../assets/lib/data";
import { useTheme } from "../context/theme-context";
import { useLanguage } from "../context/language-context";
import SkillSection from "./SkillSection";
import { motion, useScroll, useTransform } from "framer-motion";

const TechStack: React.FC = () => {
  const { ref } = useSectionInView("Skills");
  const { theme } = useTheme();
  const { language } = useLanguage();
  const animationReference = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: animationReference,
    offset: ["0 1", "1.33 1"],
  });
  const scaleProgess = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
  const opacityProgess = useTransform(scrollYProgress, [0, 1], [0.6, 1]);
  return (
    <React.Fragment>
      <section
        className="relative tech-stack max-lg:p-16 "
        id="skills"
        ref={ref}
      >
        <div className="title-container flex flex-col justify-center items-center p-32 w-1/2  gap-4 min-[2500px]:px-[55rem] max-lg:p-0  max-lg:w-full  max-lg:py-16 ">
          <motion.div
            ref={animationReference}
            style={{
              scale: scaleProgess,
              opacity: opacityProgess,
            }}
            className="max-lg:w-full max-lg:flex max-lg:flex-col max-lg:items-start md:flex md:flex-col md:items-center md:w-full"
          >
            <p className="text-[--black] mb-6 text-center max-lg:text-left max-lg:ml-11 md:text-center md:ml-0 md:pl-0 md:pr-11">
              <span className="text-[--orange]">&lt;</span>
              {language === "DE" ? "Kenntnisse" : "Skills"}
              <span className="text-[--orange]">/&gt;</span>
            </p>
            <h2 className="md:text-center">
              {language === "DE" ? "Meine Techstack" : "My TechStack"}
            </h2>
          </motion.div>
        </div>
        <div className="flex gap-20 justify-center max-lg:flex-col max-lg:gap-10 md:items-center relative">
          <div className="max-w-4xl flex-1 max-lg:w-full max-lg:mb-10 md:flex md:justify-center">
            <SkillSection skillsData={skillsDataWeb} theme={theme} />
          </div>
          <div className="max-w-4xl flex-1 flex flex-col h-[inherit] justify-around gap-20 max-lg:w-full md:items-center">
            <SkillSection skillsData={skillsDataDesign} theme={theme} />
            <SkillSection skillsData={skillsDataCMS} theme={theme} />
          </div>
        </div>
      </section>
      <ReactTooltip
        place="top"
        id="my-tooltip"
        style={{
          fontSize: "1.5rem",
          zIndex: 10,
          backgroundColor: "var(--orange)",
        }}
      />
    </React.Fragment>
  );
};

export default TechStack;
