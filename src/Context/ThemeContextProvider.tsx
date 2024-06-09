import React, { useState } from "react";
import ThemeContext from "./ThemeContext";

const ThemeContextProvider = (props: any) => {
  const [theme, setTheme] = useState<any>("light");
  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {props.children}
    </ThemeContext.Provider>
  );
};

export default ThemeContextProvider;
