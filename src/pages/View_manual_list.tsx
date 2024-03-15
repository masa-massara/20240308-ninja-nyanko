import {
  Firestore,
  QueryDocumentSnapshot,
  SnapshotOptions,
  collection,
  getDocs,
} from "firebase/firestore";

import Button_small_blue from "../components/common/Button_small_blue";
import Button_small_yellow from "../components/common/Button_small_yellow";
import DefaultButton_red from "../components/common/DefaultButton_red";
import Header from "../components/common/Header";
import Tabs_manual_list from "../components/common/Tabs_manual_list";
import { db } from "../context/firebase";
import { Manual } from "../types/types";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../context/AuthContext";
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
  const currentUser = useContext(AuthContext)
  console.log(currentUser)
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

    const fetchTasks = async (db: Firestore, uid?: string): Promise<Manual[]> => {
      console.log(uid);

      const tasksCollectionRef = collection(
        db,
        `users/${uid}/manual`
      ).withConverter(manualConverter);
      console.log(tasksCollectionRef)
      const querySnapshot = await getDocs(tasksCollectionRef);
      console.log(querySnapshot.docs)
      const tasks = querySnapshot.docs.map((m) => {


        return m.data();

      });
      console.log(tasks);
      return tasks;
    };

    if (currentUser?.uid) {
      const f = async () => {
        // reduce count to request firebase for rate limit
        // if (allTasks.length > 0) return
        const tasks = await fetchTasks(db, currentUser?.uid);

        console.log(tasks);

        setAllTasks(tasks);
      };
      f();
    }
  }, [currentUser?.uid]);

  return (
    <>
      <div className="header_title">
        <Header />
        <Button_small_blue />
      </div>
      <DefaultButton_red />
      {/* {keyPanelComponents.map((component) => {
        return component;
      })} */}
      <Tabs_manual_list positionMap={positionMap} />
      <Button_small_yellow />
    </>
  );
};

export default View_manual_list;
