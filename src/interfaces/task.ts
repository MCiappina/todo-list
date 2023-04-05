export type InputValues = {
  taskName: string;
  category: string;
};
export interface Task extends InputValues {
  id: string;
}