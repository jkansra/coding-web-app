import React from "react";
import Link from "next/link";
import Image from "next/image";

{
  /* Logo and Buttons */
}
const AppHeader = () => {
  return (
    <nav>
      <div className="flex flex-wrap items-center justify-start gap-2">
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
    </nav>
  );
};

export default AppHeader;
