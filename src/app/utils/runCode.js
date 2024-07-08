const runCode = async (req) => {
  try {
    const response = await fetch(`/api/run-code`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(req),
    });

    if (!response.ok) {
      throw new Error("Network response was not ok");
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error posting data:", error);
  }
};

export default runCode;
