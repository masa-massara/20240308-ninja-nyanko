import { FC } from "react"
import Button from "../common/Button"
type Props = {
    worksname: string[],
    contents: string,
    index: number,
    works: string
}
const CreateMenu:FC<Props> = ({worksname,contents,index,works}) => {
  return (
    <div>
        <h1>マニュアル作成({index}/3)</h1>
        <p>{works}を選択してください</p>
        <select name="works">
            {worksname.map((work) => {
                return <option value={work}>{work}</option>
            })}
        </select>
        <input type="text" placeholder={contents}/>
        <Button></Button>
    </div>
  )
}

export default CreateMenu

