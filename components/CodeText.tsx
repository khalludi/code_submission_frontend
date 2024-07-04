import { PropsWithChildren } from "react";

type CodeTextProps = PropsWithChildren & { className };

export default function CodeText(props: CodeTextProps) {
  return (
    <div className={`p-3 bg-gray-100 rounded-lg text-sm ${props.className}`}>
      <p
        className="whitespace-pre text-wrap"
        style={{ fontFamily: "Menlo, sans-serif" }}
      >
        {props.children}
      </p>
    </div>
  );
}
