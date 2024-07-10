import * as React from "react";
import Link from "next/link";
import AppHeader from "./components/AppHeader";
import fetchData from "./utils/fetchData";

export default function LandingPage() {
  // query for all problems
  const API_URL = process.env.API_URL;
  const problemsList = React.use(
    fetchData(`${API_URL}/api/problems-list`, {
      cache: "no-store",
    })
  );

  return (
    <>
      <AppHeader />
      <div className="mx-auto my-8 w-1/2 h-[40vh] overflow-y-auto bg-neutral-900 p-4 rounded-xl border border-gray-100 border-opacity-10">
        <ol className="text-sm flex-none overflow-auto list-decimal list-inside">
          {problemsList?.map((problem, index) => (
            <Link href={`/${problem?.route}`} key={problem._id}>
              <li className="p-4 flex justify-between items-center hover:bg-neutral-800">
                <span>
                  {index + 1}. {problem.description.title}
                </span>
                <span className="text-cyan-500">{problem.difficulty}</span>
              </li>
            </Link>
          ))}
        </ol>
      </div>
    </>
  );
}
