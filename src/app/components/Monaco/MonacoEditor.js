"use client";
import React, { useRef, useState, useEffect, useContext } from "react";
import Editor from "@monaco-editor/react";
import MonacoHeader from "./MonacoHeader";
import { CodeContext } from "@/app/utils/CodeContext";

// Monaco code editor component - third party package
const MonacoEditor = ({ editorDefaultCode }) => {
  const editorRef = useRef();
  const { setCodeContextData, codeContextData } = useContext(CodeContext);
  const [cursorPosition, setCursorPosition] = useState({
    lineNumber: 1,
    column: 1,
  });

  function handleEditorDidMount(editor, monaco) {
    editorRef.current = editor;
  }

  const getLineAndColumn = () => {
    const editorInstance = editorRef.current;
    if (!editorInstance) return;

    setCodeContextData((prevData) => ({
      ...prevData,
      userSubmittedCode: editorInstance.getValue(),
    }));

    // Listen to the onDidChangeCursorPosition event
    editorInstance.onDidChangeCursorPosition((event) => {
      const newPosition = event.position;
      setCursorPosition({
        lineNumber: newPosition.lineNumber,
        column: newPosition.column,
      });
    });
  };

  const resetCode = () => {
    const editorInstance = editorRef.current;
    if (!editorInstance) return;

    editorInstance.setValue(codeContextData.defaultCode);
  };

  const formatCode = async () => {
    const editor = editorRef.current;
    const model = editor.getModel();
    if (model) {
      // Get the action to format the document
      const action = editor.getAction("editor.action.formatDocument");
      if (action) {
        // Run the format action
        await action.run();

        // Retrieve formatted code
        const formattedCode = model.getValue();

        // Update the editor with the formatted code
        editor.setValue(formattedCode);
        setCodeContextData((prevData) => ({
          ...prevData,
          defaultCode: editor.getValue(),
        }));
      }
    }
  };
  return (
    <div className="bg-neutral-800 rounded-lg border border-gray-100 border-opacity-10 flex-grow h-[40vh]">
      <MonacoHeader
        formatCode={formatCode}
        resetCode={resetCode}
        languageListData={editorDefaultCode}
      />

      {/* Editor component */}
      <Editor
        height="40vh"
        language={codeContextData.languageName}
        value={codeContextData.defaultCode?.replace(/\\n/g, "\n")}
        onMount={handleEditorDidMount}
        onChange={getLineAndColumn}
        theme="vs-dark"
      />

      <footer className="text-label-2 dark:text-dark-label-2 text-xs p-3 text-right">
        <p>
          Ln {cursorPosition?.lineNumber}, Col {cursorPosition?.column}
        </p>
      </footer>
    </div>
  );
};

export default MonacoEditor;
