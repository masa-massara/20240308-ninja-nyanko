const Background_popup = () => {
  return (
    <div className="background_popup">
      <p>キッチンのマニュアルを作成しますか</p>
      <div className="display_yesno">
        <div className="div_yesno_button">
            <button className="button_no">いいえ</button>
        </div>
        <div className="div_yesno_button">
            <button className="button_yes">はい</button>
        </div>
      </div>
    </div>
  )
}

export default Background_popup
