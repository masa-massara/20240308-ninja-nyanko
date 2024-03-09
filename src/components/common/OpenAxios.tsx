import { useEffect, useState } from "react";
import axios from "axios";

export const OpenAxios = () => {
  const [msg, setMsg] = useState("");
  const apiUrl =
    "https://two40308ninjyanya-back-py.onrender.com/api/openai_chat";

  useEffect(() => {
    if (msg !== "") {
      axios
        .post(
          apiUrl,
          {
            messages: [{ role: "user", content: msg }],
          },
          {
            headers: {
              "Content-Type": "application/json",
            },
          }
        )
        .then(function (response) {
          console.log(response);
        })
        .catch(function (error) {
          console.log(error);
        });
    }
  }, [msg]);

  return (
    <div>
      <p>home page.</p>
      <button onClick={() => setMsg("Hello nomurabbit")}>Click me</button>
    </div>
  );
};