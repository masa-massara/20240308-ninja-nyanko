import React, { useEffect } from "react";
import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { PlaceContext } from "../App";

const SelectWorks = () => {
  
  const industry = ["飲食店", "サービス業", "小売業", "製造業", "IT業"];
  const [selectedWorks] = useState(industry[0]); // 初期値をリストの最初の要素に設定
  const { setIndustry } = useContext(PlaceContext);
  const { setPlace } = useContext(PlaceContext);

  return (
    <div className="vertical-middle">
      <div className="add_manual">
        <h1>マニュアル作成(1/3)</h1>
        <p>業種を選択してください</p>
        <div className="divSelect">
          <select
            value={selectedWorks} // selectの値をselectedWorksの状態に同期
            onChange={(e) => setPlace(e.target.value)}
            name="works"
            className="select_middle"
          >
            {industry.map((position, idx) => {
              return (
                <option key={idx} value={position}>
                  {position}
                </option>
              );
            })}
          </select>
        </div>

        {/* 選択した作業を表示 */}
        <p>選択された作業: {selectedWorks}</p>

        <div className="textarea_input">
          <form className="form_input">
            <input
              type="text"
              className="small"
              placeholder="入力欄"
              onChange={(e) => setIndustry(e.target.value)}
            ></input>
          </form>
        </div>

        <div className="button_next">
          <Link to="/works/position">
            <button className="next">
              次へ
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SelectWorks;
