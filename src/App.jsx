import { useState, useEffect } from "react";
import Menubar from "./components/Header";
import CodeEditor from "./components/Editor";
import OutputPanel from "./components/OutputPanel";
import api from "./utils/apiConfig";

function App() {
  const [theme, setTheme] = useState("light");

  const [fontsize, setFontSize] = useState(14);
  const [showMinimap, setShowMinimap] = useState(true);
  const [fontLigatures, setFontLigatures] = useState(false);

  const [showOutputPanel, setShowOutputPanel] = useState(false);

  const [sourceCode, setSourceCode] = useState("//Welcome to CodeTrails!");
  const [compileResult, setCompileResult] = useState({});

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else if (theme === "light") {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  function handleCompileRequest() {
    api
      .post("/compile", { sourceCode: sourceCode, stdin: "" })
      .then((response) => setCompileResult(response.data))
      .catch((error) => console.error("Error fetching data:", error));

    setShowOutputPanel(true);
  }

  return (
    <div className="flex h-screen flex-col bg-light-white text-light-spacegray dark:bg-dark-gunmetal dark:text-dark-frenchgray">
      <Menubar
        changeTheme={setTheme}
        setFontSize={setFontSize}
        setFontLigatures={setFontLigatures}
        setMinimap={setShowMinimap}
        doCompile={handleCompileRequest}
      />
      <CodeEditor
        theme={theme === "dark" ? "vs-dark" : "vs"}
        fontSize={fontsize}
        fontLigatures={fontLigatures}
        showMinimap={showMinimap}
        showOutputPanel={showOutputPanel}
        setSourceCode={setSourceCode}
      />
      {showOutputPanel && (
        <OutputPanel
          setShowOutputPanel={setShowOutputPanel}
          outputContent={[compileResult, setCompileResult]}
        />
      )}
    </div>
  );
}

export default App;
