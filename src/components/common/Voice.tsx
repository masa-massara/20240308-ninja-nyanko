import { useState } from "react";
import Mic from "../../images/Mic.svg?react";
import Stop from "../../images/Stop.svg?react";

interface ISpeechRecognitionEvent {
  isTrusted?: boolean;
  results: {
    isFinal: boolean;
    [key: number]:
      | undefined
      | {
          transcript: string;
        };
  }[];
}

const Voice = () => {
  const [transcript, setTranscript] = useState(""); // 音声認識の結果を保存するための state
  const [isStop, setIsStop] = useState(false); // 音声認識を停止するための state

  // コメントで次の行を無視するようにする
  /* eslint @typescript-eslint/no-explicit-any: 0 */
  const recognition =
    new (window as any).webkitSpeechRecognition() ||
    new (window as any).SpeechRecognition();

  const handleVoice = () => {
    if (isStop) {
      recognition.stop();
      setIsStop(false);
    } else {
      recognition.lang = "ja-JP";
      recognition.interimResults = true;
      recognition.continuous = true;
      recognition.start();
      setIsStop(true);
    }

    recognition.onresult = (event: ISpeechRecognitionEvent) => {
      if (event.results[0] && event.results[0][0]) {
        const currentTranscript = event.results[0][0].transcript;
        console.log(currentTranscript);
        setTranscript(currentTranscript); // 状態を更新
      } else if (event.results[0] && !event.results[0][0]) {
        console.log("event.results[0][0]がない");
      } else {
        console.log("何もない");
      }
    };

    recognition.onerror = () => {
      console.error("Speech recognition error");
      setIsStop(false);
    };
  };

  return (
    <div>
      <button onClick={handleVoice}>{isStop ? <Stop /> : <Mic />}</button>
      <p>{transcript}</p>
    </div>
  );
};

export default Voice;
