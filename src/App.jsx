import { saveAs } from "file-saver";
import { useEffect, useState } from "react";
import CodeEditor from "./components/Editor";
import Menubar from "./components/Header";
import OutputPanel from "./components/OutputPanel";
import RenderPanel from "./components/RenderPanel";
import api from "./utils/apiConfig";

function App() {
  const [theme, setTheme] = useState("light");

  const [fontsize, setFontSize] = useState(14);
  const [showMinimap, setShowMinimap] = useState(true);
  const [fontLigatures, setFontLigatures] = useState(false);

  const [activePanel, setActivePanel] = useState(null);

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

    setActivePanel("output");
  }

  function handleVisualizeRequest() {
    setActivePanel("render");
  }

  function handleDownloadRequest() {
    api
      .post("/download", { sourceCode: sourceCode }, { responseType: "blob" })
      .then((response) => saveAs(response.data, "main.cpp"))
      .catch((error) => console.error("Error fetching data:", error));
  }

  return (
    <div className="flex h-screen flex-col bg-light-white text-light-spacegray dark:bg-dark-gunmetal dark:text-dark-frenchgray">
      <Menubar
        changeTheme={setTheme}
        setFontSize={setFontSize}
        setFontLigatures={setFontLigatures}
        setMinimap={setShowMinimap}
        doCompile={handleCompileRequest}
        doVisualize={handleVisualizeRequest}
        doDownload={handleDownloadRequest}
      />
      <div
        className={`flex flex-grow ${activePanel === "output" ? "flex-col" : "flex-row"}`}
      >
        <CodeEditor
          theme={theme === "dark" ? "vs-dark" : "vs"}
          fontSize={fontsize}
          fontLigatures={fontLigatures}
          showMinimap={showMinimap}
          activePanel={activePanel}
          setSourceCode={setSourceCode}
        />
        {activePanel === "output" && (
          <OutputPanel
            closePanel={setActivePanel}
            outputContent={[compileResult, setCompileResult]}
          />
        )}
        {activePanel === "render" && (
          <RenderPanel closePanel={setActivePanel} />
        )}
      </div>
    </div>
  );
}

export default App;
