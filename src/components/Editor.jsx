/* eslint-disable react/prop-types */
import { Editor } from "@monaco-editor/react";
import { useEffect, useRef } from "react";

function CodeEditor({ theme, fontSize, fontLigatures, showMinimap }) {
  const editorRef = useRef(null);

  function handleEditorDidMount(editor) {
    editorRef.current = editor;
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
    <Editor
      width="100%"
      height="100vh"
      defaultLanguage="cpp"
      theme="vs"
      onMount={handleEditorDidMount}
      options={{
        fontSize: 14,
        fontFamily: "monospace",
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
  );
}

export default CodeEditor;
