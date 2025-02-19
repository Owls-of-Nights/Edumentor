import { StreamingTextResponse, LangChainStream } from "ai"
import { generateChatResponse } from "@/lib/chatbot"

export const runtime = "edge"

export async function POST(req: Request) {
  const { messages } = await req.json()

  const { stream, handlers } = LangChainStream()

  const aiStream = await generateChatResponse(messages)

  if (aiStream && aiStream.getReader) {
    const reader = aiStream.getReader()
    try {
      while (true) {
        const { done, value } = await reader.read()
        if (done) break
        const chunk = new TextDecoder().decode(value)
        const lines = chunk.split("\n").filter((line) => line.trim() !== "")
        for (const line of lines) {
          if (line.startsWith("data: ")) {
            const data = line.slice(6)
            if (data === "[DONE]") return
            try {
              const json = JSON.parse(data)
              const token = json.choices[0]?.delta?.content || ""
              handlers.onToken(token)
            } catch (e) {
              console.error("Error parsing JSON:", e)
            }
          }
        }
      }
    } finally {
      reader.releaseLock()
    }
  } else {
    throw new Error("Invalid response from AI service")
  }

  return new StreamingTextResponse(stream)
}

