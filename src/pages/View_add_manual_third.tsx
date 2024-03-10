import { useContext, useEffect, useState } from "react";
import Button_small_red from "../components/common/Button_small_red";
import Button_small_yellow from "../components/common/Button_small_yellow";
import Component_add_manual from "../components/common/Component_add_manual";
import Div_position from "../components/common/Div_position";
import Header from "../components/common/Header";
import { TasksObject } from "../types/types";
import { db, auth } from "../context/firebase";
import { collection, addDoc } from "firebase/firestore";
import { onAuthStateChanged } from "firebase/auth";
import { PlaceContext } from "../App";
// import { PlaceContext } from "../App";

onAuthStateChanged(auth, (user) => {
  if (!user) {
    return;
  }
  const uid = user.uid;
  console.log(uid);
});

const exampleObject: TasksObject[] = [];

const View_add_manual_third = () => {
  const [GPTresponse, setGPTresponse] = useState<TasksObject[]>();

  const { json } = useContext(PlaceContext);
  const { position } = useContext(PlaceContext);

  useEffect(() => {

    console.log("Object.entries(json)", Object.entries(json));
    // 値を入れた
    setGPTresponse(
      Object.entries<TasksObject>(json).map(([, value]) => {
        return {
          position: value.position,
          title: value.title,
          task: value.task,
        };
      })
    );
  }, [json]);

  console.log("GPTresponse", GPTresponse);

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
                // データをFirestoreに保存
                saveTasksToFirestore(user.uid);
              } else {
                // ユーザーがログアウトした場合、または認証されていない場合
              }
            });
          }}
        />
      </div>
    </>
  );
};

export default View_add_manual_third;
