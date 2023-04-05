import { useTaskStore } from "../../store/";
import TaskItem from "./TaskItem";

const TaskList = () => {
  const taskList = useTaskStore((state) => state.taskList);

  return (
    <div>
      {!taskList.length ? (
        <p>nenhum item a ser mostrado</p>
      ) : (
        taskList.map((eachTask) => (
          <TaskItem {...eachTask} key={eachTask.id} />
        ))
      )}
    </div>
  );
};

export default TaskList;
