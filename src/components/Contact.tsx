import React, { useState, useEffect, useRef } from "react";
import Button from "./Button";
import axios from "axios";
import { Highlight, themes } from "prism-react-renderer";
import { contactData, toastMessages } from "../assets/lib/data.tsx";
import { useSectionInView } from "../assets/lib/hooks";
import { useLanguage } from "../context/language-context";
import { ToastContainer, toast } from "react-toastify";
import { useTheme } from "../context/theme-context";
import { motion, useScroll, useTransform } from "framer-motion";
import "react-toastify/dist/ReactToastify.css";

const Contact: React.FC = () => {
  const apiBaseUrl = import.meta.env.VITE_API_BASE_URL || "";

  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [message, setMessage] = useState<string>("");
  const [cursor, setCursor] = useState<string>("");
  const [lastUpdatedField, setLastUpdatedField] = useState<string | null>(null);
  const { ref } = useSectionInView("Contact");
  const { language } = useLanguage();
  const { theme } = useTheme();
  const [error, setError] = useState<string | any>(null);

  const animationReference = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: animationReference,
    offset: ["0 1", "1.33 1"],
  });
  const scaleProgess = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
  const opacityProgess = useTransform(scrollYProgress, [0, 1], [0.6, 1]);

  const notifySentForm: React.FormEventHandler<HTMLFormElement> = async (e) => {
    setError(null);
    console.log(error);

    e.preventDefault();
    const data = new FormData(e.currentTarget);

    try {
      const response = await axios.post(apiBaseUrl, data);
      console.log(response);
      if (language === "DE") {
        toast.success(toastMessages.successEmailSent.de);
      } else {
        toast.success(toastMessages.successEmailSent.en);
      }
    } catch (error) {
      console.log(error);
      if (language === "DE") {
        toast.error(toastMessages.failedEmailSent.de);
      } else {
        toast.error(toastMessages.failedEmailSent.en);
      }
      setError("An Error occured, try again later");
    }
  };

  const handleInputFocus = (fieldName: string) => {
    setCursor(`${fieldName}${cursor}`);
  };

  const wordWrap = (
    text: string,
    maxLineLength: number,
    indentation: string
  ) => {
    const words = text.split(" ");
    let lines: string[] = [];
    let currentLine = "";

    words.forEach((word) => {
      if (currentLine.length + word.length <= maxLineLength) {
        currentLine += word + " ";
      } else {
        lines.push(currentLine.trim());
        currentLine = `${indentation}${word} `;
      }
    });

    if (currentLine) {
      lines.push(currentLine.trim());
    }

    return lines.join("\n");
  };

  const handleInputChange = (
    e:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;

    if (name === "name") {
      setName(value);
    } else if (name === "email") {
      setEmail(value);
    } else if (name === "message") {
      setMessage(value);
    }

    setLastUpdatedField(name);
  };

  // Add useEffect to set font size for mobile to prevent zoom
  useEffect(() => {
    const isMobile = window.innerWidth <= 768;
    if (isMobile) {
      const inputs = document.querySelectorAll("input, textarea");
      inputs.forEach((input) => {
        // Assert that input is an HTMLElement to access style
        if (input instanceof HTMLElement) {
          input.style.fontSize = "16px"; // 16px is the minimum font size that doesn't trigger zoom on iOS
        }
      });
    }
  }, []);

  const [cursorBlink, setCursorBlink] = useState<boolean>(true);

  useEffect(() => {
    const blinkInterval = setInterval(() => {
      setCursorBlink((prev) => !prev);
    }, 400);

    return () => {
      clearInterval(blinkInterval);
    };
  }, []);

  const codeSnippet = `
import  { useState } from "react";

// 🌈 Spreading Stardust: 
// Crafting Cosmic Email 🌌

const [sender, setSender] = "${name}${
    lastUpdatedField === "name" ? (cursorBlink ? "|" : " ") : ""
  }🚀";
const [recipient, setRecipient] = "${email}${
    lastUpdatedField === "email" ? (cursorBlink ? "|" : " ") : ""
  }📧";
const [message, setMessage] = 
\`Hello, intrepid traveler! 👋\n
Across the cosmos, a message for you:\n
"${wordWrap(message, 40, " ")}${
    lastUpdatedField === "message" ? (cursorBlink ? "|" : " ") : ""
  }"\n
Wishing you stardust dreams,\n
${name}${lastUpdatedField === "name" ? (cursorBlink ? "|" : " ") : ""}
\``;

  return (
    <React.Fragment>
      <section
        className="contact-container w-full min-[2500px]:px-[55rem] mt-16"
        id="contact"
      >
        <div
          className="title-container flex flex-col gap-6 justify-center items-center py-16  max-lg:p-16"
          ref={ref}
        >
          <motion.div
            ref={animationReference}
            style={{
              scale: scaleProgess,
              opacity: opacityProgess,
              textAlign: "center",
            }}
          >
            <p className="text-[--black] mb-6">
              <span className="text-[--orange]">&lt;</span>
              {language === "DE" ? contactData.title.de : contactData.title.en}
              <span className="text-[--orange]">/&gt;</span>
            </p>

            <h2 className="text-[--black] text-center">
              {language === "DE"
                ? contactData.description.de
                : contactData.description.en}
            </h2>
          </motion.div>
        </div>
        <div className="flex flex-row justify-center items-start px-32 pt-32 mb-32 max-lg:flex-col max-lg:p-10">
          <div className="w-1/2 bg-[--darkblue] text-[--white] flex flex-col justify-center items-start gap-24 rounded-2xl p-20 border-solid border-[0.4rem] border-[--lightblue] hover:border-orange duration-500 transition-all quote-outer-container text-left max-lg:hidden cursor-progress overflow-hidden">
            <Highlight
              code={codeSnippet}
              language="tsx"
              theme={themes.nightOwl}
            >
              {({ className, style, tokens, getLineProps, getTokenProps }) => (
                <pre
                  className={`${className} text-4xl whitespace-pre-wrap break-words w-full`}
                  style={style}
                >
                  {tokens.map((line, i) => (
                    <div
                      {...getLineProps({ line, key: i })}
                      className="break-words"
                    >
                      {line.map((token, key) => (
                        <span {...getTokenProps({ token, key })} />
                      ))}
                    </div>
                  ))}
                </pre>
              )}
            </Highlight>
          </div>
          <form
            className="flex flex-col gap-0 justify-center items-center px-32 w-1/2 max-lg:w-full max-lg:p-0"
            onSubmit={notifySentForm}
            autoComplete="off"
          >
            {contactData.inputfields
              .filter((input) => input.name !== "subject")
              .map((input, index) => (
                <input
                  key={index}
                  type={input.type}
                  placeholder={
                    language === "DE"
                      ? `${input.placeholder.de}`
                      : `${input.placeholder.en}`
                  }
                  name={input.name}
                  value={
                    input.name === "name"
                      ? name
                      : input.name === "email"
                      ? email
                      : message
                  }
                  required
                  onFocus={() => {
                    handleInputFocus(input.name);
                    setLastUpdatedField(input.name);
                  }}
                  onMouseEnter={() => {
                    handleInputFocus(input.name);
                    setLastUpdatedField(input.name);
                  }}
                  onChange={handleInputChange}
                  className={`${
                    theme === "dark"
                      ? "bg-[--blackblue] dark-mode-shadow "
                      : "bg-[--icewhite] dark-shadow "
                  } max-sm:text-lg max-sm:p-10 w-full`}
                />
              ))}
            <textarea
              rows={contactData.textarea.rows}
              placeholder={
                language === "DE"
                  ? `${contactData.textarea.placeholder.de}`
                  : `${contactData.textarea.placeholder.en}`
              }
              name={contactData.textarea.name}
              onFocus={() => {
                handleInputFocus(contactData.textarea.name);
                setLastUpdatedField(contactData.textarea.name);
              }}
              onMouseEnter={() => {
                handleInputFocus(contactData.textarea.name);
                setLastUpdatedField(contactData.textarea.name);
              }}
              onChange={handleInputChange}
              className={`${
                theme === "dark"
                  ? "bg-[--blackblue] dark-mode-shadow"
                  : "bg-[--icewhite] dark-shadow"
              } max-sm:text-lg max-sm:p-10`}
            />
            <Button
              value={
                language === "DE"
                  ? `${contactData.button.value.de}`
                  : `${contactData.button.value.en}`
              }
              iconSVG={contactData.icon}
              buttoncolor={contactData.colors.main}
              iconcolor={contactData.colors.icon}
              type="submit"
              elementType="input"
            />
            <ToastContainer
              className="w-max text-3xl block p-3 max-lg:w-full max-sm:text-3xl"
              position="bottom-center"
              autoClose={5000}
              hideProgressBar={false}
              newestOnTop={false}
              closeOnClick
              rtl={false}
              pauseOnFocusLoss
              draggable
              pauseOnHover
              theme={theme}
            />
          </form>
        </div>
      </section>
    </React.Fragment>
  );
};

export default Contact;
