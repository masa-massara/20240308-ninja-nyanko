import {  useNavigate,  } from "react-router-dom";
import { FC, useContext } from "react";
import { PlaceContext } from "../../App";
import { OpenAxios } from "../common/OpenAxios";

type Props = {
  worksname: string[];
  link: string;
  index: number;
  works: string;
};

const CreateMenu: FC<Props> = ({ worksname, index, works }) => {
  const context = useContext(PlaceContext);
  const navigate = useNavigate();


  const { setJson } = useContext(PlaceContext);
  const aihandle = async () => {
    const res =
      await OpenAxios(`${context.place}という${context.industry}の${context.position}のバイトマニュアルを出力してもらいます。
    形式は
    position:${context.position}
    title:(中身)
    task:(中身)
    を1オブジェクトとして、返答をJSON形式で崩さず5オブジェクト出力してください。
    `);
    console.log("JSON.parse(res.choices[0].message.content)",JSON.parse(res.choices[0].message.content));
    setJson(JSON.parse(res.choices[0].message.content));
    navigate("/works/position/addposition");
  };

  return (
    <div className="center_center">
      <div className="add_manual">
        <h1>マニュアル作成({index}/3)</h1>
        <p>{works}を選択してください</p>
        <div className="divSelect">
          <select title="a" name="works" className="select_middle">
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
            <button className="next" onClick={aihandle}>
              次へ
            </button>
        </div>
      </div>
    </div>
  );
};

export default CreateMenu;
