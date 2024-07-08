import { MongoClient } from "mongodb";
import { NextResponse } from "next/server";

export async function GET(req, { params }) {
  const { problemTitle } = params;

  const uri = process.env.MONGODB_URI;
  const client = new MongoClient(uri);

  try {
    await client.connect();

    const database = client.db("coding-app");
    const problemsCollection = database.collection("problems");

    // Find the problem based on the route (problemTitle)
    const problem = await problemsCollection.findOne({ route: problemTitle });

    if (!problem) {
      return NextResponse.error(`Problem '${problemTitle}' not found`, 404);
    }

    // Extract description and editorDefaultCode and test cases
    const { description, editorDefaultCode, testCasesData } = problem;

    return NextResponse.json({ description, editorDefaultCode, testCasesData });
  } finally {
    await client.close();
  }
}
