import { FC, useContext, useState } from "react";
import { PlaceContext } from "../../App";
import { OpenAxios } from "../common/OpenAxios";
import { Link } from "react-router-dom";

type Props = {
  link: string;
  index: number;
  works: string;
};

const CreateMenu: FC<Props> = ({ index, works, link}) => {
  const { setPosition } = useContext(PlaceContext);
  const context = useContext(PlaceContext);
  const [isLoading, setIsLoading] = useState(true);
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
    // console.log(JSON.parse(res.choices[0].message.content));
    setJson(JSON.parse(res.choices[0].message.content));
    setIsLoading(true);
    console.log(isLoading);
  };

  return (
    <div className="center_center">
      <div className="add_manual">
        <h1>マニュアル作成({index}/3)</h1>
        <p>{works}を選択してください</p>
        <div className="textarea_input">
          <form className="form_input">
            <input
              type="text"
              className="small"
              placeholder="入力欄"
              onChange={(e) => setPosition(e.target.value)}
            ></input>
          </form>
        </div>

        {/* AI発火させる */}
        <div className="button_next">
          <Link to={link}>
          <button className="next" onClick={aihandle}>
            次へへへへへ
          </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CreateMenu;
