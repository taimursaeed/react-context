import { useContext } from "react";
import { ThemeContext, ThemeContextUpdate } from "./ThemeContext";
export default function Nav() {
  const x = useContext(ThemeContext);
  const y = useContext(ThemeContextUpdate);

  return (
    <div style={{ padding: "1rem" }}>
      <button onClick={y}>Toggle Theme [nav level]</button>
      <br />
      <br />
      <span>{x}</span>
      <br />
      this is nav
    </div>
  );
}
