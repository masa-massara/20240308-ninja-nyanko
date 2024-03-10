import { Link } from "react-router-dom";

const TopPageArbeit = () => {
  return (
    <div>
      <h2>Arbeit Manual</h2>
      <button>
        <Link to="/selectworks"> マニュアルを作成</Link>
      </button>
      <button>
        <Link to="/Arbeit/Quiz">マニュアルクイズ</Link>
      </button>
    </div>
  );
};

export default TopPageArbeit;
