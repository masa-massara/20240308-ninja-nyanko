import React, { useState } from "react";
import { sendOpenAIChatRequest } from "./context/OpenAIChatAPI";
import AddPosition from "./pages/AddPosition";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

export const App: React.FC = () => {
  const [response, setResponse] = useState<string | null>(null);

  const handleSendMessage = async () => {
    const result = await sendOpenAIChatRequest([
      { role: "user", content: "Say this is a test" },
    ]);
    if (result.error) {
      console.error("API error:", result.details);
      setResponse("Error: " + result.error);
    } else {
      console.log("API response:", result);
      setResponse(JSON.stringify(result, null, 2));
    }
  };

  return (
    <Router>
      <div>
        <button onClick={handleSendMessage}>Send Message</button>
        <pre>{response}</pre>
        <Routes>
          <Route path="/addposition" element={<AddPosition />} />
        </Routes>
      </div>
    </Router>
  );
};
