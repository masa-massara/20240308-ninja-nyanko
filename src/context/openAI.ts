import OpenAI from "openai";
import { openAIToken } from "../secret/openAIToken";
import { Message } from "./type";

const openai = new OpenAI({
  apiKey: openAIToken, //envのエラー直す
  dangerouslyAllowBrowser: true, //後でけす
});

export async function OpenAIChat(messages: Message[]) {
  return await openai.chat.completions.create({
    messages: messages,
    model: "gpt-3.5-turbo",
    response_format: {type: "json_object"}
  });
}
