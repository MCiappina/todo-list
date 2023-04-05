import useTaskStore from "../../context/taskList";
import { InputValues, Task } from "../../interfaces";
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
