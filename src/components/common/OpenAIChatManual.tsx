'use client'
import { useState } from 'react';
import { OpenAIChat } from "../../context/openAI";
import { Manual } from "../../context/type";

export function OpenAIChatManual() {
  // 状態として応答データを保持
  const [manuals, setManuals] = useState<Manual[]>([]);

  const sendMessage = async () => {
    console.log("Sending prompt...");
    const response = await OpenAIChat([
      {
        role: "system",
        content: "You are a helpful assistant designed to output JSON."
      },
      {
        role: "user",
        content: "唐揚げ店のキッチンのバイトマニュアルを10個、タイトルと内容をセットで出力して?"
      }
    ]);
    console.log("Received response:", response.choices[0].message.content);

    // 応答をパースして状態を更新
    if (response.choices[0].message.content) {
      const content = response.choices[0].message.content || '{}'; // contentがnullでないことを保証
      const parsedResponse = JSON.parse(content);
      if (parsedResponse.manuals && Array.isArray(parsedResponse.manuals)) {
        setManuals(parsedResponse.manuals);
      } else {
        console.error('応答データが期待した形式ではありません。');
        setManuals([]); // 応答データが期待した形式ではない場合、manualsを空の配列でリセット
      }
    } else {
      console.error("Received null content");
      setManuals([]); // contentがnullの場合、manualsを空の配列でリセット
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
