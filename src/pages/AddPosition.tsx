import { FC } from "react";
type Props = {
  position: string;
};

const AddPosition: FC<Props> = ({position}) => {

  return( 
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
