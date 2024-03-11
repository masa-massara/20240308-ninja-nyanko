import Button_delete from "./Button_delete"
import DivManuelParts from "./DivManuelParts"
import { TasksObject } from "../../types/types";

type props = {
    content: TasksObject[] | undefined
}

const Component_add_manual = (props: props) => {
    return (
        <>

            <div className="manual_parts">
                {props.content?.map((a)=>{
              return  <DivManuelParts task={a}/>
            })}
                <Button_delete />
            </div>



        </>
    )
}

export default Component_add_manual
