// @ts-nocheck
import React, { lazy, Suspense } from "react";
import { Link } from "react-router-dom";
import { sideBarLeftSocials, FooterLinks } from "../assets/lib/data";
import { useLanguage } from "../context/language-context";
import { useTheme } from "../context/theme-context";

import Popup from "reactjs-popup";
import { VscChromeClose } from "react-icons/vsc";

interface SocialLink {
  link: string;
  icon: string | React.FC<{ className: string }>;
  strokeColor?: string;
  altimgname: string;
  iconcolor?: string;
}

const Footer: React.FC = () => {
  const { language } = useLanguage();
  const { theme } = useTheme();

  return (
    <footer className="bg-darkblue flex justify-around items-center gap-10 p-10 max-lg:flex-col max-lg:pb-48 relative z-[1]">
      <div className="socials flex flex-col items-center gap-4">
        {/* Wrap icons in a flex container to keep them horizontal */}
        <div className="flex gap-10">
          {sideBarLeftSocials.map((social: SocialLink, index: number) => (
            <Link
              to={social.link}
              className="block" // Removed mb-2 as vertical spacing is handled by the parent gap
              key={index}
              target="_blank"
              rel="noopener noreferrer"
              aria-current={
                social.altimgname === "true"
                  ? social.altimgname + " button"
                  : social.altimgname + " button"
              }
            >
              {typeof social.icon === "function" ? (
                <social.icon className={`stroke-orange`} />
              ) : (
                <img
                  src={social.icon}
                  alt={social.altimgname}
                  style={{ stroke: social.iconcolor || "" }}
                />
              )}
            </Link>
          ))}
        </div>
        {/* Text is now below the icons and centered due to items-center on parent */}
        <p className="text-white text-xl text-center mt-4">
          {" "}
          {/* Removed w-full and lg:order-last */}© 2025 Youssef Elezaby. All
          rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
