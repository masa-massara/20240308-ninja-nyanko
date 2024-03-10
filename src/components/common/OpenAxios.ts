import axios from "axios";

export const OpenAxios = async (msg: string) => {
  const apiUrl =
    "https://two40308ninjyanya-back-py.onrender.com/api/openai_chat";

  if (msg === "") {
    return; // メッセージが空の場合は何もしない
  }

  try {
    const response = await axios.post(
      apiUrl,
      {
        messages: [{ role: "user", content: msg }],
      },
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    console.log(response.data) // 応答データを返す
  } catch (error) {
    console.log(error);
    throw error; // エラーを呼び出し元に投げる
  }
};
