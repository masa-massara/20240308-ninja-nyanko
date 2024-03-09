//made by masaya

interface Message {
  role: string;
  content: string;
}

interface APIResponse {
  error?: string;
  details?: string;
  [key: string]: unknown; // APIからの応答によって異なる返り値に対応
}

export async function sendOpenAIChatRequest(
  messages: Message[]
): Promise<APIResponse> {
  try {
    const response = await fetch(
      "https://two40308ninjyanya-back-py.onrender.com",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ messages }),
      }
    );

    if (!response.ok) {
      throw new Error("Network response was not ok");
    }

    const data: APIResponse = await response.json();
    return data;
  } catch (error) {
    console.error("Error during API request:", error);
    return { error: "Failed to fetch data" };
  }
}
