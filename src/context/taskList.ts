import { create } from "zustand";
import { Task } from "../interfaces";
import { TaskList } from "../components/TaskList";
interface TaskState {
  taskList: Array<Task>;
  addTask: (task: Task) => void;
  removeTask: (taskId: string) => void;
}

const useTaskStore = create<TaskState>((set) => ({
  taskList: [],
  addTask: (task) => set((state) => ({ taskList: [...state.taskList, task] })),
  removeTask: (taskId) =>
    set((state) => {
      let newState = state.taskList.filter(
        (eachTask) => eachTask.id !== taskId
      );
      return { taskList: newState };
    }),
}));

export default useTaskStore;
