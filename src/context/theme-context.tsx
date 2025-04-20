import { useEffect, useState, createContext, useContext } from "react";

type Theme = "light" | "dark";

type ThemeContextProviderProps = {
  children: React.ReactNode;
};

type ThemeContextType = {
  theme: Theme;
  toggleTheme: () => void;
};

const ThemeContext = createContext<ThemeContextType | null>(null);

const THEME_STORAGE_KEY = "theme";

export default function ThemeContextProvider({
  children,
}: ThemeContextProviderProps) {
  const [theme, setTheme] = useState<Theme>("light");

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    window.localStorage.setItem(THEME_STORAGE_KEY, newTheme);
    document.documentElement.classList.remove(theme);
    document.documentElement.classList.add(newTheme);
  };

  // // dark mode by system default
  // useEffect(() => {
  //   const localTheme = window.localStorage.getItem(
  //     THEME_STORAGE_KEY
  //   ) as Theme | null;
  //   const preferredColorScheme = window.matchMedia(
  //     "(prefers-color-scheme: dark)"
  //   ).matches
  //     ? "dark"
  //     : "light";
  //   const initialTheme = localTheme || preferredColorScheme;

  //   setTheme(initialTheme);
  //   document.documentElement.classList.add(initialTheme);
  // }, []);
  useEffect(() => {
    const localTheme = window.localStorage.getItem(
      THEME_STORAGE_KEY
    ) as Theme | null;

    // Use saved theme from localStorage if available, otherwise default to 'dark'
    const initialTheme = localTheme || "dark";

    // Only update state and class if it differs from the initial state ('dark')
    if (initialTheme !== theme) {
      setTheme(initialTheme);
    }

    // Ensure the correct class is applied based on the determined theme
    // Remove the opposite class first to be safe
    document.documentElement.classList.remove(
      initialTheme === "dark" ? "light" : "dark"
    );
    document.documentElement.classList.add(initialTheme);
  }, []);

  return (
    <ThemeContext.Provider
      value={{
        theme,
        toggleTheme,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);

  if (context === null) {
    throw new Error("useTheme must be used within a ThemeContextProvider");
  }

  return context;
}
