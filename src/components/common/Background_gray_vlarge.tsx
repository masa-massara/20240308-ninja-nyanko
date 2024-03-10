import Button_small_red from "./Button_small_red";
import Input_file from "./Input_file";
import Textarea_input_large from "./Textarea_input_large";
import Textarea_input_middle from "./Textarea_input_middle";

type Props = {
  clickAct: () => void;
};

const Background_gray_vlarge = ({ clickAct }: Props) => {
  return (
    <div className="background_gray">
      <div className="vlarge">
        <Textarea_input_middle />
        <Textarea_input_large />
        <Input_file />
        <Button_small_red
          clickAct={() => {
            clickAct;
          }}
        />
      </div>
    </div>
  );
};

export default Background_gray_vlarge;
