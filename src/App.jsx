import { useState, useEffect } from "react";
import Menubar from "./components/Header";
import CodeEditor from "./components/Editor"

function App() {
  const [darkMode, setDarkMode] = useState(false);

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
      <Menubar toggleTheme={toggleDarkMode} />
      <CodeEditor theme={darkMode ? "vs-dark" : "vs"} />
    </div>
  );
}

export default App;
