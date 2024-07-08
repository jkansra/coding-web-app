"use client";
import React, { createContext, useState } from "react";

// Code context instance
const CodeContext = createContext();

// Provider component
const CodeProvider = ({ children }) => {
  // state
  const [codeData, setCodeData] = useState({
    language: "Python",
    code: "",
  });

  return (
    <CodeContext.Provider value={{ codeData, setCodeData }}>
      {children}
    </CodeContext.Provider>
  );
};

export { CodeContext, CodeProvider };
