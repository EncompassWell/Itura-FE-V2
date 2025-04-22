import { useContext } from "react";
import { ThemeContext } from "../context/ThemeProvider";

export const useThemeStyle = (lightClasses, darkClasses) => {
  const { theme } = useContext(ThemeContext);
  return theme === "dark" ? darkClasses : lightClasses;
};