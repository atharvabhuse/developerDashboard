import { Dispatch, SetStateAction, createContext } from "react";

interface ThemeContextType {
  theme: string;
  setTheme: Dispatch<SetStateAction<string>>;
}
const initialState = { theme: "light", setTheme: () => {} };
const ThemeContext = createContext<ThemeContextType>(initialState);
export default ThemeContext;
