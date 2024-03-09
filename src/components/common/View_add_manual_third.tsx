import Button_small_red from "./Button_small_red"
import Button_small_yellow from "./Button_small_yellow"
import Component_add_manual from "./Component_add_manual"
import Div_position from "./Div_position"
import Header from "./Header"

const View_add_manual_third = () => {
    return (
        <>
            <Header />
            <Div_position />
            <Component_add_manual />
            <Button_small_yellow />
            <div className="inset_redbutton">
            <Button_small_red />
            </div>
        </>
    )
}

export default View_add_manual_third
