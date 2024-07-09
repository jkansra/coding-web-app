export default function compareOutputs(codeOutput, expectedOutput) {
  // Remove trailing newline from code response stdout
  codeOutput = codeOutput.slice(0, -1);

  // Split both strings into arrays based on newline characters
  const lines1 = codeOutput?.split("\n");
  const lines2 = expectedOutput?.split("\n");

  console.log(lines1, lines2);

  // Check if lengths are equal (unequal lengths indicate mismatch)
  // if (lines1.length !== lines2.length) {
  //   return new Array(Math.max(lines1.length, lines2.length)).fill(false);
  // }

  // Compare each corresponding element using strict equality (===)
  // Compare each element using strict equality and create object
  return lines1?.map((line1, index) => ({
    codeOutput: line1,
    expectedOutput: lines2[index],
    result: line1 === lines2[index],
  }));
}
