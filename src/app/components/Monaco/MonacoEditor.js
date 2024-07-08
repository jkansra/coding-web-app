"use client";
import React, { useRef, useState, useEffect, useContext } from "react";
import Editor from "@monaco-editor/react";
import MonacoHeader from "./MonacoHeader";
import { CodeContext } from "@/app/utils/CodeContext";

// Monaco code editor component - third party package
const MonacoEditor = () => {
  const editorRef = useRef();
  const { setCodeData } = useContext(CodeContext);
  const [cursorPosition, setCursorPosition] = useState({
    lineNumber: 1,
    column: 1,
  });
  // Pending default code changes
  const defaultCode = `/**
  * @param {number} a
  * @param {number} b
  * @return {number}
  */
 var getSum = function(a, b) {
     
 };`;

  function handleEditorDidMount(editor, monaco) {
    editorRef.current = editor;
  }

  const getLineAndColumn = () => {
    const editorInstance = editorRef.current;
    if (!editorInstance) return;

    setCodeData((prevData) => ({
      ...prevData,
      code: editorInstance.getValue(),
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

    editorInstance.setValue(defaultCode);
  };

  const formatCode = () => {
    editorRef.current["_actions"]
      ?.get("editor.action.formatDocument")
      ["_run"]();
  };

  return (
    <div className="w-1/2 bg-neutral-800 rounded-lg border border-gray-100 border-opacity-10">
      <MonacoHeader formatCode={formatCode} resetCode={resetCode} />

      {/* Editor component */}
      <Editor
        height="76vh"
        defaultLanguage="javascript"
        defaultValue={defaultCode}
        onMount={handleEditorDidMount}
        onChange={getLineAndColumn}
        theme="vs-dark"
        className="p-1"
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
