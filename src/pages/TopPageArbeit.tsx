// import { Link } from "@chakra-ui/react";
import { Link } from "react-router-dom";


import Textarea_input_small from "../components/common/Textarea_input_small";

const TopPageArbeit = () => {
  return (

    <div className="vertical-middle">
      <div className="add_manual">
        <h1>店舗ID</h1>
        {/* kakko atodekesu */}
        <p>店舗IDを入力してください。</p>

        <Textarea_input_small />


        <div className="button_next">
          <Link to="/arbeit/selectquiz">
            <button className="next">
              次へ
            </button>
          </Link>

        </div>



      </div>
    </div>


  );
};

export default TopPageArbeit;
