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
      <div className="flex flex-1 min-h-0 py-8">
        <ol className="text-sm flex-none overflow-auto list-decimal list-inside">
          {problemsList?.map((problem) => (
            <li className="pb-6" key={problem._id}>
              <Link href={`/${problem?.route}`}>
                {problem.description.title}
              </Link>
            </li>
          ))}
        </ol>
      </div>
    </>
  );
}
