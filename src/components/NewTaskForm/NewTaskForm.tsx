import { Form } from "../Form";

const NewTaskForm = () => {
  const handleSubmit = (formData: string) => {
    //TODO Redux
    console.log(formData);
  };

  const initialValues = {
    tarefa: "",
    categoria: "",
  };

  return <Form handleSubmit={handleSubmit} initialValues={initialValues} />;
};

export default NewTaskForm;
