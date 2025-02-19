const baseURL = "https://api.aimlapi.com/v1"
const apiKey = process.env.AIMLAPI_KEY || ""

const systemPrompt = `You are an AI educational assistant for EduMentor, an online learning platform. 
You help students with their questions about courses, learning paths, and technical concepts.
Be friendly, professional, and concise in your responses.
When discussing technical topics, provide clear explanations with examples where appropriate.
If asked about course recommendations, consider the student's interests and skill level.`

export async function generateChatResponse(messages: { role: string; content: string }[]) {
  try {
    const response = await fetch(`${baseURL}/chat/completions`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${apiKey}`,
      },
      body: JSON.stringify({
        messages: [{ role: "system", content: systemPrompt }, ...messages],
        model: "gpt-4",
        stream: true,
      }),
    })

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`)
    }

    return response.body
  } catch (error) {
    console.error("Error in generateChatResponse:", error)
    throw error
  }
}

