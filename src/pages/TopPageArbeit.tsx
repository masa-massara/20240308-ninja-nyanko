import { Link } from "react-router-dom";

const TopPageArbeit = () => {
  return (
    <div className="background_gray">
      <div className="large">
      <h2>Arbeit Manual</h2>
      <div className="defaultButton">
      <button className="defaultButton_red">
        <Link to="/works"> マニュアルを作成</Link>
      </button>
      </div>
      <div className="defaultButton">
      <button className="defaultButton_yellow">
        <Link to="/arbeit/selectquiz">マニュアルクイズ</Link>
      </button>
      </div>
    </div>
    </div>
  );
};

export default TopPageArbeit;
