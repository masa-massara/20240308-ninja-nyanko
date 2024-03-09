import Button_delete from "./Button_delete"
import DivManuelParts from "./DivManuelParts"

const Component_add_manual = () => {
    return (
        <>
            <div className="manual_parts">
                <DivManuelParts />
                <Button_delete />
            </div>
        </>
    )
}

export default Component_add_manual
