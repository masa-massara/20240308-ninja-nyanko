import { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth, db } from "../context/firebase";
import { Link } from "react-router-dom";
import { doc, getDoc } from "firebase/firestore";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();

  const [err, setErr] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const email = formData.get("email") as string;
    const password = formData.get("password") as string;
    console.log(email);
    console.log(password);

    try {
      const user = await signInWithEmailAndPassword(auth, email, password);
      const userId = user.user.uid;

      const docRef = doc(db, "users", userId);
      const docSnap = await getDoc(docRef);

      if (!docSnap.exists()) {
        return;
      }

      // docSnap.data() will be undefined in this case
      console.log("No such document!");

      const userInfo = docSnap.data();

      if (userInfo.position == "company") {
        navigate("/toppagecompany");
      } else {
        navigate("/toppagearbeit");
      }
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
