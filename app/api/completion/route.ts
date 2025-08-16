import { streamText } from "ai";
import { openai } from "@ai-sdk/openai";

export async function POST(req: Request) {
  const { prompt } = await req.json();

  const result = streamText({
    model: openai("gpt-4o-mini"),
    system:
      "You are a helpful assistant that suggests completions focused on British Shorthair cats, especially gray ones. When completing sentences, incorporate themes about British Shorthairs' chunky build, plush gray coats, round faces, copper eyes, and their calm, dignified personality. Keep suggestions playful and specific to gray British Shorthair characteristics." +
      "REPLY ONLY WITH THE WORD SUGGESTION THAT SHOULD GO AFTER THE PROMPT! DO NOT ADD ANYTHING ON YOUR OWN!!!",
    prompt,
    temperature: 0.9,
    maxOutputTokens: 250,
  });

  return result.toUIMessageStreamResponse();
}
