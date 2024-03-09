import Mic from "../../images/Mic.svg";
import Stop from "../../images/Stop.svg";

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
  // コメントで次の行を無視するようにする
  /* eslint @typescript-eslint/no-explicit-any: 0 */
  const recognition =
    new (window as any).webkitSpeechRecognition() ||
    new (window as any).SpeechRecognition();

  const handleVoice = () => {
    recognition.lang = "ja-JP"; // 言語を日本語に設定
    recognition.interimResults = true; // 途中結果を取得するかどうか
    recognition.continuous = true; // 連続的に音声を取得するかどうか

    recognition.onresult = (event: ISpeechRecognitionEvent) => {
      // あればtrueなければfalse
      if (event.results[0] && event.results[0][0]) {
        console.log(event.results[0][0].transcript); // 実際の音声テキスト
        // !event.results[0][0]の時
      } else if (event.results[0] && !event.results[0][0]) {
        console.log("event.results[0][0]がない");
      } else {
        console.log("何もない");
      }
      console.log(event.results[0].isFinal); // 発言が終了したかどうか
    };

    recognition.onerror = () => {
      console.error("Speech recognition error"); // エラーハンドリング
    };

    recognition.start();
  };

  const handleVoiceStop = () => {
    recognition.stop();

  };

  return (
    <div>
      <button onClick={handleVoice}>
        <img src={Mic} alt="マイクアイコン" />
      </button>
      <button onClick={handleVoiceStop}>
        <img src={Stop} alt="ストップアイコン" />
      </button>
    </div>
  );
};

export default Voice;
