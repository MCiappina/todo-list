import useTaskStore from "../../context/taskList";
import TaskItem from "./TaskItem";

const TaskList = () => {
  const taskList = useTaskStore((state) => state.taskList);

  console.log(taskList);

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
