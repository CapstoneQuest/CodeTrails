/* eslint-disable react/prop-types */
import { Editor } from "@monaco-editor/react";
import { useEffect, useRef } from "react";

function CodeEditor({
  theme,
  fontSize,
  fontLigatures,
  showMinimap,
  showOutputPanel,
}) {
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
    <div
      className={`${showOutputPanel ? "h-1/2" : "h-full"} flex-shrink-1 border-b border-b-light-platinum dark:border-b-dark-charcoal`}
    >
      <Editor
        width="100%"
        height="100%"
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
    </div>
  );
}

export default CodeEditor;
