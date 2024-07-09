import * as React from "react";
import ProblemDescription from "../components/ProblemDescription";
import MonacoEditor from "../components/Monaco/MonacoEditor";
import { CodeProvider } from "../utils/CodeContext";
import ProblemPageHeader from "../components/ProblemPageHeader";
import fetchData from "../utils/fetchData";
import OutputComponent from "../components/OutputComponent";

export default function ProblemPage({ params }) {
  const { problemTitle } = params;
  const API_URL = process.env.API_URL;
  const { description, editorDefaultCode, testCasesData } = React.use(
    fetchData(`${API_URL}/api/problems-list/${problemTitle}`, {
      cache: "no-store",
    })
  );

  return (
    <CodeProvider>
      <ProblemPageHeader testCasesData={testCasesData} />

      <div className="flex justify-between gap-1 h-full">
        <ProblemDescription descriptionData={description} />

        <div className="flex flex-col gap-1 w-1/2">
          <MonacoEditor editorDefaultCode={editorDefaultCode} />
          <OutputComponent />
        </div>
      </div>
    </CodeProvider>
  );
}
