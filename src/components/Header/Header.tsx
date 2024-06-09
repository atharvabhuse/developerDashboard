import React, { useContext } from "react";
import styles from "./Header.module.scss";
import { useTheme } from "../../services/queries/hooks/useTheme";
import ThemeContext from "../../Context/ThemeContext";
const Header = () => {
  const theme = useTheme();
  const sender = useContext(ThemeContext);
  const clickHandler = () => {
    if (theme.mode === "light") {
      sender.setTheme("dark");
    } else if (theme.mode === "dark") {
      sender.setTheme("light");
    }
  };
  return (
    <div className={styles.header_container} style={theme.headerStyle}>
      <div className={styles.header_text}>Developers Dashboard</div>
      <button
        className={styles.header_button}
        type="button"
        onClick={clickHandler}
      >
        {theme.mode === "light" ? "🌙" : "☀️"}
      </button>
    </div>
  );
};

export default Header;
