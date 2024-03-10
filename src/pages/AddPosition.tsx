import { FC, useContext } from "react";
import { PlaceContext } from "../App";
type Props = {
  position: string;
};

const AddPosition: FC<Props> = ({ position }) => {
  // プロンプトの確認できる
  const context = useContext(PlaceContext);
  console.log("context", context);

  return (
    <div>
      <div className="header">
        <p>マニュアル作成(3/3)</p>
      </div>
      <div className="div_position">
        <p className="p_position">{position}</p>
      </div>
    </div>
  );
};

export default AddPosition;
