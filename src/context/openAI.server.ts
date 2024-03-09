import OpenAI from "openai";
import { Message } from "./type";

const openai = new OpenAI({
  apiKey: (import.meta.env.VITE_OPENAI_API_KEY), 
});

export async function OpenAIChat(messages: Message[]) {
  return await openai.chat.completions.create({
    messages: messages,
    model: "gpt-3.5-turbo",
    response_format: {type: "json_object"}
  });
}
