"use server";

export async function runCode(state, formData: FormData) {
  const code = formData.get("code");

  const res = await fetch(`http://localhost:5000/runCode`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ code: code }),
  });

  const output = (await res.json()).output;
  console.log(output);

  return { output: output };
}
