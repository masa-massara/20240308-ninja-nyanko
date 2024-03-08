import { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../context/firebase";
import { Link } from "react-router-dom";

const Login = () => {
  const [err, setErr] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const email = formData.get("email") as string;
    const password = formData.get("password") as string;
    console.log(email);
    console.log(password);

    try {
      await signInWithEmailAndPassword(auth, email, password);
    } catch (error) {
      setErr(true);
    }
  };
  return (
    <div className="formContainer">
      <div className="formWrapper">
        <span className="title">登録</span>
        <form onSubmit={handleSubmit}>
          <input type="email" placeholder="Email" name="email" />
          <input type="password" placeholder="Password" name="password" />

          <button>Log in</button>
          {err && <span>エラーが発生しました</span>}
        </form>
        <p>
          アカウントを持っていませんか？ <Link to={"/register"}>登録</Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
