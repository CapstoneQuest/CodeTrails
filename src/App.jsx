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

  const [httpProgress, setHttpProgress] = useState(0);

  const [projectInfo, setProjectInfo] = useState(null);

  const [sourceCode, setSourceCode] = useState("//Welcome to CodeTrails!");
  const [userInputs, setUserInputs] = useState("");
  const [compileResult, setCompileResult] = useState({});
  const [uploadResult, setUploadResult] = useState(null);
  const [traceResult, setTraceResult] = useState({});

  const [disableButton, setDisableButton] = useState(false);
  const [action, setAction] = useState(null);

  const [line, setLine] = useState(null);

  console.log(userInputs);

  const fileInputRef = useRef(null);

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else if (theme === "light") {
      document.documentElement.classList.remove("dark");
    }

    if (httpProgress > 0 && httpProgress < 100) {
      const interval = setInterval(() => {
        setHttpProgress((prevProgress) => Math.min(prevProgress + 0.5, 100));
      }, 300);

      return () => clearInterval(interval);
    }

    if (uploadResult && uploadResult.source_code) {
      setSourceCode(uploadResult.source_code);
    }
  }, [theme, uploadResult, httpProgress]);

  function handleCompileRequest() {
    setHttpProgress(20);
    setDisableButton(true);
    setAction("compiling");
    api
      .post("/compile", { sourceCode: sourceCode, stdin: userInputs })
      .then((response) => {
        setCompileResult(response.data);
        setHttpProgress(100);
        setActivePanel("output");
        setDisableButton(false);
        setAction(null)
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setHttpProgress(0);
        setDisableButton(false);
        setAction(null)
      });
  }

  function handleVisualizeRequest() {
    setHttpProgress(5);
    setDisableButton(true);
    setAction("generatingTrace")
    api
      .post("/generate-trace", { sourceCode: sourceCode })
      .then((response) => {
        if (response.data.status === 1) {
          setCompileResult(response.data);
          setHttpProgress(100);
          setActivePanel("output");
        } else {
          setTraceResult(response.data);
          setHttpProgress(100);
          setActivePanel("render");
        }
        setDisableButton(false);
        setAction(null)
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setHttpProgress(0);
        setDisableButton(false);
        setAction(null)
      });
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

  function handleGetProjectInfo() {
    api
      .get("/about")
      .then((response) => setProjectInfo(response.data))
      .catch((error) => console.log("Error fetching data:", error));
  }

  return (
    <div className="flex h-screen flex-col bg-light-white text-light-spacegray dark:bg-dark-gunmetal dark:text-dark-frenchgray">
      <Menubar
        changeTheme={setTheme}
        setFontSize={setFontSize}
        setFontLigatures={setFontLigatures}
        setMinimap={setShowMinimap}
        progress={httpProgress}
        doCompile={handleCompileRequest}
        doVisualize={handleVisualizeRequest}
        doDownload={handleDownloadRequest}
        doUpload={handleUploadRequest}
        input={userInputs}
        setInput={setUserInputs}
        getInfo={handleGetProjectInfo}
        disableButton={disableButton}
        action={action}
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
          currentLine={line}
        />
        {activePanel === "output" && (
          <OutputPanel
            closePanel={setActivePanel}
            setProgress={setHttpProgress}
            outputContent={compileResult}
          />
        )}
        {activePanel === "render" && (
          <RenderPanel
            closePanel={setActivePanel}
            setProgress={setHttpProgress}
            traceResult={traceResult.trace}
            setCurrentLine={setLine}
          />
        )}
      </div>
    </div>
  );
}

export default App;
