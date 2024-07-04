"use server";

export async function runCode(state, formData: FormData) {
  const testCaseHash = parseTestCaseInput(formData);
  console.log(testCaseHash);
  const code = formData.get("code");

  const res = await fetch(`http://localhost:5000/runCode`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ code: code, testCaseHash }),
  });

  console.log(res);
  if (!res.ok) {
    return { output: "" };
  }

  const output = (await res.json()).output;
  console.log(output);

  return { output: output };
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
