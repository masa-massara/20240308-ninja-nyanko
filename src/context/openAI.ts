import OpenAI from "openai";

const openai = new OpenAI({
  apiKey: "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", //envのエラー直す
  dangerouslyAllowBrowser: true, //後でけす
});

export type Message = {
  role: "user" | "assistant";
  content: string;
};

export async function OpenAIChat(messages: Message[]) {
  return await openai.chat.completions.create({
    messages: messages,
    model: "gpt-3.5-turbo",
  });
}
