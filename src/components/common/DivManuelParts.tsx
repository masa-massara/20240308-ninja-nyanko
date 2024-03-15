import { TasksObject } from "../../types/types";
import Button_small_blue from "./Button_small_blue";

type DivManuelPartsProps = {
  task: TasksObject;
};

const DivManuelParts = ({ task }: DivManuelPartsProps) => {
  return (
    <div className="divManualParts">
      <p className="title">{task.title}</p>
      <div className="div_circle">
        <p className="circle">{task.task}</p>
      </div>
      <Button_small_blue />
    </div>
  );
};

export default DivManuelParts;
