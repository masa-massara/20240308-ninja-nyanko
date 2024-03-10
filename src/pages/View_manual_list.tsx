import {
  Firestore,
  QueryDocumentSnapshot,
  SnapshotOptions,
  collection,
  doc,
  getDoc,
  getDocs,
} from "firebase/firestore";

import Button_small_blue from "../components/common/Button_small_blue";
import Button_small_yellow from "../components/common/Button_small_yellow";
import DefaultButton_red from "../components/common/DefaultButton_red";
import Header from "../components/common/Header";
import Tabs_manual_list from "../components/common/Tabs_manual_list";
import { auth, db } from "../context/firebase";
import { Manual } from "../types/types";
import { useEffect, useState } from "react";

const uid = "fwxQrbCqLYRMPWSKRESz2tUWGvP2";

const manualConverter = {
  toFirestore: (manual: Manual) => {
    return {
      position: manual.position,
      title: manual.title,
      task: manual.task,
    };
  },
  fromFirestore: (
    snapshot: QueryDocumentSnapshot,
    options: SnapshotOptions
  ) => {
    const data = snapshot.data(options);
    const manual: Manual = {
      position: data.position,
      title: data.title,
      task: data.task,
    };
    return manual;
  },
};

const View_manual_list = () => {
  const [allTasks, setAllTasks] = useState<Manual[]>([]);
  const [judgePosition, setJudgePosition] = useState("");
  const [positons, setPositiosn] = useState<(string | undefined)[]>([]);

  // 結果を格納する Map構造を定義する
  const positionMap = new Map<string, Array<{ task: string; title: string }>>();

  /* ↓ もしかするとこっちのコードの方が単純になるかも
  for (const taskObject of allTasks) {
    if (positionMap.has(taskObject.position)) {
      // キーが存在する場合、値の配列を取得して新しい値を追加
      positionMap.get(taskObject.position)!.push(taskObject);
    } else {
      // キーが存在しない場合、新しい配列を作成して初期値として値を追加
      map.set(taskObject.position, [taskObject]);
    }
  }
  */

  for (const taskObject of allTasks) {
    const tasObjectArray = positionMap.get(taskObject.position);
    // すでに一回Keyが入っている場合
    if (tasObjectArray) {
      // 既存のTaskObject配列に追加して
      tasObjectArray.push(taskObject);
      // 再挿入
      positionMap.set(taskObject.position, tasObjectArray);
    } else {
      // はじめての追加
      positionMap.set(taskObject.position, [taskObject]);
    }
  }

  useEffect(() => {
    if (uid) {
      const f = async () => {
        const tasks = await fetchTasks(db, uid);

        console.log(tasks);
        
        

        setAllTasks(
            tasks
        );
      };
      f();
    }

  }, []);

  const fetchTasks = async (db: Firestore, uid: string): Promise<Manual[]> => {
    const tasksCollectionRef = collection(
      db,
      `users/${uid}/manual`
    ).withConverter(manualConverter);
    const querySnapshot = await getDocs(tasksCollectionRef);
    const tasks = querySnapshot.docs.map((m) => {
      return m.data();
    });
    setAllTasks(tasks);
    console.log(tasks);

    return tasks;
  };
  const keyPanelComponents: React.ReactNode[] = [];
  for (const key of positionMap.keys()) {
    keyPanelComponents.push(<div>{key}</div>);
  }

  const fetchUsers = async (db: Firestore, uid: string): Promise<Manual[]> => {
    const tasksCollectionRef = collection(db, `users`).withConverter(
      manualConverter
    );
    const querySnapshot = await getDocs(tasksCollectionRef);
    const tasks = querySnapshot.docs.map((m) => {
      return m.data();
    });
    setAllTasks(tasks);
    return tasks;
  };

  return (
    <>
      <div className="header_title">
        <Header />
        <Button_small_blue />
      </div>
      <DefaultButton_red />
      {keyPanelComponents.map((component) => {
        return component;
      })}
      <Tabs_manual_list positionMap={positionMap} />
      <Button_small_yellow />
    </>
  );
};

export default View_manual_list;
