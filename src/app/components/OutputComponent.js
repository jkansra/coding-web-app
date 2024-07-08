"use client";
import React, { useContext } from "react";
import { CodeContext } from "../utils/CodeContext";

// Component broken into header, section and footer
// Collapse each section for easy review
const OutputComponent = () => {
  const { codeContextData } = useContext(CodeContext);

  if (!codeContextData.codeOutput) return;

  const { error, stderr, stdout, message } = codeContextData.codeOutput;

  return (
    <>
      <header className="p-2 text-sm flex">
        <svg
          className="w-5 h-5 text-purple-500 mr-1"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          fill="none"
          viewBox="0 0 24 24"
        >
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M12 15v5m-3 0h6M4 11h16M5 15h14a1 1 0 0 0 1-1V5a1 1 0 0 0-1-1H5a1 1 0 0 0-1 1v9a1 1 0 0 0 1 1Z"
          />
        </svg>

        <span>Output</span>
      </header>

      <section className="h-[30vh] overflow-y-auto">
        <div className="bg-neutral-900 text-white p-8">
          <div className="mb-6">
            <pre className="text-sm whitespace-pre-line">
              {stdout || stderr || error || message}
            </pre>
          </div>
        </div>
      </section>
    </>
  );
};

export default OutputComponent;
