
const Voice = () => {
  const handleVoice = () => {
    const SpeechRecognition = window.webkitSpeechRecognition || window.SpeechRecognition;
    const recognition = new SpeechRecognition();

    recognition.interimResults = true;

    recognition.onresult = (event) => {
      console.log(event.results[0][0].transcript); // 実際の音声テキスト
      console.log(event.results[0].isFinal); // 発言が終了したかどうか
    };

    recognition.onerror = (event) => {
      console.error('Speech recognition error', event.error); // エラーハンドリング
    }

    recognition.start();
  };

  return (
    <div>
      <button onClick={handleVoice}>Start Voice Recognition</button>
    </div>
  );
}

export default Voice;
