import { useTaskStore } from "../../store/";
import { InputValues, Task } from "../../types";
import { Form } from "../Form";

const NewTaskForm = () => {
  const addTask = useTaskStore((state) => state.addTask)

  const handleSubmit = (formData: Task) => {
    addTask(formData);
  };

  const initialValues: InputValues = {
    taskName: "",
    category: "",
  };

  return <Form handleSubmit={handleSubmit} initialValues={initialValues} />;
};

export default NewTaskForm;
