import CodeForm from "@/components/CodeForm";

export default function Home() {
  return (
    <main className="grid grid-cols-2 gap-4 h-screen w-full p-4 overflow-hidden">
      <div className="p-10 bg-gray-400 rounded-2xl">
        <h2>Problem Statement</h2>
      </div>

      <CodeForm/>
    </main>
  );
}
