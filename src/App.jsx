import { useState, useEffect } from "react";
import Menubar from "./components/Header";
import CodeEditor from "./components/Editor";

function App() {
  const [theme, setTheme] = useState("light");

  const [fontsize, setFontSize] = useState(14);

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else if (theme === "light") {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  return (
    <div className="flex h-screen flex-col bg-light-white text-light-spacegray dark:bg-dark-gunmetal dark:text-dark-frenchgray">
      <Menubar changeTheme={setTheme} setFontSize={setFontSize} />
      <CodeEditor theme={theme === "dark" ? "vs-dark" : "vs"} fontSize={fontsize} />
    </div>
  );
}

export default App;
