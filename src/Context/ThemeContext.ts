import { Dispatch, SetStateAction, createContext } from "react";


interface ThemeContextType {
    theme: string;
    setTheme: Dispatch<SetStateAction<string>>;
}


const initialState = {};
const ThemeContext = createContext<any>(initialState);
export default ThemeContext;
