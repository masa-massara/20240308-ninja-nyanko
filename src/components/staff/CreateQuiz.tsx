import { FC } from "react"

type Props = {
    stage: string[],
}

const CreateQuiz:FC<Props> = ({stage}) => {
  return (
    <div>
        <h1>マニュアルクイズ</h1>
        <p>ステージを選択してください</p>
        <select name="stage">
            {stage.map((work) => {
                return <option value={work}>{work}</option>
            })}
        </select>
        <button>クイズスタート</button>
    </div>
  )
}

export default CreateQuiz
