import { MongoClient } from "mongodb";
import { NextResponse } from "next/server";

export async function GET() {
  // Replace the uri string with your connection string.
  const uri = process.env.MONGODB_URI;

  const client = new MongoClient(uri);

  try {
    await client.connect(); // Connect to MongoDB

    const database = client.db("coding-app");
    const problemsCollection = database.collection("problems");

    // Fetch only title and difficulty fields
    const problems = await problemsCollection
      .find(
        {},
        {
          projection: {
            "description.title": 1,
            difficulty: 1,
            _id: 1,
            route: 1,
          },
        }
      )
      .toArray();

    return NextResponse.json(problems);
  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}
