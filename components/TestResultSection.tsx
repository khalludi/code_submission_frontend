import { TEST_CASES } from "@/lib/data";
import CodeText from "@/components/CodeText";
import React, { useState } from "react";
import { RunCodeOutput } from "@/components/CodeForm";

interface TestResultSectionProps {
  state: RunCodeOutput;
}

export default function TestResultSection(props: TestResultSectionProps) {
  const { state } = props;
  const [testCaseTab, setTestCaseTab] = useState<number>(0);

  return state.userOutput === undefined ? (
    "Please run code first"
  ) : (
    <>
      <div className="flex flex-row gap-2">
        {TEST_CASES.map((_, index) => {
          return (
            <button
              key={`result_test_case_${index}`}
              className={`text-sm flex flex-row items-center ${testCaseTab === index ? "font-semibold bg-gray-200 px-2 py-1 rounded-lg" : ""}`}
              onClick={() => setTestCaseTab(index)}
              type="button"
            >
              Case {index + 1} <ColoredCircle output1={state.userOutput[index]} output2={state.graderOutput[index]}/>
            </button>
          );
        })}
      </div>

      {TEST_CASES.map((testCase, index) => {
        return (
          <div
            key={`result_actual_case_${index}`}
            className={testCaseTab !== index ? "hidden" : ""}
          >
            <div className="mt-2">
              <small className="text-gray-500 font-semibold">Input</small>
              <CodeText className="mt-1">{testCase.numCourses}</CodeText>
              <CodeText className="mt-1">
                {JSON.stringify(testCase.prerequisites)}
              </CodeText>
            </div>

            <div className="mt-2">
              <small className="text-gray-500 font-semibold">Output</small>
              <CodeText className="mt-1">
                {state.userOutput ? state.userOutput[index] : ""}
              </CodeText>
            </div>

            <div className="mt-2">
              <small className="text-gray-500 font-semibold">Expected</small>
              <CodeText className="mt-1">
              {state.graderOutput ? state.graderOutput[index] : ""}
              </CodeText>
            </div>
          </div>
        );
      })}
    </>
  );
}


function ColoredCircle(props: {output1: String, output2: String}) {
  if (props.output1 === props.output2) {
    return <div className="w-2 h-2 bg-green-400 rounded-full ms-1"/>;
  } else {
    return <div className="w-2 h-2 bg-red-400 rounded-full ms-1"/>
  }
}
