import { NextResponse } from "next/server";

function capitalizeFirstLetter(data) {
  return data.map((item) => ({
    ...item,
    name: item.name.charAt(0).toUpperCase() + item.name.slice(1),
  }));
}

export async function GET() {
  try {
    const response = await fetch("https://glot.io/api/run");
    const data = await response.json();
    const capitalizedData = capitalizeFirstLetter(data);

    return NextResponse.json(capitalizedData);
  } catch (error) {
    console.error("Error fetching data from Glot.io API:", error);
  }
}
