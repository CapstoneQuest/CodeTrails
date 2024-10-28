import { Editor } from "@monaco-editor/react";

function CodeEditor({ theme }) {
  return (
    <Editor
      className="border border-light-platinum dark:border-dark-charcoal"
      width="100%"
      height="100vh"
      defaultLanguage="cpp"
      theme={theme}
    />
  );
}

export default CodeEditor;
