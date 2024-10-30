import { useState, useEffect } from "react";
import Menubar from "./components/Header";
import CodeEditor from "./components/Editor"

function App() {
  const [darkMode, setDarkMode] = useState(false);

  const [fontsize, setFontSize] = useState(14);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  const toggleDarkMode = () => setDarkMode(!darkMode);

  return (
    <div className="flex flex-col h-screen bg-light-white text-light-spacegray dark:bg-dark-gunmetal dark:text-dark-frenchgray">
      <Menubar toggleTheme={toggleDarkMode} setFontSize={setFontSize} />
      <CodeEditor theme={darkMode ? "vs-dark" : "vs"} fontSize={fontsize} />
    </div>
  );
}

export default App;
