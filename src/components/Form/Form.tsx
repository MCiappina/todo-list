import React, { FC, FormHTMLAttributes, ReactNode, useState } from "react";
import Input from "./Input";
import SubmitButton from "./SubmitButton";

interface FormProps extends FormHTMLAttributes<HTMLFormElement> {
  handleSubmit: (formData: string) => void;
  initialValues: Record<string, string>;
}

const Form: FC<FormProps> = (props) => {
  const [formData, setFormData] = useState(props.initialValues);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormData((previousState) => ({ ...previousState, [name]: value }));
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    console.log(formData);
    const formPayload = JSON.stringify(formData);
    console.log(formPayload);
    props.handleSubmit(formPayload);
  };

  return (
    <form onSubmit={handleSubmit}>
      {Object.entries(formData).map(([name, value], index) => (
        <div key={index}>
          <Input
            name={name}
            value={value}
            label={name}
            onChange={handleChange}
          />
        </div>
      ))}
      <SubmitButton>Enviar</SubmitButton>
    </form>
  );
};

export default Form;
