import React, { useContext, useState } from "react";
import useLanguageListData from "@/app/utils/useLanguageListData";
import { CodeContext } from "@/app/utils/CodeContext";

// Monaco header component consist of language dropdown along with
// format and reset action buttons
const MonacoHeader = ({ formatCode, resetCode }) => {
  const { isLoading, isError, error, languageListData } = useLanguageListData();
  const [isOpen, setIsOpen] = useState(false);
  const { codeData, setCodeData } = useContext(CodeContext);
  const [selectedLanguage, setSelectedLanguage] = useState(codeData.language);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const selectLanguage = (language) => {
    setSelectedLanguage(language);
    setIsOpen(false); // Close dropdown after selection
    setCodeData((prevData) => ({
      ...prevData,
      language: language,
    }));
  };

  if (isLoading) {
    return <p className="text-center">Loading</p>;
  }

  if (isError) {
    return <h1 className="no-data">{error?.message || "No Language Data"}</h1>;
  }

  return (
    <>
      <header className="p-2 text-sm flex justify-between items-center">
        <div className="flex">
          <svg
            className="w-5 h-5 text-green-500 mr-1"
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
              d="m8 8-4 4 4 4m8 0 4-4-4-4m-2-3-4 14"
            />
          </svg>
          <span>Code</span>
        </div>
      </header>

      {/* language dropdown */}
      <div className="flex justify-between items-center bg-neutral-900 text-neutral-400 pl-1">
        <div className="relative inline-block text-left">
          <button
            type="button"
            className="rounded items-center whitespace-nowrap focus:outline-none inline-flex bg-transparent dark:bg-dark-transparent text-text-secondary dark:text-text-secondary active:bg-transparent dark:active:bg-dark-transparent hover:bg-neutral-800 px-1.5 py-0.5 text-sm font-normal group"
            onClick={toggleDropdown}
          >
            {selectedLanguage}
            <div className="relative text-[12px] leading-[normal] p-0.5 before:block before:h-3 before:w-3 ml-1 text-gray-600 dark:text-gray-600">
              <svg
                aria-hidden="true"
                focusable="false"
                data-prefix="far"
                data-icon="chevron-down"
                className={`svg-inline--fa fa-chevron-down absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 ${
                  isOpen ? "rotate-180" : ""
                }`}
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
              >
                <path
                  fill="currentColor"
                  d="M239 401c9.4 9.4 24.6 9.4 33.9 0L465 209c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0l-175 175L81 175c-9.4-9.4-24.6-9.4-33.9 0s-9.4 24.6 0 33.9L239 401z"
                />
              </svg>
            </div>
          </button>

          {isOpen && (
            <div className="origin-top-right absolute left-0 mt-1 z-50 shadow-lg bg-neutral-800 rounded-md border border-gray-100 border-opacity-10 w-36 overflow-y-auto h-48">
              {languageListData?.map((language) => (
                <button
                  onClick={() => selectLanguage(language?.name)}
                  key={language?.name}
                  className="block px-2 py-1.5 text-sm dark:text-gray-300 dark:hover:bg-neutral-600 w-full text-left"
                >
                  {language?.name}
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Format and Reset Buttons */}
        <div className="flex p-1">
          <button
            type="button"
            className="p-0.5 text-xs font-medium text-gray-400 rounded dark:hover:bg-gray-700"
            title="Format Code"
            onClick={() => formatCode()}
          >
            <svg
              className="w-5 h-5 mr-1"
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
                strokeWidth="1.3"
                d="M6 6h12M6 18h12m-5-8h5m-5 4h5M6 9v6l3.5-3L6 9Z"
              />
            </svg>
          </button>

          <button
            type="button"
            className="p-0.5 text-xs font-medium text-gray-400 rounded dark:hover:bg-gray-700"
            title="Reset to default code definition"
            onClick={() => resetCode()}
          >
            <svg
              className="w-4 h-4 mr-1"
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
                d="M17.651 7.65a7.131 7.131 0 0 0-12.68 3.15M18.001 4v4h-4m-7.652 8.35a7.13 7.13 0 0 0 12.68-3.15M6 20v-4h4"
              />
            </svg>
          </button>
        </div>
      </div>
    </>
  );
};

export default MonacoHeader;
