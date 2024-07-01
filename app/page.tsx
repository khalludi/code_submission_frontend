import CodeForm from "@/components/CodeForm";
import ProblemStatement from "@/components/ProblemStatement";

export default function Home() {
  return (
    <main className="grid grid-cols-2 gap-4 h-screen w-full p-4 overflow-hidden">
      <ProblemStatement />

      <CodeForm/>
    </main>
  );
}
