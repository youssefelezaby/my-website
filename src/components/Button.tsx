import React from "react";
import { Link } from "react-router-dom";

interface ButtonProps {
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void; // Make event type more specific
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
  disabled?: boolean;
}

const Button: React.FC<ButtonProps> = ({
  onClick,
  label,
  link,
  value,
  iconSVG: IconSVGComponent,
  buttoncolor,
  buttonhovercolor,
  type = "button", // Default type to button
  elementType,
  disabled,
}) => {
  const commonClassNames = `text-white drop-shadow-2xl border-none py-6 px-12 rounded-lg text-3xl transition-all duration-200 flex flex-row gap-6 justify-center items-center cursor-pointer ${buttoncolor} ${buttonhovercolor} max-lg:text-2xl max-lg:py-4 max-lg:px-6 max-lg:rounded-lg max-lg:w-full max-sm:text-3xl max-sm:py-6 max-sm:h-20
    shadow-xl hover:scale-100 hover:-translate-y-2 hover:drop-shadow-xl transition-all duration-200 w-max ${
      disabled ? "opacity-50 cursor-not-allowed" : ""
    }`;

  const buttonContent = (
    <>
      {IconSVGComponent ? (
        <IconSVGComponent className={"w-max h-10"} />
      ) : (
        // Assuming this img tag is intentional or placeholder
        <img
          src={buttoncolor || ""}
          alt={`${label}-icon`}
          className={`bg-[${buttoncolor || ""}] w-16 `}
        />
      )}
      {label}
    </>
  );

  if (elementType === "input") {
    return (
      <input
        disabled={disabled}
        type={type === "submit" || type === "reset" ? type : "button"}
        className={commonClassNames}
        value={value}
        onClick={onClick as any} // Cast needed if onClick expects ButtonEvent
      />
    );
  }

  // If onClick is provided, render a button with the onClick handler
  if (onClick) {
    return (
      <button
        type={type}
        className={commonClassNames}
        onClick={onClick}
        disabled={disabled}
      >
        {buttonContent}
      </button>
    );
  }

  // If link is provided (and onClick is not), render a button wrapped in a Link
  if (link) {
    return (
      <Link to={link} className="no-underline">
        <button type={type} className={commonClassNames} disabled={disabled}>
          {buttonContent}
        </button>
      </Link>
    );
  }
};

export default Button;
