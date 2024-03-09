import { FC } from "react"

type Props = {
    worksname: string[],
    contents: string,
    index: number,
    works: string
}
const CreateMenu:FC<Props> = ({worksname,index,works}) => {
  return (
    <div className="center_center">
      <div className="add_manual">
        <h1>マニュアル作成({index}/3)</h1>
        <p>{works}を選択してください</p>
        <div className="divSelect">
        <select name="works" className="select_middle">
            {worksname.map((work) => {
                return <option value={work}>{work}</option>
            })}
        </select>
        </div>
        <div className="textarea_input">
          <form className="form_input">
            <input type="text" className="small" placeholder="入力欄"></input>
          </form>
        </div>
        </div>
    </div>
  )
}

export default CreateMenu

