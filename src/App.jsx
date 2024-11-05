import { saveAs } from "file-saver";
import { useEffect, useRef, useState } from "react";
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
  const [uploadResult, setUploadResult] = useState({});
  const [traceResult, setTraceResult] = useState({});

  const fileInputRef = useRef(null);

  console.log(sourceCode)

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else if (theme === "light") {
      document.documentElement.classList.remove("dark");
    }

    setSourceCode(uploadResult.source_code);
  }, [theme, uploadResult]);

  function handleCompileRequest() {
    api
      .post("/compile", { sourceCode: sourceCode, stdin: "" })
      .then((response) => {
        setCompileResult(response.data);
        setActivePanel("output");
      })
      .catch((error) => console.error("Error fetching data:", error));
  }

  function handleVisualizeRequest() {
    api
      .post("/generate-trace", { sourceCode: sourceCode })
      .then((response) => {
        setTraceResult(response.data);
        setActivePanel("render");
      })
      .catch((error) => console.error("Error fetching data:", error));
  }

  function handleDownloadRequest() {
    api
      .post("/download", { sourceCode: sourceCode }, { responseType: "blob" })
      .then((response) => saveAs(response.data, "main.cpp"))
      .catch((error) => console.error("Error fetching data:", error));
  }

  function handleUploadRequest() {
    fileInputRef.current.click();
  }

  function uploadFile(event) {
    const file = event.target.files[0];
    if (!file) {
      console.error("No file selected");
    }

    const formData = new FormData();
    formData.append("file", file);

    api
      .post("/upload", formData, {
        headers: { "Content-Type": "multipart/form-data" },
      })
      .then((response) => setUploadResult(response.data))
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
        doUpload={handleUploadRequest}
      />
      <input
        type="file"
        accept=".cpp"
        className="hidden"
        ref={fileInputRef}
        onChange={uploadFile}
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
          sourceCode={[sourceCode, setSourceCode]}
        />
        {activePanel === "output" && (
          <OutputPanel
            closePanel={setActivePanel}
            outputContent={compileResult}
          />
        )}
        {activePanel === "render" && (
          <RenderPanel
            closePanel={setActivePanel}
            traceResult={traceResult.trace}
          />
        )}
      </div>
    </div>
  );
}

export default App;
