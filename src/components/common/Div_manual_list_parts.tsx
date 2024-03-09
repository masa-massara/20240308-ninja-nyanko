import Button_delete from "./Button_delete"

const Div_manual_list_parts = () => {
    return (
        <div className="div_manual_list">
            <div className="divManualParts">
                <p className="title">TITLE TITLE</p>
                <div className="div_circle">
                    <p className="circle">text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text</p>
                </div>
                <a><p>続きを見る</p></a>
            </div>
            <div className="buttons">
                <Button_delete />
            </div>
        </div>
    )
}

export default Div_manual_list_parts
