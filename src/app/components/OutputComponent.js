"use client";
import React, { useContext } from "react";
import { CodeContext } from "../utils/CodeContext";

// Component broken into header, section and footer
// Collapse each section for easy review
const OutputComponent = () => {
  const { codeContextData } = useContext(CodeContext);

  const {
    codeOutput: { error, stderr, stdout, message },
    testCasesResult,
  } = codeContextData;
  console.log("testCasesResult", testCasesResult);

  return (
    <div className="bg-neutral-800 rounded-lg border border-gray-100 border-opacity-10 flex-grow h-[20vh]">
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

      <section className="h-[24vh] overflow-y-auto">
        {(stdout || stderr || error || message) &&
          testCasesResult?.length === 0 && (
            <div className="bg-neutral-900 text-white p-4">
              <div className="mb-6">
                <pre className="text-sm whitespace-pre-line">
                  Your Code Output: <br />
                  {stdout || stderr || error || message}
                </pre>
              </div>
            </div>
          )}
        {!(stdout || stderr || error || message) &&
          testCasesResult?.length === 0 && (
            <div className="text-center items-center justify-center text-customLightBlue text-sm">
              You must run your code first and log something! <br />{" "}
              <b>Note:</b> Remove log statements before running test cases.
            </div>
          )}

        {testCasesResult?.length > 0 && (
          <div className="bg-neutral-900 text-white p-4">
            <div className="mb-6">
              <div className="flex flex-col">
                <div className="flex items-center border-b border-gray-200 py-2 font-bold">
                  <div className="text-xs w-1/3">Your Output</div>
                  <div className="text-xs w-1/3">Expected Output</div>
                  <div className="text-xs text-purple-500 w-1/3 text-center">
                    Result
                  </div>
                </div>

                {testCasesResult?.map((testCaseResult, index) => (
                  <div
                    key={index}
                    className={`flex items-center py-2 ${
                      index % 2 === 0 ? "bg-neutral-800" : ""
                    }`}
                  >
                    <pre className="text-xs w-1/3">
                      {testCaseResult?.codeOutput}
                    </pre>
                    <pre className="text-xs w-1/3">
                      {testCaseResult?.expectedOutput}
                    </pre>
                    <div className="flex justify-center w-1/3">
                      {testCaseResult?.result ? (
                        <svg
                          className="w-6 h-6 text-green-500"
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
                            d="M8.5 11.5 11 14l4-4m6 2a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                          />
                        </svg>
                      ) : (
                        <svg
                          className="w-6 h-6 text-red-500"
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
                            d="m15 9-6 6m0-6 6 6m6-3a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                          />
                        </svg>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </section>
    </div>
  );
};

export default OutputComponent;
