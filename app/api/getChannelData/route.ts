import { MongoClient } from "mongodb";
import { NextResponse } from "next/server";

const uri = `mongodb+srv://serverless:${process.env.MONGO_PWD}@serverlessinstance0.pmg3ogh.mongodb.net/?retryWrites=true&w=majority&appName=ServerlessInstance0`;
const client = new MongoClient(uri);

export async function GET() {
  try {
    await client.connect();
    const database = client.db("YouTubeClone");
    const collection = database.collection("channels");
    const channels = await collection.find({}).toArray();

    return NextResponse.json(channels, { status: 200 });
  } catch (error) {
    console.error("Error:", error);
    return NextResponse.json({ error: "Failed to fetch channels" }, { status: 500 });
  } finally {
    await client.close();
  }
}
