import { MongoClient } from "mongodb";
import { NextResponse } from "next/server";

export async function GET() {
  // Replace the uri string with your connection string.
  const uri = process.env.MONGODB_URI;

  const client = new MongoClient(uri);

  try {
    const database = client.db("coding-app");
    const problems = database.collection("problems");

    // Fetch all problems
    const problem = await problems.find({}).toArray();

    return NextResponse.json(problem);
  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}
