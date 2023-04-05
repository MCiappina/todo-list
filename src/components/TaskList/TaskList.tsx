import React from "react";
import useTaskStore from "../../context/taskList";

const TaskList = () => {
  const taskList = useTaskStore((state) => state.taskList);

  console.log(taskList);

  return (
    <div>
      {!taskList.length ? (
        <p>nenhum item a ser mostrado</p>
      ) : (
        taskList.map((eachTask, index) => (
          <div key={index}>
            <h1>{eachTask.taskName}</h1>
            <h2>{eachTask.category}</h2>
          </div>
        ))
      )}
    </div>
  );
};

export default TaskList;
