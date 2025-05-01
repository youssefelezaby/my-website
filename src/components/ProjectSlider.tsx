import bannerBg from "../assets/img/bannerbg.webp";
import React, { useRef } from "react";
import Button from "./Button";
import LiveTicker from "./ParallaxText";
import { projectsData } from "../assets/lib/data";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectCards, Pagination } from "swiper/modules";
import { Tooltip as ReactTooltip } from "react-tooltip";
import { useSectionInView } from "../assets/lib/hooks";
import { useLanguage } from "../context/language-context";
import { motion, useScroll, useTransform } from "framer-motion";
import "swiper/css";
import "swiper/css/effect-cards";
import "swiper/css/pagination";

const ProjectSlider: React.FC = () => {
  const { ref } = useSectionInView("Projects");
  const { language } = useLanguage();
  const animationReference = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: animationReference,
    offset: ["1 1", "1.3 1"],
  });
  const scaleProgess = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
  const opacityProgess = useTransform(scrollYProgress, [0, 1], [0.6, 1]);

  return (
    <React.Fragment>
      <section
        className=" skill-banner relative overflow-x-clip  w-full flex flex-col gap-2 "
        id="projects"
        ref={ref}
      >
        <div
          className="quote-outer-container bg-[--darkblue] -rotate-3 flex justify-center items-center scale-110 pt-32 pb-32 max-lg:pt-16 max-lg:pb-16 max-lg:-ml-44 max-lg:-mr-44 max-lg:scale-100"
          style={{
            backgroundImage: `url(${bannerBg})`,
            backgroundPosition: "center",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
          }}
        >
          {/* Ensure this container is visible on all screen sizes where content should show */}
          <div className="title-container flex flex-col gap-6 mb-24 rotate-3 justify-between items-center w-full px-4">
            <motion.div
              ref={animationReference}
              style={{
                scale: scaleProgess,
                opacity: opacityProgess,
                textAlign: "center",
              }}
            >
              <p className="text-[--white] mt-16 mb-6">
                <span className="text-[--orange]">&lt;</span>
                {language === "DE" ? "Projekte" : "Projects"}
                <span className="text-[--orange]">/&gt;</span>
              </p>
              <h2 className="text-[--white] mb-16">
                {language === "DE" ? "Meine Projekte" : "My Projects"}
              </h2>
            </motion.div>
            {/* Swiper: Hidden on small screens (default), visible on lg and up */}
            <Swiper
              effect={"cards"}
              grabCursor={true}
              modules={[EffectCards, Autoplay, Pagination]}
              // Hide by default, show on lg screens and up
              className="hidden lg:block w-[90vw] max-w-[1100px] h-auto"
              loop={true}
              autoplay={{
                delay: 4000,
                disableOnInteraction: true,
                pauseOnMouseEnter: true,
              }}
              pagination={{
                clickable: true,
              }}
            >
              {projectsData.map((project, index: number) => (
                <SwiperSlide
                  key={index}
                  className="quote-outer-container bg-[--darkblue] text-[--white] flex flex-col md:flex-row justify-between rounded-2xl p-8 md:p-12 lg:p-16 text-left gap-8"
                >
                  {/* Left Content */}
                  <div className=" w-full md:w-[55%] flex flex-col gap-6 md:gap-12 justify-between ">
                    <h2>{project.title}</h2>
                    <p className="text-white">
                      {language === "DE"
                        ? project.description
                        : project.description_EN}
                    </p>
                    <div className="technologies">
                      <h3>
                        {language === "DE" ? "Technologien" : "Technologies"}
                      </h3>
                      <div className="grid grid-cols-4 sm:grid-cols-5 md:grid-cols-6 gap-4 md:gap-6 lg:gap-10 p-4">
                        {project.technologies.map(
                          (technology, innerIndex: number) => (
                            <img
                              key={innerIndex}
                              src={technology.icon}
                              alt={`${project.title}-icon`}
                              className="h-[5rem] w-[60%]"
                              data-tooltip-id="my-tooltip"
                              data-tooltip-content={technology.name}
                            />
                          )
                        )}
                      </div>
                    </div>
                    <div className="buttons flex flex-col sm:flex-row gap-4 sm:gap-6 md:gap-10">
                      {"deploymenturl" in project && project.deploymenturl && (
                        <Button
                          label="Live Demo"
                          link={project.deploymenturl}
                          iconSVG={project.deploymenticon}
                          buttoncolor={project.colors.main}
                          iconcolor={project.colors.icon}
                        />
                      )}
                      <Button
                        label="Github Repository"
                        link={project.githuburl}
                        iconSVG={project.githubicon}
                        buttoncolor={project.colors.main}
                        iconcolor={project.colors.icon}
                      />
                    </div>
                  </div>
                  {/* Right Content */}
                  <div className="right-content relative h-[20rem] md:h-[29rem] overflow-hidden rounded-xl w-full md:w-[40%] transition-all duration-200 shadow-2xl">
                    <img
                      src={project.image}
                      alt={`${project.title}-project-mockup`}
                      className={`w-full h-full object-cover`}
                    />
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>

            {/* Mobile View: Visible on small screens (default), hidden on lg and up */}
            {projectsData.map((project, index) => (
              <article
                key={index}
                // Visible by default (flex), hidden on lg screens and up. Adjusted width.
                className="bg-darkblue flex flex-col gap-6 w-[62%] h-full dark-mode-shadow p-8 rounded-xl mb-8 lg:hidden"
              >
                <h2 className="text-white text-5xl max-sm:text-4xl mb-4">
                  {project.title}
                </h2>
                <div className="h-[35vh] w-full overflow-hidden object-cover rounded-2xl mb-4">
                  <img
                    src={project.image}
                    alt={project.image} // Consider using project.title for alt text
                    className="w-full h-full object-cover" // Added object-cover here too
                  />
                </div>
                <div className="buttons flex gap-6 max-lg:flex-col max-lg:gap-4">
                  {"deploymenturl" in project && project.deploymenturl && (
                    <Button
                      label="Live Demo"
                      link={project.deploymenturl}
                      iconSVG={project.deploymenticon}
                      buttoncolor={project.colors.main}
                      iconcolor={project.colors.icon}
                    />
                  )}
                  <Button
                    label="Github Repository"
                    link={project.githuburl}
                    iconSVG={project.githubicon}
                    buttoncolor={project.colors.main}
                    iconcolor={project.colors.icon}
                  />
                </div>
                <p className="text-white text-3xl max-lg:text-2xl my-4">
                  {language === "DE"
                    ? project.description
                    : project.description_EN}
                </p>
                <div className="technologies">
                  <h3 className="text-white text-4xl mb-6 max-sm:text-3xl">
                    {language === "DE" ? "Technologien" : "Technologies"}
                  </h3>
                  <div className="grid grid-cols-4 gap-6 p-4">
                    {project.technologies.map((technology, innerIndex) => (
                      <img
                        key={innerIndex}
                        src={technology.icon}
                        alt={`${project.title}-icon`}
                        // Adjusted mobile icon size slightly
                        className="h-[4rem] w-[70%]"
                        data-tooltip-id="my-tooltip"
                        data-tooltip-content={technology.name}
                      />
                    ))}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
        <LiveTicker />
      </section>
      <ReactTooltip
        place="top"
        id="my-tooltip"
        style={{
          fontSize: "1.5rem",
          backgroundColor: "var(--orange)",
        }}
      />
    </React.Fragment>
  );
};

export default ProjectSlider;
