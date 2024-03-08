import { useState } from "react";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth, db } from "../context/firebase";
import { doc, setDoc } from "firebase/firestore";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

const Register = () => {
  const [err, setErr] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const username = formData.get("username") as string;
    const email = formData.get("email") as string;
    const password = formData.get("password") as string;
    console.log(username);
    

    try {
      const res = await createUserWithEmailAndPassword(auth, email, password);

      // ユーザープロファイルを更新
      await updateProfile(res.user, {
        displayName: username,
      });

      // Firestoreにユーザーデータを保存
      await setDoc(doc(db, "users", res.user.uid), {
        uid: res.user.uid,
        displayName: username,
        email,
      });

      navigate("/");
    } catch (error) {
      console.error(error);
      setErr(true);
    }
  };

  return (
    <div className="formContainer">
      <div className="formWrapper">
        <span className="logo"></span>
        <span className="title">登録</span>
        <form onSubmit={handleSubmit}>
          <input name="username" type="text" placeholder="Username" />
          <input name="email" type="email" placeholder="Email" />
          <input name="password" type="password" placeholder="Password" />
          <button>Sign up</button>
          {err && <span>エラーが発生しました</span>}
        </form>
        <p>
          Already have an account?
          <span className="login">
            <Link to="/login">ログイン</Link>
          </span>
        </p>
      </div>
    </div>
  );
};

export default Register;
