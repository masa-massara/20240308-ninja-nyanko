import { OpenAIChat } from "../context/openAI"


export function Manual() {

  const sendMessage = async () => {
    const response = await OpenAIChat([
      {
        role: "user",
        content: "What is the meaning of life?"
      }
    ])
    console.log(response.choices);
  }
  return (
    <div>
      <button onClick={sendMessage}>
        Manual
      </button>
    </div>
  )
}