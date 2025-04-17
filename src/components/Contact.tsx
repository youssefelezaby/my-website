import React, { useState, useEffect, useRef } from "react";
import Button from "./Button";
import { Highlight, themes } from "prism-react-renderer";
import { contactData } from "../assets/lib/data.tsx";
import { useSectionInView } from "../assets/lib/hooks";
import { useLanguage } from "../context/language-context";
import { useTheme } from "../context/theme-context";
import { motion, useScroll, useTransform } from "framer-motion";
import "react-toastify/dist/ReactToastify.css";
import emailjs from "@emailjs/browser";

const Contact: React.FC = () => {
  const formRef = useRef<HTMLFormElement>(null); // Specify the element type
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [message, setMessage] = useState<string>("");
  const [cursor, setCursor] = useState<string>("");
  const [lastUpdatedField, setLastUpdatedField] = useState<string | null>(null);
  const { ref } = useSectionInView("Contact");
  const { language } = useLanguage();
  const { theme } = useTheme();
  const [loading, setLoading] = useState(false);
  const [isSent, setIsSent] = useState(false); // State to track if email was sent

  const animationReference = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: animationReference,
    offset: ["0 1", "1.33 1"],
  });
  const scaleProgess = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
  const opacityProgess = useTransform(scrollYProgress, [0, 1], [0.6, 1]);

  const notifySentForm: React.FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();
    if (!formRef.current) {
      console.error("Form reference is not available.");
      return;
    }
    setLoading(true);
    try {
      await emailjs.sendForm(
        import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
        formRef.current,
        import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY
      );
      setName("");
      setEmail("");
      setMessage("");
      setIsSent(true);
    } catch (error) {
      console.log("EMAILJS ERROR", error);
    } finally {
      setLoading(false);
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
            ref={formRef}
            className="flex flex-col gap-0 justify-center items-center px-32 w-1/2 max-lg:w-full max-lg:p-0"
            onSubmit={notifySentForm}
            autoComplete="off"
          >
            {contactData.inputfields.map((input, index) => (
              <input
                key={index}
                type={input.type}
                placeholder={
                  language === "DE"
                    ? `${input.placeholder.de}`
                    : `${input.placeholder.en}`
                }
                name={input.name}
                value={input.name === "name" ? name : email}
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
              required
              rows={contactData.textarea.rows}
              placeholder={
                language === "DE"
                  ? `${contactData.textarea.placeholder.de}`
                  : `${contactData.textarea.placeholder.en}`
              }
              name={contactData.textarea.name}
              value={message}
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
            {!isSent ? (
              <Button
                value={
                  loading
                    ? language === "DE"
                      ? "Senden..."
                      : "Sending..."
                    : language === "DE" // Default text when not loading and not sent
                    ? `${contactData.button.value.de}`
                    : `${contactData.button.value.en}`
                }
                iconSVG={contactData.icon}
                buttoncolor={contactData.colors.main}
                iconcolor={contactData.colors.icon}
                type="submit"
                elementType="input"
                disabled={loading}
              />
            ) : (
              // Display only the success text after sending
              <p className="mt-4 text-center w-full">
                {language === "DE"
                  ? "E-Mail erfolgreich gesendet! ✅"
                  : "E-Mail Sent Successfully! ✅"}
              </p>
            )}
          </form>
        </div>
      </section>
    </React.Fragment>
  );
};

export default Contact;
