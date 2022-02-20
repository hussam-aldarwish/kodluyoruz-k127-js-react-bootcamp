import { useContext } from "react";
import { ThemeContext } from "../contexts/theme";

export default function useTheme() {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return { theme, toggleTheme };
}
