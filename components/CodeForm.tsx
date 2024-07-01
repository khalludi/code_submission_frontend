'use client';

import React, {useState} from "react";
import { useFormState } from 'react-dom';
import CodeEditor from '@uiw/react-textarea-code-editor';
import {Button} from "@/components/ui/button";
import {runCode} from "@/app/actions";

const initialState = { output: '', }

export default function CodeForm() {
  const [state, formAction] = useFormState(runCode, initialState);

  return (
    <form action={formAction} className="h-full overflow-hidden flex flex-col gap-4">
      <div className="rounded-2xl p-10 bg-blue-300 flex flex-col gap-4" style={{ height: "64%" }}>
        <h2>Code</h2>

        <div style={{ overflow: "auto" }} className="h-auto">
          <CodeEditor
            name="code"
            language="py"
            placeholder="Please enter Python code."
            padding={15}
            style={{
              backgroundColor: "#f5f5f5",
              fontFamily: 'ui-monospace,SFMono-Regular,SF Mono,Consolas,Liberation Mono,Menlo,monospace',
            }}
          />
        </div>

        <Button type="submit">Run Code</Button>
      </div>

      <div className="rounded-2xl p-10 bg-amber-500 h-1/3">
        <h2>Output</h2>
        <p className="whitespace-pre text-wrap">{state.output}</p>
      </div>
    </form>
  );
}