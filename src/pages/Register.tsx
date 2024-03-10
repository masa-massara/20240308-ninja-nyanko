import { useState } from "react";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth, db } from "../context/firebase";
import { doc, getDoc, setDoc } from "firebase/firestore";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import Voice from "../components/common/Voice";
import { FirebaseError } from "firebase/app";

const Register = () => {
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const username = formData.get("username") as string;
    const email = formData.get("email") as string;
    const password = formData.get("password") as string;
    const position = formData.get("position-select-button") as string;
    console.log(username);
    console.log(position);

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
        position,
      });

      const userId = res.user.uid;

      const docRef = doc(db, "users", userId);
      const docSnap = await getDoc(docRef);

      if (!docSnap.exists()) {
        return;
      }

      const userInfo = docSnap.data();

      if (userInfo.position == "company") {
        navigate("/company");
      } else {
        navigate("/arbeit");
      }
    } catch (error) {
      if (error instanceof FirebaseError) {
        let message = '登録中にエラーが発生しました。しばらくしてから再試行してください。';
        switch (error.code) {
          case 'auth/email-already-in-use':
            message = 'このメールアドレスは既に使用されています。';
            break;
          case 'auth/weak-password':
            message = 'パスワードが弱すぎます。もっと複雑なパスワードを設定してください。';
            break;
        }
        setErrorMessage(message);
      } else {
        // Firebaseのエラーではない場合の処理
        console.error('エラーが発生しました:', error);
        setErrorMessage('予期せぬエラーが発生しました。');
      }
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
          <p>あなたの役職は？</p>
          <input
            type="radio"
            name="position-select-button"
            value="company"
            checked
          ></input>
          <label>社員</label>
          <input
            type="radio"
            name="position-select-button"
            value="arbeit"
          ></input>
          <label>アルバイト</label>

          <button>Sign up</button>
          {errorMessage && <span className="error">{errorMessage}</span>}
        </form>
        <p>
          Already have an account?
          <span className="login">
            <Link to="/login">ログイン</Link>
          </span>
        </p>
        <Voice></Voice>
      </div>
    </div>
  );
};

export default Register;
