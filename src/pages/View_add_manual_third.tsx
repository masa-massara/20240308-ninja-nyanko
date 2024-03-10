import { useEffect, useState } from "react";
import Button_small_red from "../components/common/Button_small_red";
import Button_small_yellow from "../components/common/Button_small_yellow";
import Component_add_manual from "../components/common/Component_add_manual";
import Div_position from "../components/common/Div_position";
import Header from "../components/common/Header";
import { TasksObject } from "../types/types";

import { db, auth } from "../context/firebase";
import { collection, addDoc } from "firebase/firestore";
import { onAuthStateChanged } from "firebase/auth";

onAuthStateChanged(auth, (user) => {
  if (!user) {
    return;
  }
  const uid = user.uid;
  console.log(uid);
});

const exampleObject: TasksObject[] = [
  {
    position: "レジ",
    title: "金銭管理",
    task: "開店前と閉店後にレジ金庫の現金残高を確認する。勤務中は金種を把握し、お釣りの無い状態にしない。大量の現金はすぐに手元金庫に移す。紙幣の束ならしと硬貨の仕分けをこまめに行う。",
  },
  {
    position: "レジ",
    title: "精算業務",
    task: "レジ操作はていねいに行い、ミスのないよう気をつける。釣り銭は声に出して確認する。お客様にも金額を確認していただく。キャッシュレスの場合も同様に注意が必要。バーコードが読めない場合の対応も心がける。",
  },
  {
    position: "レジ",
    title: "商品知識",
    task: "販売する商品の種類、価格などを把握しておく。新商品やキャンペーン情報も随時確認する。",
  },
  {
    position: "レジ",
    title: "応対マナー",
    task: "あいさつ、言葉遣いなど、お客様への応対に気をつける。トラブル発生時は冷静に対応する。お客様の要望に耳を傾け、適切な対応を心がける。",
  },
  {
    position: "レジ",
    title: "衛生管理",
    task: "レジ周りは常に清潔に保つ。必要に応じて手指の消毒を行う。お金や商品は衛生的に扱う。",
  },
];

const View_add_manual_third = () => {
  const [GPTresponse, setGPTresponse] = useState<TasksObject[]>();
  const [userId, setUserId] = useState<string | null>(null);

  useEffect(() => {
    setGPTresponse(exampleObject);
  }, []);

  //   ポジションはuseContextで取得するように書き換えてね
  const position = "レジ";

  useEffect(() => {
    // exampleObjectの代わりにGPTの変数を入れてね
    setGPTresponse(exampleObject);
  }, []);

  // Firestoreにタスクを保存する関数
  const saveTasksToFirestore = async (uid: string) => {
    const manualsCollectionRef = collection(db, "users", uid, "manuals");

    try {
      exampleObject.forEach(async (task) => {
        await addDoc(manualsCollectionRef, task);
      });
      console.log("タスクがFirestoreに保存されました");
    } catch (error) {
      console.error("Firestoreへの保存に失敗しました:", error);
    }
  };

  return (
    <>
      <Header />
      <Div_position position={position} />
      <Component_add_manual content={GPTresponse} />
      <Button_small_yellow />
      <div className="inset_redbutton">
        <Button_small_red
          clickAct={() => {
            onAuthStateChanged(auth, (user) => {
              if (user) {
                setUserId(user.uid);
                // データをFirestoreに保存
                saveTasksToFirestore(user.uid);
              } else {
                // ユーザーがログアウトした場合、または認証されていない場合
                setUserId(null);
              }
            });
          }}
        />
      </div>
    </>
  );
};

export default View_add_manual_third;
