"use client";

import React, { useEffect, useState } from "react";
import { useFormState } from "react-dom";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { runCode } from "@/app/actions";
import dynamic from "next/dynamic";
import TestCaseSection from "@/components/TestCaseSection";
import TestResultSection from "@/components/TestResultSection";

const CodeEditor = dynamic(
  () => import("@uiw/react-textarea-code-editor").then((mod) => mod.default),
  { ssr: false },
);

export type RunCodeOutput = {
  userOutput?: Map<string, string>;
  graderOutput?: Map<string, string>;
};
const initialState: RunCodeOutput = {
  userOutput: undefined,
  graderOutput: undefined,
};

export type TabState = "testcase" | "testresult";

export default function CodeForm() {
  const [state, formAction] = useFormState(runCode, initialState);
  const [isLoading, setIsLoading] = useState(false);
  const [tab, setTab] = useState<TabState>("testcase");
  const [code, setCode] = useState(
    "class Solution:" +
      "\n  def solve(self, numCourses, prerequisites):" +
      "\n    # TODO" +
      "\n    return False",
  );

  useEffect(() => {
    setIsLoading(false);
  }, [state]);

  return (
    <form
      action={formAction}
      className="h-full overflow-hidden flex flex-col gap-4"
    >
      <div
        className="rounded-xl p-4 bg-white flex flex-col"
        style={{ height: "64%" }}
      >
        <h2 className="text-xl mb-2">Code</h2>

        <div style={{ overflow: "auto" }} className="h-auto">
          <CodeEditor
            value={code}
            name="code"
            language="py"
            placeholder="Please enter Python code."
            onChange={(evn) => setCode(evn.target.value)}
            padding={15}
            style={{
              backgroundColor: "#f5f5f5",
              fontFamily:
                "ui-monospace,SFMono-Regular,SF Mono,Consolas,Liberation Mono,Menlo,monospace",
            }}
          />
        </div>

        <Button
          type="submit"
          className="mt-4"
          onClick={() => {
            setTab("testresult");
            setIsLoading(true);
          }}
        >
          Run Code
        </Button>
      </div>

      <div className="rounded-xl bg-white h-1/3">
        <div className="flex flex-row gap-2 ps-2 py-1 bg-gray-100 rounded-t-md">
          <span
            onClick={() => setTab("testcase")}
            className="text-xs font-bold"
          >
            Testcase
          </span>
          <span
            onClick={() => setTab("testresult")}
            className="text-xs font-bold"
          >
            Test Result
          </span>
        </div>

        <div className="px-4 pt-1 h-full">
          <TestCaseSection tab={tab} />

          {tab === "testresult" && (
            <ScrollArea className="h-full pb-10">
              {isLoading ? "Loading...." : <TestResultSection state={state} />}
            </ScrollArea>
          )}
        </div>
      </div>
    </form>
  );
}
