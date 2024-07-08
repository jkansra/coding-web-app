import { NextResponse } from "next/server";
import { supportedLanguages } from "@/app/utils/constants";

export async function GET() {
  try {
    const response = await fetch("https://glot.io/api/run");
    const data = await response.json();
    const subsetLanguages = supportedLanguages.filter((supportedLanguage) =>
      data.some((language) => language.name === supportedLanguage.name)
    );

    return NextResponse.json(subsetLanguages);
  } catch (error) {
    console.error("Error fetching data from Glot.io API:", error);
  }
}
