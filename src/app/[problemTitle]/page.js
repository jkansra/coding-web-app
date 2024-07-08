import * as React from "react";
import ProblemDescription from "../components/ProblemDescription";
import MonacoEditor from "../components/Monaco/MonacoEditor";
import { CodeProvider } from "../utils/CodeContext";
import ProblemPageHeader from "../components/ProblemPageHeader";

export default function ProblemPage({ params }) {
  const { problemTitle } = params;

  return (
    <CodeProvider>
      <ProblemPageHeader />
      {/* <p>{problemTitle}</p> */}
      <div className="flex justify-between gap-1">
        <ProblemDescription />
        <MonacoEditor />
      </div>
    </CodeProvider>
  );
}
