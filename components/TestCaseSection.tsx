import { TEST_CASES } from "@/lib/data";
import CodeText from "@/components/CodeText";
import React, { useState } from "react";
import { TabState } from "@/components/CodeForm";

interface TestCaseProps {
  tab: TabState;
}

export default function TestCaseSection(props: TestCaseProps) {
  const { tab } = props;
  const [testCaseTab, setTestCaseTab] = useState<number>(0);

  return (
    <div className={`flex flex-col ${tab !== "testcase" ? "hidden" : ""}`}>
      <div className="flex flex-row gap-2">
        {TEST_CASES.map((_, index) => {
          return (
            <button
              key={`test_case_${index}`}
              className={`text-sm ${testCaseTab === index ? "font-semibold bg-gray-200 px-2 py-1 rounded-lg" : ""}`}
              onClick={() => setTestCaseTab(index)}
              type="button"
            >
              Case {index + 1}
            </button>
          );
        })}
      </div>

      {TEST_CASES.map((testCase, index) => {
        return (
          <div
            key={`actual_case_${index}`}
            className={testCaseTab !== index ? "hidden" : ""}
          >
            <p className={"text-gray-600 text-xs mt-2"}>numCourses = </p>
            <CodeText className="mt-1">{testCase.numCourses}</CodeText>
            <input
              name={`testcase[${index}][numCourses]`}
              value={testCase.numCourses}
              readOnly
              hidden
            />

            <p className="text-gray-500 text-xs mt-2">prerequisites =</p>
            <CodeText className="mt-1">
              {JSON.stringify(testCase.prerequisites)}
            </CodeText>
            <input
              name={`testcase[${index}][prerequisites]`}
              value={JSON.stringify(testCase.prerequisites)}
              readOnly
              hidden
            />
          </div>
        );
      })}
    </div>
  );
}
