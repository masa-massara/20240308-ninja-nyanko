import Button_small_blue from "./Button_small_blue"
import Button_small_yellow from "./Button_small_yellow"
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

            <Button_small_yellow />
        </>
    )
}

export default View_manual_list
