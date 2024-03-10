import { Link } from "react-router-dom";
import CreateQuiz from "../components/staff/CreateQuiz";
import CheckModal from "../components/company/CheckModal";
import { useState } from "react";
const Quizmenu = () => {
  const stage = [
    "店長",
    "ホールスタッフ",
    "キッチンスタッフ",
    "サービススタッフ",
    "その他",
  ];
  const [isModalOpen, setIsModalOpen] = useState(false);
  const handleCloseModal = () => {
    setIsModalOpen(false);
  }
  return (
    <div className="divRelative">
      <div className="center_center">
        <div className="add_manual">
          <CreateQuiz stage={stage} />
          <div className="defaultButton">
            <button
              className="defaultButton_yellow"
              onClick={() => {
                setIsModalOpen(true);

              }}
            >
              クイズスタート
            </button>
            {isModalOpen && <CheckModal contents="クイズを開始しますか？" handleCloseModal={handleCloseModal}/>}
          </div>
          <p>
            マニュアルを見たい人は<Link to="/ManualListPart">こちら</Link>
          </p>
          <p>
            個人成績は<Link to="/company/resultlist">こちら</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Quizmenu;
