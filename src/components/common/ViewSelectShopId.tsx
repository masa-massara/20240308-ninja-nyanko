import Button_next from "./Button_next";
import Button_small_red from "./Button_small_red";
import Textarea_input_small from "./Textarea_input_small";

const ViewSelectShopId = () => {
  return (
    <div className="vertical-middle">
      <div className="add_manual">
        <h1>店舗ID</h1>
        {/* kakko atodekesu */}
        <p>店舗IDを入力してください。</p>

        <Textarea_input_small />
      
      <Button_next />
      </div>
    </div>
  );
};

export default ViewSelectShopId;
