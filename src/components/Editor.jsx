/* eslint-disable react/prop-types */
import { Editor } from "@monaco-editor/react";
import { useEffect, useRef, useState } from "react";

function CodeEditor({
  theme,
  fontSize,
  fontLigatures,
  showMinimap,
  showOutputPanel,
  showRenderPanel,
  setSourceCode,
}) {
  const editorRef = useRef(null);

  const [editorValue, setEditorValue] = useState("//Welcome to CodeTrails!");

  function handleEditorDidMount(editor) {
    editorRef.current = editor;
  }

  function handleEditorOnChange(value) {
    setEditorValue(value);

    setSourceCode(value);
  }

  useEffect(() => {
    if (editorRef.current) {
      editorRef.current.updateOptions({
        theme: theme,
        fontSize,
        fontLigatures,
        minimap: { enabled: showMinimap },
      });
    }
  }, [theme, fontSize, fontLigatures, showMinimap]);

  return (
    <div
      className={`${showOutputPanel ? "h-1/2" : "h-full"} ${showRenderPanel ? "w-1/2" : "w-full"} flex-shrink-1 border-b border-b-light-platinum dark:border-b-dark-charcoal`}
    >
      <Editor
        width="100%"
        height="100%"
        defaultLanguage="cpp"
        theme="vs"
        value={editorValue}
        onMount={handleEditorDidMount}
        onChange={handleEditorOnChange}
        options={{
          fontSize: 14,
          fontFamily: "Geist Mono",
          fontLigatures: false,
          glyphMargin: true,
          cursorStyle: "line-thin",
          cursorBlinking: "phase",
          mouseWheelZoom: true,
          showUnused: true,
          minimap: {
            enabled: true,
          },
          scrollbar: {
            verticalScrollbarSize: 10,
            horizontalScrollbarSize: 10,
          },
        }}
      />
    </div>
  );
}

export default CodeEditor;
