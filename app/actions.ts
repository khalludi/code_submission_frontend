"use server";

export async function runCode(state, formData: FormData) {
  const testCaseHash = parseTestCaseInput(formData);
  const code = formData.get("code");

  const res = await fetch(`http://localhost:5000/runCode`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ code: code, testCaseHash }),
  });

  if (!res.ok) {
    return { output: "", graderOutput: undefined };
  }

  const jsonResponse = await res.json();
  const output = jsonResponse.output;
  console.log(output);

  const graderOutput = jsonResponse.graderOutput;
  console.log(graderOutput);

  return { output: output, graderOutput: graderOutput };
}

function parseTestCaseInput(formData: FormData) {
  const testcaseHash = {};
  let i = 0;
  while (formData.has(`testcase[${i}][numCourses]`)) {
    testcaseHash[i] = {
      numCourses: formData.get(`testcase[${i}][numCourses]`),
      prerequisites: formData.get(`testcase[${i}][prerequisites]`),
    };

    i++;
  }

  return testcaseHash;
}
