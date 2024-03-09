'use client'
import { useState } from 'react';
import { OpenAIChat } from "../../context/openAI.server";
import { Manual, OpenAIChatPro } from "../../context/type";

export function OpenAIChatManual(props: OpenAIChatPro) {
  const [manuals, setManuals] = useState<Manual[]>([]);

  const sendMessage = async () => {
    console.log("Sending prompt...");
    const promptContent = `${props.storeType}の${props.section}のバイトマニュアルを5個、タイトルと内容をセットで出力して?`;
    const response = await OpenAIChat([
      {
        role: "system",
        content: "You are a helpful assistant designed to output JSON."
      },
      {
        role: "user",
        content: promptContent
      }
    ]);
    console.log("Received response:", response.choices[0].message.content);

    if (response.choices[0].message.content) {
      const content = response.choices[0].message.content || '{}';
      const parsedResponse = JSON.parse(content);
      if (parsedResponse.manuals && Array.isArray(parsedResponse.manuals)) {
        setManuals(parsedResponse.manuals);
      } else {
        console.error('応答データが期待した形式ではありません。');
        setManuals([]);
      }
    } else {
      console.error("Received null content");
      setManuals([]);
    }
  };

  return (
    <div>
      <button onClick={sendMessage}>
        Manual
      </button>
      <ul>
        {manuals.map((manual, index) => (
          <li key={index}>
            <h3>{manual.title}</h3>
            <p>{manual.content}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
