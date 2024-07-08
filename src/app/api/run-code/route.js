import { NextResponse } from "next/server";

export async function POST(req) {
  const data = await req.json();
  const { language, code } = data;
  try {
    const requestOptions = {
      method: "POST",
      headers: {
        Authorization: `Token ${process.env.GLOT_TOKEN}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        files: [{ name: "main.c", content: code }],
      }),
    };
    console.log(language, "in route");

    const response = await fetch(
      `https://glot.io/api/run/${language?.toLowerCase()}/latest`,
      requestOptions
    );
    const data = await response.json();

    return NextResponse.json(data);
  } catch (error) {
    console.error("Error fetching data from Glot.io API:", error);
    return NextResponse.error(error);
  }
}
