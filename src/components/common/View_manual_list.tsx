import Button_small_blue from "./Button_small_blue"
import DefaultButton_red from "./DefaultButton_red"
import Header from "./Header"
import Tabs_manual_list from "./Tabs_manual_list"

const View_manual_list = () => {
    return (
        <>
            <div className="header_title">
                <Header />
                <Button_small_blue />
            </div>
            <DefaultButton_red />
            <Tabs_manual_list />
        </>
    )
}

export default View_manual_list
