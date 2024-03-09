import { FC } from "react";
import { Link } from "react-router-dom";
type Props = {
  worksname: string[];
  link: string;
  index: number;
  works: string;
};
const CreateMenu: FC<Props> = ({ worksname, index, works, link }) => {
  return (
    <div className="center_center">
      <div className="add_manual">
        <h1>マニュアル作成({index}/3)</h1>
        <p>{works}を選択してください</p>
        <div className="divSelect">
          <select name="works" className="select_middle">
            {worksname.map((position) => {
              return <option value={position}>{position}</option>;
            })}
          </select>
        </div>

        <div className="textarea_input">
          <form className="form_input">
            <input type="text" className="small" placeholder="入力欄"></input>
          </form>
        </div>

        <div className="button_next">
          <button className="next">
            <Link to={link}>次へ</Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default CreateMenu;
