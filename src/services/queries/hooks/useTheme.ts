import { useContext } from "react";
import ThemeContext from "../../../Context/ThemeContext";

export const useTheme = () => {
  const receiver = useContext(ThemeContext);
  if (receiver?.theme === "dark") {
    return {
      mode: "dark",
      style: { backgroundColor: "#1d253d", color: "white" },
      drawerStyle: { backgroundColor: "#121727", color: "white" },
      headerStyle: { backgroundColor: "black", color: "white" },
      appContent: { backgroundColor: "#030e19" },
    };
  } else {
    return {
      mode: "light",
      style: { backgroundColor: "white", color: "black" },
      drawerStyle: { backgroundColor: "aliceblue", color: "black" },
      headerStyle: { backgroundColor: "rgb(215, 235, 253)", color: "black" },
      appContent: { backgroundColor: "white" },
    };
  }
};
