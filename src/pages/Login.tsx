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
        navigate("/company");
      } else {
        navigate("/arbeit");
      }
    } catch (error) {
      setErr(true);
    }
  };
  return (
    <div className="div_bg_gradient">
      <div className="vertical-middle">
        <div className="formContainer">
          <div className="formWrapper">
            <h1 className="title">ログイン</h1>

           
            <div className="textarea_input">
              <form onSubmit={handleSubmit} className="form_input">
                <input type="email" placeholder="Email" name="email" className="small" />
                <input type="password" placeholder="Password" name="password" className="small" />
                <button className="button_login">ログインする</button>
                {err && <span className="error_message">エラーが発生しました</span>}
              </form>
            </div>
            <p className="p_white">アカウントを持っていませんか？ <Link to={"/register"} className="link_decoration">登録</Link></p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
