import Textarea_input_small from "./Textarea_input_small";
import Button_next from "./Button_next";
import Droplist_gyousyu from "./Droplist_gyousyu";

const View_add_manual_first = () => {
  return (
    <div className="center_center">
      <div className="add_manual">
        <h1>マニュアル作成(1/3)</h1>
        {/* kakko atodekesu */}
        <p>業種を選択してください</p>

        <Droplist_gyousyu />
        <Textarea_input_small />
        <Button_next />
      </div>
    </div>
  );
};

export default View_add_manual_first;
