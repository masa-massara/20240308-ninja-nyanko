import { Link } from "react-router-dom";

const TopPageCompany = () => {
  return (
    <div>
      <h2>Arbeit Manual</h2>

      <button>
        <Link to="/selectworks"> マニュアルを作成</Link>
      </button>
      <button>個人成績</button>
    </div>
  );
};

export default TopPageCompany;
