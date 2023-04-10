import React, { FC, FormHTMLAttributes, useState } from "react";
import Input from "./Input";
import SubmitButton from "./SubmitButton";
import { InputValues, Task } from "../../types";
import * as S from "./style";
import { v4 as uuidv4 } from 'uuid';
interface FormProps extends FormHTMLAttributes<HTMLFormElement> {
  handleSubmit: (formData: Task) => void;
  initialValues: InputValues;
}

const Form: FC<FormProps> = (props) => {
  const [formData, setFormData] = useState(props.initialValues);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormData((previousState) => ({ ...previousState, [name]: value }));
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    const formPayload = {
      ...formData,
      id: uuidv4(),
      checked: false,
    };
    props.handleSubmit(formPayload);
    setFormData({ ...props.initialValues });
  };

  return (
    <S.Form data-testid='form' role="form" name="form" onSubmit={handleSubmit}>
      {Object.entries(formData).map(([name, value], index) => (
        <Input
          name={name}
          value={value}
          label={name}
          onChange={handleChange}
          key={index}
          type="text"
        />
      ))}
      <SubmitButton>Enviar</SubmitButton>
    </S.Form>
  );
};

export default Form;
