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
    return { userOutput: "", graderOutput: undefined };
  }

  const { userOutput, graderOutput } = await res.json();
  return { userOutput, graderOutput };
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
