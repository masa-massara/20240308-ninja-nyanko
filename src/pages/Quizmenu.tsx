import React from "react";
import CreateQuiz from "../components/staff/CreateQuiz";
const Quizmenu = () => {
      const stage = [
        "店長",
        "ホールスタッフ",
        "キッチンスタッフ",
        "サービススタッフ",
        "その他",
      ];
      return(
      <div className='center_center'>
        <div className='add_manual'>
          <CreateQuiz stage={stage} />
          <div className="defaultButton" >
            <button className="defaultButton_yellow">クイズスタートdayo</button>
          </div>
        </div>
      </div>
      );
      // aaaa
};

export default Quizmenu;