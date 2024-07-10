export const compareOutputs = (codeOutput, expectedOutput) => {
  // NOTE - FOR PHP
  if (!codeOutput?.includes("\n")) {
    const updateExpectedOutput = expectedOutput?.split("\n").join("");
    return [
      {
        codeOutput: codeOutput,
        expectedOutput: updateExpectedOutput,
        result: codeOutput === updateExpectedOutput,
      },
    ];
  }

  // NOTE - FOR OTHERS
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
};

export const insertStringBeforeLast = (
  originalString,
  insertionBefore,
  stringToInsert
) => {
  // Find the position before the last character of the first string

  // Find the position of the closing '}' in the first string
  let insertionPoint = originalString.lastIndexOf(insertionBefore);

  // Concatenate the strings accordingly
  let modifiedString =
    originalString.slice(0, insertionPoint) +
    stringToInsert +
    "\n" +
    originalString.slice(insertionPoint);
  console.log(modifiedString);

  return modifiedString;
};

export const updateCodeWithTestCases = (
  languageName,
  userSubmittedCode,
  testCases
) => {
  if (languageName === "java") {
    return insertStringBeforeLast(
      userSubmittedCode,
      "}",
      `public static void main(String[] args) { ${testCases} }`
    );
  } else if (languageName === "c") {
    return insertStringBeforeLast(
      userSubmittedCode,
      "}",
      `int main() { ${testCases?.replace(/\\/g, "")} return 0; }`
    );
  } else if (languageName === "cpp") {
    return `${userSubmittedCode} int main() { ${testCases} return 0; }`;
  } else if (languageName === "php") {
    return insertStringBeforeLast(userSubmittedCode, "?>", testCases);
  } else if (languageName === "go") {
    return `${userSubmittedCode} func main() { ${testCases} }`;
  } else if (languageName === "kotlin") {
    return `${userSubmittedCode} fun main() { ${testCases} }`;
  } else if (languageName === "csharp") {
    return insertStringBeforeLast(
      userSubmittedCode,
      "}",
      `public static void Main(String[] args) { ${testCases} }`
    );
  } else {
    return userSubmittedCode + testCases;
  }
};
