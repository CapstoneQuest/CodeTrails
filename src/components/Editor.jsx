/* eslint-disable react/prop-types */
import { Editor } from "@monaco-editor/react";
import { useEffect, useRef } from "react";

function CodeEditor({
  theme,
  fontSize,
  fontLigatures,
  showMinimap,
  activePanel,
  sourceCode,
}) {
  const editorRef = useRef(null);

  const [editorValue, setEditorValue] = sourceCode;

  function handleEditorDidMount(editor) {
    editorRef.current = editor;
    editor.getModel().setValue(editorValue);
  }

  function handleEditorOnChange(value) {
    setEditorValue(value);
  }

  useEffect(() => {
    if (editorRef.current) {
      editorRef.current.updateOptions({
        theme,
        fontSize,
        fontLigatures,
        minimap: { enabled: showMinimap },
      });
    }
  }, [theme, fontSize, fontLigatures, showMinimap]);

  return (
    <div
      className={`${activePanel === "output" ? "h-1/2 w-full" : activePanel === "render" ? "h-full w-2/5" : "size-full"} flex-shrink-1 border-b border-b-light-platinum dark:border-b-dark-charcoal`}
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
