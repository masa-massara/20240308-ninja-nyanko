import { FC } from "react";

type Props = {
  stage: string[];
};

const CreateQuiz: FC<Props> = ({ stage }) => {
  return (
    <div className="background_gray">
      <div className="middle">
        <h1>マニュアルクイズ</h1>
        <p>ステージを選択してください</p>
        <div className="divSelect">
          <select name="stage" className="select_middle">
            {stage.map((work) => {
              return <option value={work}>{work}</option>;
            })}
          </select>
        </div>

        <div className="defaultButton">
          <button className="defaultButton_yellow">マニュアル閲覧</button>
        </div>
      </div>
    </div>
  );
};

export default CreateQuiz;
