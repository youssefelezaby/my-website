import React from "react";
import { Link } from "react-router-dom";

interface ButtonProps {
  onClick?: () => void;
  label?: string;
  value?: string;
  className?: string;
  link?: string;
  iconcolor?: string;
  iconSVG?: React.FC<{ className: string }>;
  buttoncolor?: string;
  buttonhovercolor?: string;
  type?: "button" | "submit" | "reset";
  elementType?: "input" | "button";
}

const Button: React.FC<ButtonProps> = ({
  onClick,
  label,
  link,
  value,
  iconSVG: IconSVGComponent,
  buttoncolor,
  buttonhovercolor,
  type,
  elementType,
}) => {
  const commonProps = {
    onClick,
    type,
    className: `text-white drop-shadow-2xl border-none py-4 px-8 rounded-lg text-[1.6rem] transition-all duration-200 flex flex-row gap-4 justify-center items-center cursor-pointer ${buttoncolor} ${buttonhovercolor} max-lg:text-2xl max-lg:py-4 max-lg:px-6 max-lg:rounded-lg max-lg:w-full max-sm:text-3xl max-sm:py-6 max-sm:h-20
    shadow-xl hover:scale-100 hover:-translate-y-2 hover:drop-shadow-xl transition-all duration-200 w-max`,
  };

  if (elementType === "input") {
    return <input {...commonProps} value={value}></input>;
  } else {
    return (
      <Link to={link || ""} className="no-underline">
        <button {...commonProps}>
          {IconSVGComponent ? (
            <IconSVGComponent className={"w-max h-10"} />
          ) : (
            <img
              src={buttoncolor || ""}
              alt={`${label}-icon`}
              className={`bg-[${buttoncolor || ""}] w-16 `}
            />
          )}
          {label}
        </button>
      </Link>
    );
  }
};

export default Button;
