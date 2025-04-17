import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { navLinks } from "../assets/lib/data";
import ScrollToAnchor from "./Listener";
import { useActiveSectionContext } from "../context/active-section-context";
import { useTheme } from "../context/theme-context";
import { useLanguage } from "../context/language-context";
import LanguageSwitch from "./LanguageSwitch";

const NavBar: React.FC = () => {
  const { theme } = useTheme();
  const { language } = useLanguage();

  const [isSticky, setIsSticky] = useState(false);
  const { activeSection, setActiveSection, setTimeOfLastClick } =
    useActiveSectionContext();
  const [isMobileMenuActive, setIsMobileMenuActive] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const threshold = window.outerHeight * 0.1;
      setIsSticky(scrollY >= threshold);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 1024) {
        setIsMobileMenuActive(true);
        setIsSticky(false);
      } else {
        setIsMobileMenuActive(false);
        setIsSticky(true);
      }
    };

    window.addEventListener("resize", handleResize);

    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const CustomNavLink: React.FC<CustomNavLinkProps> = ({
    link,
    children,
    linkEn,
  }) => {
    const [isHovered, setIsHovered] = useState(false);
    const isLinkActive = isHovered || linkEn === activeSection;

    const linkClasses = isLinkActive
      ? "transition-all duration-200 relative"
      : "opacity-20 transition-all duration-700";

    const leftArrow = isLinkActive && (
      <span className="text-[--orange] absolute -left-5 top-0 max-lg:hidden">
        &lt;
      </span>
    );

    const rightArrow = isLinkActive && (
      <span className="text-[--orange] absolute top-0 -right-10 max-lg:hidden">
        /&gt;
      </span>
    );
    const handleClick = (event: React.MouseEvent<HTMLAnchorElement>) => {
      event.preventDefault();

      if (linkEn) {
        setActiveSection(linkEn);
        setTimeOfLastClick(Date.now());
      }

      const targetId = link.substring(1);
      if (targetId === "home") {
        window.scrollTo({ top: 0, behavior: "smooth" });
      } else {
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
          const isLargeScreen = window.innerWidth > 1024;
          const offset = 100;
          if (isLargeScreen) {
            const elementPosition =
              targetElement.getBoundingClientRect().top + window.scrollY;
            const offsetPosition = elementPosition - offset;
            window.scrollTo({
              top: offsetPosition,
              behavior: "smooth",
            });
          } else {
            targetElement.scrollIntoView({
              behavior: "smooth",
              block: "start",
            });
          }
        }
      }
    };
    return (
      <NavLink
        to={link}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className={`relative ${linkClasses}`}
        aria-aria-current={link}
        onClick={handleClick}
      >
        <span>
          {leftArrow}
          {children}
          {rightArrow}
        </span>
      </NavLink>
    );
  };

  return (
    <React.Fragment>
      <ScrollToAnchor />
      {!isMobileMenuActive && (
        <nav
          className={`max-lg:hidden flex-row flex justify-center items-center gap-24 font-semibold p-5 top-0 ${
            isSticky && !isMobileMenuActive
              ? `sticky top-10 z-50 ml-auto mr-auto  w-max  px-32 py-5 transition-all ease-in-out duration-100 rounded-full border border-white border-opacity-90  bg-opacity-90 shadow-lg shadow-black/[0.03] backdrop-blur-[0.5rem] ${
                  theme === "dark" ? "bg-darkblue" : "bg-white"
                }`
              : ""
          }
   `}
        >
          {navLinks.map((link, index) => (
            <CustomNavLink key={index} link={link.hash} linkEn={link.en}>
              {link.en === activeSection ? (
                <div>
                  <span className="text-[--orange] absolute -left-5 top-0">
                    &lt;
                  </span>
                  {language === "DE" ? link.de : link.en}
                </div>
              ) : (
                <div
                  onClick={() => {
                    setActiveSection(link.en);
                    setTimeOfLastClick(Date.now());
                  }}
                >
                  {language === "DE" ? link.de : link.en}
                </div>
              )}
            </CustomNavLink>
          ))}
          <LanguageSwitch />
        </nav>
      )}
      {isMobileMenuActive && (
        <nav
          className={`max-lg:flex w-[96vw] flex-row justify-between fixed -bottom-8 left-1/2 z-50 bg-darkblue px-6 py-4 text-center items-center  rounded-2xl bg-opacity-90  -translate-x-1/2 -translate-y-1/2 shadow-black/[0.03] backdrop-blur-[0.5rem] border-white border-2 border-opacity-10  ${
            theme === "dark" ? "bg-darkblue" : "bg-[#ffffff]"
          }`}
        >
          {navLinks.map((link, mobileIndex) => (
            <CustomNavLink key={mobileIndex} link={link.hash} linkEn={link.en}>
              {link.en === activeSection ? (
                <div className="flex flex-col items-center">
                  <div className="relative">
                    <link.icon className="text-[3.5rem] text-orange z-10 relative" />
                  </div>
                </div>
              ) : (
                <div
                  className="flex flex-col items-center transition-all duration-300"
                  onClick={() => {
                    setActiveSection(link.en);
                    setTimeOfLastClick(Date.now());

                    if (link.en === "Home") {
                      document.body.scrollIntoView({
                        behavior: "smooth",
                        block: "start",
                      });
                    }
                  }}
                >
                  <div className="relative">
                    <link.icon className="text-[2.5rem] text-white/[1]" />
                  </div>
                </div>
              )}
            </CustomNavLink>
          ))}
          <div className="flex flex-col items-center">
            <LanguageSwitch />
          </div>
        </nav>
      )}
    </React.Fragment>
  );
};

// Define the SectionName type based on the expected values
type SectionName = "Home" | "Skills" | "Projects" | "Experience" | "Contact";

interface CustomNavLinkProps {
  link: string;
  children: React.ReactNode;
  linkEn?: SectionName; // Use the specific union type here
}

export default NavBar;
