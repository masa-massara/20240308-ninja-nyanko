import { TasksObject } from "../../types/types";
import Button_delete from "./Button_delete";
import DivManuelParts from "./DivManuelParts";

type ComponentAddManualProps = { content: TasksObject[] | undefined };

const Component_add_manual = (props: ComponentAddManualProps) => {
  return (
    <>
      <div>
        {props.content?.map((item, index) => (
          <div key={index} className="manual_parts">
            <DivManuelParts task={item} />
            <Button_delete />
          </div>
        ))}
      </div>
    </>
  );
};

export default Component_add_manual;
