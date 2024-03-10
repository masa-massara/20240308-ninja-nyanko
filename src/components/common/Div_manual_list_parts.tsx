import Button_delete from "./Button_delete"
import Button_edit from "./Button_edit"

const Div_manual_list_parts = ({task, title}: {task: string, title: string}) => {
    return (
        <div className="div_manual_list">
            <div className="divManualParts">
                <p className="title">{title}</p>
                <div className="div_circle">
                    <p className="circle">{task}</p>
                </div>
                <a><p>続きを見る</p></a>
            </div>
            <div className="buttons">
                <Button_edit />
                <Button_delete />
            </div>
        </div>
    )
}

export default Div_manual_list_parts
