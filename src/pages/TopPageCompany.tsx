import { Link } from "react-router-dom";

const TopPageCompany = () => {
  return (
    <div className="background_gray">
      <div className="large">
      <h1>Arbeit Manual</h1>
      <div className="defaultButton">
      <button className="defaultButton_yellow">
        <Link to="/selectworks"> マニュアルを閲覧</Link>
      </button>
      </div>
      <div className="defaultButton">
      <button className="defaultButton_red">
        <Link to="/selectworks"> マニュアルを作成</Link>
      </button>
      </div>
      <div className="defaultButton">
        <button className="defaultButton_blue">
          <Link to="/selectworks">個人成績</Link>
        </button>
      </div>
    </div>
    </div>
  );
};

export default TopPageCompany;
