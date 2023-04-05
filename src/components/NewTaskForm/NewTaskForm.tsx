import useTaskStore from "../../context/taskList";
import Task from "../../interfaces";
import { Form } from "../Form";

const NewTaskForm = () => {
  const addTask = useTaskStore((state) => state.addTask)

  const handleSubmit = (formData: Task) => {
    //TODO Redux
    console.log(formData)
    addTask(formData);
  };

  const initialValues = {
    taskName: "",
    category: "",
  };

  return <Form handleSubmit={handleSubmit} initialValues={initialValues} />;
};

export default NewTaskForm;
