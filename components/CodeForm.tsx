'use client';

import React from "react";
import { useFormState } from 'react-dom';
import CodeEditor from '@uiw/react-textarea-code-editor';
import {Button} from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import {runCode} from "@/app/actions";

const initialState = { output: '', }

export default function CodeForm() {
  const [state, formAction] = useFormState(runCode, initialState);

  return (
    <form action={formAction} className="h-full overflow-hidden flex flex-col gap-4">
      <div className="rounded-xl p-4 bg-white flex flex-col" style={{ height: "64%" }}>
        <h2 className="text-xl mb-2">Code</h2>

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

        <Button type="submit" className="mt-4">Run Code</Button>
      </div>

      <ScrollArea className="rounded-xl p-4 bg-white h-1/3 overflow-hidden">
        <h2 className="text-xl">Output</h2>
        {state.output &&
          <div className="p-3 bg-gray-100 rounded-lg text-sm my-3">
            <p className="whitespace-pre text-wrap" style={{fontFamily: "Menlo, sans-serif"}}>
              {state.output}
            </p>
          </div>
        }
      </ScrollArea>
    </form>
  );
}