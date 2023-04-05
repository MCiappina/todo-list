import React, { FC, useEffect } from "react";
import { Task } from "../../types";
import { useTaskStore } from "../../store/";
import * as S from "./style";

const TaskItem: FC<Task> = ({ id, taskName, category, checked }) => {
  const [removeTask, toggleChecked, taskList] = useTaskStore((state) => [
    state.removeTask,
    state.toggleChecked,
    state.taskList,
  ]);

  const index = taskList.findIndex((eachTask) => eachTask.id === id);

  useEffect(() => {
    console.log('render');
  
  }, [checked])
  

  const handleToggle = () => {
    toggleChecked(id);
  };

  const handleDelete = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.stopPropagation();
    removeTask(id);
  };

  return (
    <S.TaskItemWrapper key={id} onClick={handleToggle} checked={checked}>
      <h1>
        {taskName}
      </h1>
      <h2>{category}</h2>
      {checked ? <p>true</p> : <p>false</p>}
      <button onClick={handleDelete}>Deletar</button>
    </S.TaskItemWrapper>
  );
};

export default TaskItem;
