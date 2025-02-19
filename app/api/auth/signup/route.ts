import { NextResponse } from "next/server"
import { MongoClient } from "mongodb"

const client = new MongoClient(process.env.MONGODB_URI!)

export async function POST(request: Request) {
  const { name, email, password, role } = await request.json()
  try {
    await client.connect()
    const db = client.db("yourdbname") // update with your database name
    const existingUser = await db.collection("users").findOne({ email })
    if (existingUser) {
      return NextResponse.json({ error: "User already exists" }, { status: 400 })
    }
    const result = await db.collection("users").insertOne({ name, email, password, role })
    return NextResponse.json({ message: "Sign up successful", userId: result.insertedId })
  } catch (error) {
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 })
  } finally {
    await client.close()
  }
}
