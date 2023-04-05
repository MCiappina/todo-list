import React, { FC } from "react";
import { Task } from "../../interfaces";
import useTaskStore from "../../context/taskList";

const TaskItem: FC<Task> = ({ id, taskName, category }) => {
  const removeTask = useTaskStore((state) => state.removeTask);

  const handleDelete = () => {
    removeTask(id);
  };

  return (
    <div key={id}>
      <h1>{taskName}</h1>
      <h2>{category}</h2>
      <button onClick={handleDelete}>Deletar</button>
    </div>
  );
};

export default TaskItem;
