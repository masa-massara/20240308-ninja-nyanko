import { FC } from "react"

type Props = {
    stage: string[],
}

const CreateQuiz:FC<Props> = ({stage}) => {
  return (
    <div>
        <h1>マニュアルクイズ</h1>
        <p>ステージを選択してください</p>
        <div className="divSelect"> 
        <select className="select_middle">
            {stage.map((work) => {
                return <option value={work}>{work}</option>
            })}
        </select>
        </div>
    </div>
  )
}

export default CreateQuiz
