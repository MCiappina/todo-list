import { create } from "zustand";
import Task from "../interfaces";


interface TaskState {
  taskList: Array<Task>;
  addTask: (task: Task) => void;
}

const useTaskStore = create<TaskState>((set) => ({
  taskList: [],
  addTask: (task) => set((state) => ({ taskList: [...state.taskList, task] })),
}));

export default useTaskStore;
