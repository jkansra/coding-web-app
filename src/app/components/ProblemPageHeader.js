"use client";
import React, { useContext } from "react";
import Link from "next/link";
import { CodeContext } from "../utils/CodeContext";
import runCode from "../utils/runCode";
import Image from "next/image";

{
  /* Logo and Buttons */
}
const ProblemPageHeader = ({ testCasesData }) => {
  const {
    codeContextData: { languageName, userSubmittedCode },
    setCodeContextData,
  } = useContext(CodeContext);

  const handleRunCode = async () => {
    try {
      const runCodeResponse = await runCode({
        language: languageName,
        code: userSubmittedCode,
      });
      setCodeContextData((prevData) => ({
        ...prevData,
        codeOutput: runCodeResponse,
      }));
    } catch (error) {
      console.error("Error running code:", error);
    }
  };

  const handleRunTestCases = async () => {
    try {
      const testCases = testCasesData[languageName]
        ?.map((languageTestCase) => languageTestCase.testCase)
        .join("\n");
      const codeWithTestCases = userSubmittedCode + testCases;
      const runCodeResponse = await runCode({
        language: languageName,
        code: codeWithTestCases,
      });
      setCodeContextData((prevData) => ({
        ...prevData,
        codeOutput: runCodeResponse,
      }));
    } catch (error) {
      console.error("Error running code:", error);
    }
  };

  return (
    <nav>
      <div className="flex flex-wrap items-center justify-between mb-2">
        <div className="flex gap-2">
          <Link href="/" className="flex items-center">
            <Image
              src="https://leetcode.com/_next/static/images/logo-dark-c96c407d175e36c81e236fcfdd682a0b.png"
              width={17}
              height={20}
              alt="Company logo"
            />
          </Link>
          <div className="rounded-md shadow-sm" role="group">
            <Link
              className="inline-flex items-center px-4 py-1 text-sm font-medium text-gray-900 rounded hover:bg-gray-100 focus:z-10 focus:ring-2 dark:text-white dark:hover:text-white dark:hover:bg-gray-700 dark:focus:text-white"
              href="/"
            >
              <svg
                className="w-6 h-6 text-gray-400 mr-1"
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
                  strokeWidth="2"
                  d="M9 8h10M9 12h10M9 16h10M4.99 8H5m-.02 4h.01m0 4H5"
                />
              </svg>
              Problem List
            </Link>
          </div>
        </div>

        {/* Run and Submit buttons will be rendered on the problem page */}

        <div className="rounded-md shadow-sm" role="group">
          <button
            type="button"
            className="inline-flex items-center py-1 px-2 text-sm font-medium text-gray-900 rounded hover:bg-gray-100 focus:z-10 focus:ring-2 dark:text-white dark:hover:text-white dark:hover:bg-gray-700 dark:focus:text-white bg-gray-800"
            onClick={handleRunCode}
          >
            <svg
              className="w-6 h-6 text-gray-400 mr-1"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                fillRule="evenodd"
                d="M8.6 5.2A1 1 0 0 0 7 6v12a1 1 0 0 0 1.6.8l8-6a1 1 0 0 0 0-1.6l-8-6Z"
                clipRule="evenodd"
              />
            </svg>
            Run
          </button>

          <button
            type="button"
            className="inline-flex items-center py-1 px-2 text-sm font-medium text-gray-900 rounded hover:bg-gray-100 focus:z-10 focus:ring-2 dark:text-white dark:hover:text-white dark:hover:bg-gray-700 dark:focus:text-white bg-gray-800"
            onClick={handleRunTestCases}
          >
            <svg
              className="w-6 h-6 text-gray-400 mr-1"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                fillRule="evenodd"
                d="M8.6 5.2A1 1 0 0 0 7 6v12a1 1 0 0 0 1.6.8l8-6a1 1 0 0 0 0-1.6l-8-6Z"
                clipRule="evenodd"
              />
            </svg>
            Run Test Cases
          </button>

          <button
            type="button"
            className="inline-flex items-center py-1 px-2 text-sm font-medium text-green-500 hover:text-green-400 rounded hover:bg-gray-100 focus:z-10 focus:ring-2 dark:hover:bg-gray-700 bg-gray-800 ml-0.5"
          >
            <svg
              className="w-6 h-6 mr-1"
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
                d="M15 17h3a3 3 0 0 0 0-6h-.025a5.56 5.56 0 0 0 .025-.5A5.5 5.5 0 0 0 7.207 9.021C7.137 9.017 7.071 9 7 9a4 4 0 1 0 0 8h2.167M12 19v-9m0 0-2 2m2-2 2 2"
              />
            </svg>
            Submit
          </button>
        </div>
      </div>
    </nav>
  );
};

export default ProblemPageHeader;
