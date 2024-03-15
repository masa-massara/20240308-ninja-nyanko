import { Link } from "react-router-dom";

const TopPageCompany = () => {
  return (
    <div className="vertical-middle">
      <div className="background_gray">
        <div className="large">
          <h1>Arbeit Manual</h1>
          <p>マニュアルを閲覧する方</p>
          <div className="defaultButton">
            <Link to="/manual">
              <button className="defaultButton_yellow">マニュアル閲覧</button>
            </Link>
          </div>
          <p>新規でマニュアルを作成する方</p>
          <div className="defaultButton">
            <Link to="/works">
              <button className="defaultButton_red">マニュアル新規作成</button>
            </Link>
          </div>
          <p>マニュアルクイズの成績を確認する方</p>
          <div className="defaultButton">
            <Link to="/resultlist">
              <button className="defaultButton_blue">クイズ成績確認</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopPageCompany;
