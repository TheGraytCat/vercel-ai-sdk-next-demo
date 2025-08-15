import { google } from "@ai-sdk/google";
import { streamText, convertToModelMessages } from "ai";
import { readFileSync } from "fs";
import { join } from "path";

// Allow streaming responses up to 30 seconds
export const maxDuration = 30;

// Load system prompt from file
const systemPrompt = readFileSync(
  join(process.cwd(), "lib/prompts/system.txt"),
  "utf-8"
);

export async function POST(req: Request) {
  try {
    const { messages } = await req.json();
    console.log("Received messages:", messages);

    const result = streamText({
      model: google("gemini-2.5-flash"),
      system: systemPrompt,
      messages: convertToModelMessages(messages),
    });

    return result.toUIMessageStreamResponse();
  } catch (error) {
    console.error("API route error:", error);
    return new Response(
      JSON.stringify({
        error: "Internal Server Error",
        details: error instanceof Error ? error.message : "Unknown error",
      }),
      {
        status: 500,
        headers: { "Content-Type": "application/json" },
      }
    );
  }
}
