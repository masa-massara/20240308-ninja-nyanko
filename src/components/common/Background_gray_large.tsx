import DefaultButton_blue from "./DefaultButton_blue"
import DefaultButton_red from "./DefaultButton_red"
import DefaultButton_yellow from "./DefaultButton_yellow"

const Background_gray_large = () => {
  return (
    <div className="background_gray">
      <div className="large">
        <h1>Arbite Manual</h1>
        <p>マニュアルを閲覧する方</p>
        <DefaultButton_yellow />
        <p>マニュアルを新規作成する方</p>
        <DefaultButton_red />
        <p>アルバイトの個人成績を見る方</p>
        <DefaultButton_blue />
        
      </div>
    </div>
  )
}

export default Background_gray_large
