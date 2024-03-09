import Textarea_input_small from './Textarea_input_small'
import Button_next from './Button_next'
import Droplist_position from './Droplist_position'

const View_add_manual_second = () => {
  return (
    <div className='center_center'>
      <div className='add_manual'>
        <h1>マニュアル作成(2/3)</h1>
        {/* kakko atodekesu */}
        <p>ポジションを選択してください</p>

        <Droplist_position />
        <Textarea_input_small />
        <Button_next />
      </div>
    </div>
  )
}

export default View_add_manual_second
