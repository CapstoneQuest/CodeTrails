/* eslint-disable react/prop-types */
import { Editor } from "@monaco-editor/react";
import { useEffect, useRef, useState } from "react";

function CodeEditor({
  theme,
  fontSize,
  fontLigatures,
  showMinimap,
  activePanel,
  sourceCode,
  currentLine,
}) {
  const editorRef = useRef(null);

  const [editorValue, setEditorValue] = sourceCode;

  const [decorationIds, setDecorationIds] = useState([]);

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

  useEffect(() => {
    const updateGlyph = (line) => {
      if (editorRef.current) {
        const newDecorations = [
          {
            range: new window.monaco.Range(line, 1, line, 1),
            options: {
              isWholeLine: false,
              glyphMarginClassName: "glyph-icon",
              glyphMarginHoverMessage: { value: "Next line to execute" },
            },
          },
        ];

        const newDecorationIds = editorRef.current.deltaDecorations(
          decorationIds,
          newDecorations,
        );
        setDecorationIds(newDecorationIds);
      }
    };

    if (currentLine !== null) {
      updateGlyph(currentLine);
    }
  }, [currentLine, decorationIds]);

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
          lineNumbersMinChars: 3,
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
