import React from "react";
import Button from "./Button";
import RadialGradient from "./RadialGradient";
import { headerIntroData } from "../assets/lib/data";
import { useSectionInView } from "../assets/lib/hooks";
import { useActiveSectionContext } from "../context/active-section-context";
import { useLanguage } from "../context/language-context";
import { BsMouse } from "react-icons/bs";
import GradientText from "./GradientText";
import cvPdf from "../assets/CV.pdf";
const HeaderIntro: React.FC = () => {
  const { language } = useLanguage();
  const { ref } = useSectionInView("Home", 0.5);
  const { setActiveSection, setTimeOfLastClick } = useActiveSectionContext();

  return (
    <section
      className="  relative hero flex flex-col justify-center gap-10 items-center h-full max-lg:h-full max-lg:gap-6"
      ref={ref}
      id="home"
    >
      <RadialGradient />

      <img
        src={headerIntroData.profilepicture}
        alt={headerIntroData.profilepicture}
        className="w-1/5 drop-shadow-2xl rounded-full max-lg:w-2/6 max-md:w-2/4 max-sm:w-3/4 "
      />

      <div className="flex flex-col gap-4 max-w-[60rem] text-center">
        <h1 className="text-[--black] text-center max-sm:text-4xl">
          Hi, I'm Youssef Elezaby
          <span className="wave text-6xl max-sm:text-5xl">👋🏽</span>
        </h1>
        <GradientText
          colors={["#7A6FF2", "#7A6FF2", "#FFFFFF", "#FF6F3C", "#FF6F3C"]}
          animationSpeed={4}
          showBorder={false}
          className="text-8xl text-center max-lg:text-6xl max-lg:px-8 text-animation"
        >
          Fullstack Developer
        </GradientText>
      </div>
      <p className="w-1/2 text-center max-lg:hidden">
        {language === "DE"
          ? headerIntroData.description.de
          : headerIntroData.description.en}
      </p>

      <div className="button-container flex items-center justify-center mr-8 gap-10 mb-12 max-lg:flex-col max-lg:w-[90%] max-lg:mr-0 max-lg:flex max-lg:items-stretch max-lg:gap-8 ">
        {headerIntroData.buttons.map((button, index) => (
          <Button
            key={index}
            label={language === "DE" ? button.label.de : button.label.en}
            iconSVG={button.icon}
            link={
              button.name.toLowerCase() === "cv"
                ? undefined
                : `#${button.name.toLowerCase()}`
            }
            buttoncolor={button.color}
            onClick={(event: React.MouseEvent<HTMLButtonElement>) => {
              event.preventDefault();
              const buttonNameLower = button.name.toLowerCase();

              if (buttonNameLower === "cv") {
                const link = document.createElement("a");
                link.href = cvPdf;
                link.download = "CV";
                link.click();
              } else {
                const targetSection = button.name as SectionName; // Assuming SectionName is imported or defined
                setActiveSection(targetSection);
                setTimeOfLastClick(Date.now());

                // Smooth scroll logic from NavBar
                const targetId = buttonNameLower;
                const targetElement = document.getElementById(targetId);

                if (targetElement) {
                  const isLargeScreen = window.innerWidth > 1024; // Consistent with NavBar logic
                  const offset = 100; // Consistent with NavBar logic

                  if (isLargeScreen) {
                    const elementPosition =
                      targetElement.getBoundingClientRect().top +
                      window.scrollY;
                    const offsetPosition = elementPosition - offset;
                    window.scrollTo({
                      top: offsetPosition,
                      behavior: "smooth",
                    });
                  } else {
                    // For smaller screens, scrollIntoView might be sufficient,
                    // or adjust offset as needed
                    targetElement.scrollIntoView({
                      behavior: "smooth",
                      block: "start", // Or 'center' depending on desired behavior
                    });
                  }
                }
              }
            }}
          />
        ))}
      </div>
      <div className="scroll-down-container animate-bounce flex gap-6">
        <BsMouse className="text-[2.6rem]" />
      </div>
    </section>
  );
};

// Add SectionName type if not already available globally or imported
type SectionName = "Home" | "Skills" | "Projects" | "Experience" | "Contact";

export default HeaderIntro;
