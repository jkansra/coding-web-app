"use client";
import React, { createContext, useState } from "react";

// Code context instance
const CodeContext = createContext();

// Provider component
const CodeProvider = ({ children }) => {
  // state
  const [codeContextData, setCodeContextData] = useState({
    languageName: "javascript",
    defaultCode: `/**
    * @param {number[]} nums
    * @param {number} target
    * @return {number[]}
    */
   var functionName = function(nums, target) {
       
   };`,
    userSubmittedCode: "",
    codeOutput: "",
  });

  return (
    <CodeContext.Provider value={{ codeContextData, setCodeContextData }}>
      {children}
    </CodeContext.Provider>
  );
};

export { CodeContext, CodeProvider };
