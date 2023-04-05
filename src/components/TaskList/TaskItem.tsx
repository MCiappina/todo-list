import React, { FC } from "react";
import { Task } from "../../interfaces";
import useTaskStore from "../../context/taskList";

const TaskItem: FC<Task> = ({ id, taskName, category, checked }) => {
  const [removeTask, toggleChecked] = useTaskStore((state) => [
    state.removeTask,
    state.toggleChecked,
  ]);

  const handleToggle = () => {
    toggleChecked(id);
  };

  const handleDelete = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.stopPropagation();
    removeTask(id);
  };

  return (
    <div key={id} onClick={handleToggle}>
      <h1>{taskName}</h1>
      <h2>{category}</h2>
      {checked ? <p>true</p> : <p>false</p>}
      <button onClick={handleDelete}>Deletar</button>
    </div>
  );
};

export default TaskItem;
