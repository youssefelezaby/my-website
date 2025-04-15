import React, { useState, useEffect } from "react";
import {
  widthStyles,
  spaceStyles,
  heightStyles,
  directionStyles,
} from "../assets/lib/data";

interface DividerProps {
  direction:
    | "outer-right-to-inner-left"
    | "outer-left-to-inner-right"
    | "inner-right-to-middle"
    | "inner-left-to-middle"
    | "middle-to-inner-right"
    | "middle-to-inner-left"
    | "middle";
  color: string;
  thickness: string;
  height: "small" | "middle" | "large" | "extraLarge";
  dividerStyle: string;
}

const Divider: React.FC<DividerProps> = ({
  direction,
  color,
  thickness,
  height,
  dividerStyle,
}) => {
  const [currentWidthStyles, setCurrentWidthStyles] = useState(widthStyles);
  const [currentSpaceStyles, setCurrentSpaceStyles] = useState(spaceStyles);

  useEffect(() => {
    const updateStyles = () => {
      const screenWidth = window.innerWidth;

      if (screenWidth >= 768 && screenWidth <= 1024) {
        setCurrentWidthStyles({
          ...widthStyles,
          "outer-right-to-inner-left": {
            widths: ["50.1%", "50.1%"],
          },
          "middle-to-inner-left": {
            widths: ["50.1%", "50.1%"],
          },
        });

        setCurrentSpaceStyles({
          ...spaceStyles,
          "middle-to-inner-left": {
            marginTop: "-2.5rem",
            width: "0.3%",
          },
        });
      } else {
        setCurrentWidthStyles({
          ...widthStyles,
          "outer-right-to-inner-left": {
            widths: ["74.45%", "74.45%"],
          },
          "middle-to-inner-left": {
            widths: ["50.1%", "49%"],
          },
        });

        setCurrentSpaceStyles({
          ...spaceStyles,
          "middle-to-inner-left": {
            marginTop: "-2.5rem",
            width: "50%",
          },
        });
      }
    };

    // Set initial value
    updateStyles();

    // Add event listener for resize events
    window.addEventListener("resize", updateStyles);

    // Clean up
    return () => window.removeEventListener("resize", updateStyles);
  }, []);

  const borderStyle = {
    borderColor: `var(--${color})`,
    borderStyle: `${dividerStyle}`,
  };

  const heightStyle = heightStyles[height];
  const directionStyle = directionStyles[direction];
  const spaceStyle = currentSpaceStyles[direction];
  const widthStyle = currentWidthStyles[direction];

  return (
    <div style={directionStyle}>
      <div
        className="flex justify-end mb-10 "
        style={{ height: heightStyle?.heights[0], ...spaceStyle }}
      >
        <div
          className="h-full"
          style={{
            ...borderStyle,
            borderRightWidth: thickness,
            borderBottomWidth: thickness,
            width: widthStyle?.widths[0],
          }}
        ></div>
      </div>
      <div
        className="flex justify-end -mt-10"
        style={{ height: heightStyle?.heights[1] }}
      >
        <div
          className="h-full"
          style={{
            ...borderStyle,
            borderLeftWidth: thickness,
            width: widthStyle?.widths[1],
          }}
        ></div>
      </div>
    </div>
  );
};

export default Divider;
