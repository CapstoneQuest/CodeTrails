import { useState, useEffect } from "react";
import Menubar from "./components/Header";
import CodeEditor from "./components/Editor";
import OutputPanel from "./components/OutputPanel";

function App() {
  const [theme, setTheme] = useState("light");

  const [fontsize, setFontSize] = useState(14);
  const [showMinimap, setShowMinimap] = useState(true);
  const [fontLigatures, setFontLigatures] = useState(false);

  const [showOutputPanel, setShowOutputPanel] = useState(true);

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else if (theme === "light") {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  return (
    <div className="flex h-screen flex-col bg-light-white text-light-spacegray dark:bg-dark-gunmetal dark:text-dark-frenchgray">
      <Menubar
        changeTheme={setTheme}
        setFontSize={setFontSize}
        setFontLigatures={setFontLigatures}
        setMinimap={setShowMinimap}
      />
      <CodeEditor
        theme={theme === "dark" ? "vs-dark" : "vs"}
        fontSize={fontsize}
        fontLigatures={fontLigatures}
        showMinimap={showMinimap}
        showOutputPanel={showOutputPanel}
      />
      {showOutputPanel && (
        <OutputPanel setShowOutputPanel={setShowOutputPanel} />
      )}
    </div>
  );
}

export default App;
