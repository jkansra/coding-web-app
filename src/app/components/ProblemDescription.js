import React from "react";

// Component broken into header, section and footer
// Collapse each section for easy review
const ProblemDescription = () => {
  return (
    <div className="w-1/2 bg-neutral-800 rounded-lg border border-gray-100 border-opacity-10">
      <header className="p-2 text-sm flex">
        <svg
          className="w-5 h-5 text-cyan-500 mr-1"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            fillRule="evenodd"
            d="M5.617 2.076a1 1 0 0 1 1.09.217L8 3.586l1.293-1.293a1 1 0 0 1 1.414 0L12 3.586l1.293-1.293a1 1 0 0 1 1.414 0L16 3.586l1.293-1.293A1 1 0 0 1 19 3v18a1 1 0 0 1-1.707.707L16 20.414l-1.293 1.293a1 1 0 0 1-1.414 0L12 20.414l-1.293 1.293a1 1 0 0 1-1.414 0L8 20.414l-1.293 1.293A1 1 0 0 1 5 21V3a1 1 0 0 1 .617-.924ZM9 7a1 1 0 0 0 0 2h6a1 1 0 1 0 0-2H9Zm0 4a1 1 0 1 0 0 2h6a1 1 0 1 0 0-2H9Zm0 4a1 1 0 1 0 0 2h6a1 1 0 1 0 0-2H9Z"
            clipRule="evenodd"
          />
        </svg>

        <span>Description</span>
      </header>

      <section className="h-[80vh] overflow-y-auto">
        <div className="bg-neutral-900 text-white p-8">
          <h1 className="text-2xl font-semibold mb-4">Two Sum</h1>
          <div className="mb-6">
            <p className="text-sm">
              Given an array of integers{" "}
              <code className="text-blue-300">nums</code> and an integer{" "}
              <code className="text-blue-300">target</code>, return indices of
              the two numbers such that they add up to{" "}
              <code className="text-blue-300">target</code>.
            </p>
            <p className="text-sm">
              You may assume that each input would have exactly one solution,
              and you may not use the same element twice.
            </p>
            <p className="text-sm">You can return the answer in any order.</p>
          </div>
          <div className="mb-6">
            <h2 className="text-sm font-semibold mb-2">Example 1:</h2>
            <div className="flex">
              <div className="w-1/2 mr-4">
                <h3 className="text-sm font-semibold mb-1">Input:</h3>
                <pre className="text-sm bg-gray-800 rounded p-2">
                  nums = [2, 7, 11, 15], target = 9
                </pre>
              </div>
              <div className="w-1/2">
                <h3 className="text-sm font-semibold mb-1">Output:</h3>
                <pre className="text-sm bg-gray-800 rounded p-2">[0, 1]</pre>
              </div>
            </div>
            <p className="text-sm mt-2">
              Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].
            </p>
          </div>
          <div className="mb-6">
            <h2 className="text-sm font-semibold mb-2">Example 2:</h2>
            <div className="flex">
              <div className="w-1/2 mr-4">
                <h3 className="text-sm font-semibold mb-1">Input:</h3>
                <pre className="text-sm bg-gray-800 rounded p-2">
                  nums = [3, 2, 4], target = 6
                </pre>
              </div>
              <div className="w-1/2">
                <h3 className="text-sm font-semibold mb-1">Output:</h3>
                <pre className="text-sm bg-gray-800 rounded p-2">[1, 2]</pre>
              </div>
            </div>
            <p className="text-sm mt-2">
              Explanation: Because nums[1] + nums[2] == 6, we return [1, 2].
            </p>
          </div>
          <div className="mb-6">
            <h2 className="text-sm font-semibold mb-2">Example 3:</h2>
            <div className="flex">
              <div className="w-1/2 mr-4">
                <h3 className="text-sm font-semibold mb-1">Input:</h3>
                <pre className="text-sm bg-gray-800 rounded p-2">
                  nums = [3, 3], target = 6
                </pre>
              </div>
              <div className="w-1/2">
                <h3 className="text-sm font-semibold mb-1">Output:</h3>
                <pre className="text-sm bg-gray-800 rounded p-2">[0, 1]</pre>
              </div>
            </div>
            <p className="text-sm mt-2">
              Explanation: Because nums[0] + nums[1] == 6, we return [0, 1].
            </p>
          </div>
          <div className="mb-6">
            <h2 className="text-sm font-semibold mb-2">Constraints</h2>
            <ul className="list-disc list-inside text-sm">
              {/* <li>2 <= nums.length <= 10^4</li>
          <li>-10^9 <= nums[i] <= 10^9</li>
          <li>-10^9 <= target <= 10^9</li> */}
              <li>Only one valid answer exists.</li>
            </ul>
          </div>
          <div className="mb-6">
            <h2 className="text-sm font-semibold mb-2">Follow-up</h2>
            <p className="text-sm">
              Can you come up with an algorithm that is less than O(n^2) time
              complexity?
            </p>
          </div>
        </div>
      </section>

      <footer className="text-label-2 text-xs p-3">
        <p>Copyright ©️ 2024 CodingApp All rights reserved</p>
      </footer>
    </div>
  );
};

export default ProblemDescription;
