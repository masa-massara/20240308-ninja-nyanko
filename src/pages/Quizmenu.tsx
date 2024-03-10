import { Link } from "react-router-dom";
import CreateQuiz from "../components/staff/CreateQuiz";
const Quizmenu = () => {
  const stage = [
    "店長",
    "ホールスタッフ",
    "キッチンスタッフ",
    "サービススタッフ",
    "その他",
  ];
  return (
    <div className="center_center">
      <div className="add_manual">
        <CreateQuiz stage={stage} />
        <div className="defaultButton">
          <button className="defaultButton_yellow">
            <Link to="/arbeit/quiz">クイズスタート</Link>
          </button>
        </div>
        <p>
          マニュアルを見たい人は<Link to="/ManualListPart">こちら</Link>
        </p>
        <p>
          個人成績は<Link to="/company/resultlist">こちら</Link>
        </p>
      </div>
    </div>
  );
};

export default Quizmenu;
