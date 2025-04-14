import React, { useRef } from "react";
import { aboutMeData } from "../assets/lib/data";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { motion, useScroll, useTransform } from "framer-motion";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { useSectionInView } from "../assets/lib/hooks";
import { useLanguage } from "../context/language-context";

const AboutMe: React.FC = () => {
  const progressCircle = useRef<SVGSVGElement | null>(null);
  const progressContent = useRef<HTMLSpanElement | null>(null);
  const { ref } = useSectionInView("Experience");
  const { language } = useLanguage();
  const animationReference = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: animationReference,
    offset: ["0 1", "1.33 1"],
  });
  const scaleProgess = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
  const opacityProgess = useTransform(scrollYProgress, [0, 1], [0.6, 1]);
  const onAutoplayTimeLeft = (_s: any, time: number, progress: number) => {
    if (progressCircle.current && progressContent.current) {
      progressCircle.current.style.setProperty(
        "--progress",
        String(1 - progress)
      );
      progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
    }
  };
  const paragraphs =
    language === "DE" ? aboutMeData.paragraphs_DE : aboutMeData.paragraphs_EN;

  return (
    <React.Fragment>
      <section className="about-me relative mt-16 " id="about-me" ref={ref}>
        <div className="title-container flex flex-col justify-center items-center p-16 w-1/2 max-lg:w-full max-lg:p-0 max-lg:items-start max-lg:p-16">
          <motion.div
            ref={animationReference}
            style={{
              scale: scaleProgess,
              opacity: opacityProgess,
              textAlign: "left",
            }}
          >
            <p className="text-[--black] mb-6 text-center max-lg:text-left max-lg:pl-4">
              <span className="text-orange">&lt;</span>
              {language === "DE" ? aboutMeData.title : aboutMeData.title_EN}
              <span className="text-orange">/&gt;</span>
            </p>
            <h2 className="text-[--black] mb-6 text-center max-lg:text-left max-lg:pl-4">
              {language === "DE"
                ? "Meine praktische Erfahrung"
                : "My Real-world experience"}
            </h2>
          </motion.div>
        </div>
        <div className="flex flex-col justify-start items-center w-full px-4 mb-16 max-lg:p-4 min-[2500px]:mb-48">
          <Swiper
            spaceBetween={100}
            centeredSlides={true}
            autoplay={{
              delay: 30000,
              disableOnInteraction: false,
            }}
            pagination={{
              clickable: true,
            }}
            modules={[Autoplay, Pagination, Navigation]}
            onAutoplayTimeLeft={onAutoplayTimeLeft}
            className="w-4/5  relative z-2 px-20 pb-32 max-lg:w-full -max-lg:pt-20 max-lg:pb-16 max-lg:px-0 min-[2500px]:w-3/4"
          >
            {paragraphs.map((paragraph, index) => (
              <SwiperSlide
                className="bg-[--darkblue] text-[--white] flex flex-col justify-center items-start gap-24 rounded-2xl p-20 border-solid border-[0.4rem] border-[--lightblue] hover:border-orange duration-500 transition-all text-left max-lg:p-12 max-lg:gap-16 cursor-grab" // Keep padding, adjust text sizes below
                key={index}
              >
                <div className="flex gap-6 flex-row justify-start items-center max-lg:flex-col max-lg:justify-center max-lg:items-center max-lg:w-full">
                  {/* <div>
                  <img
                  src={paragraph.icon}
                  alt={paragraph.icon}
                  className="w-24 max-sm:w-20"
                  />
                  </div> */}
                  <div className="max-lg:text-center w-full">
                    <h2 className="max-lg:text-5xl max-sm:text-4xl">
                      {" "}
                      {/* Increased size */}
                      {paragraph.title}
                    </h2>
                    <h3 className="text-4xl max-lg:text-3xl">
                      {" "}
                      {/* Increased size */}
                      {paragraph.job_title}
                    </h3>
                  </div>
                </div>
                <div className="flex flex-row gap-10 max-lg:flex-col">
                  <div className="flex flex-col gap-4 items-center justify-between -mt-10 -mb-10 max-lg:flex-row max-lg:m-0 max-lg:justify-center max-lg:w-full max-lg:mb-4">
                    <p className="text-white min-[1024px]:text-4xl max-lg:text-2xl text-center whitespace-nowrap">
                      {" "}
                      {/* Increased size */}
                      <span className="text-orange">&lt;</span>
                      {paragraph.start_date}
                      <span className="text-orange">/&gt;</span>
                    </p>
                    <div className="flex justify-between items-center w-1 h-[100%] max-lg:w-24 max-sm:w-40 max-lg:flex-row">
                      <div className="w-[0.5rem] bg-[--lightblue] h-[100%] max-lg:w-full max-lg:h-[0.25rem]"></div>
                    </div>
                    <p className="text-white min-[1024px]:text-4xl max-lg:text-2xl text-center whitespace-nowrap">
                      {" "}
                      {/* Increased size */}
                      <span className="text-orange">&lt;</span>
                      {paragraph.end_date}
                      <span className="text-orange">/&gt;</span>
                    </p>
                  </div>
                  <div>
                    <p
                      className="text-white text-4xl max-lg:text-4xl max-sm:text-3xl" // Increased size
                      style={{ whiteSpace: "pre-line" }}
                    >
                      {paragraph.description}
                    </p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
            <div
              className="autoplay-progress absolute right-0 bottom-0 z-10 flex items-center justify-center font-bold text-orange text-4xl w-24 h-24 max-lg:w-16 max-lg:h-16 max-lg:text-3xl "
              slot="container-end"
            >
              <svg viewBox="0 0 48 48" ref={progressCircle}>
                <circle cx="24" cy="24" r="20"></circle>
              </svg>
              <span ref={progressContent}></span>
            </div>
          </Swiper>
        </div>
      </section>
    </React.Fragment>
  );
};

export default AboutMe;
