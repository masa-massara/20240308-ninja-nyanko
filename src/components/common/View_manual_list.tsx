import Button_small_blue from "./Button_small_blue"
import DefaultButton_red from "./DefaultButton_red"
import Div_manual_list_parts from "./Div_manual_list_parts"
import Header from "./Header"

const View_manual_list = () => {
    return (
        <>
            <div className="header_title">
                <Header />
                <Button_small_blue />
            </div>
            <DefaultButton_red />
            <Div_manual_list_parts />
            <Div_manual_list_parts />
            <Div_manual_list_parts />

        </>
    )
}

export default View_manual_list
