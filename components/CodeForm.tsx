'use client';

import React, {useState} from "react";
import { useFormState } from 'react-dom';
import CodeEditor from '@uiw/react-textarea-code-editor';
import {Button} from "@/components/ui/button";
import {runCode} from "@/app/actions";

const initialState = { output: '', }

export default function CodeForm() {
  const [code, setCode] = useState(
    `function add(a, b) {\n  return a + b;\n}`
  );

  const [state, formAction] = useFormState(runCode, initialState);

  return (
    <form action={formAction}>
      <div className='grid grid-rows-2 gap-4 h-screen'>
        <div className="rounded-2xl p-10 bg-blue-300 flex flex-col gap-4">
          <h2>Code</h2>

          <div style={{ overflow: "auto" }} className="h-auto">
            <CodeEditor
              name="code"
              language="py"
              placeholder="Please enter Python code."
              onChange={(evn) => setCode(evn.target.value)}
              padding={15}
              style={{
                backgroundColor: "#f5f5f5",
                fontFamily: 'ui-monospace,SFMono-Regular,SF Mono,Consolas,Liberation Mono,Menlo,monospace',
              }}
            />
          </div>

          <Button type="submit">Run Code</Button>
        </div>

        <div className="rounded-2xl p-10 bg-amber-50">
          <h2>Output</h2>
          <p>{state.output}</p>
        </div>
      </div>
    </form>
);
}