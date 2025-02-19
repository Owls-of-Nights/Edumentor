import { NextResponse } from "next/server"
import { MongoClient } from "mongodb"

const client = new MongoClient(process.env.MONGODB_URI!)

export async function POST(request: Request) {
  const { email, password } = await request.json()
  try {
    await client.connect()
    const db = client.db("yourdbname") // update with your database name
    const user = await db.collection("users").findOne({ email, password })
    if (!user) {
      return NextResponse.json({ error: "Invalid credentials" }, { status: 401 })
    }
    return NextResponse.json({ message: "Login successful" })
  } catch (error) {
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 })
  } finally {
    await client.close()
  }
}
