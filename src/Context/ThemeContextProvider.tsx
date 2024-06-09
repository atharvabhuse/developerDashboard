import React, { useEffect, useState } from "react";
import ThemeContext from "./ThemeContext";

const ThemeContextProvider = (props: any) => {
  const [theme, setTheme] = useState<any>("light");
//   useEffect(() => {
//     document.documentElement.setAttribute("data-theme", theme);
//   }, [theme]);
  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {props.children}
    </ThemeContext.Provider>
  );
};

export default ThemeContextProvider;
