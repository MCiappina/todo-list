import React, {
  FC,
  FormHTMLAttributes,
  useState,
  useId,
  useEffect,
} from "react";
import Input from "./Input";
import SubmitButton from "./SubmitButton";
import { InputValues, Task } from "../../types";
import * as S from "./style";
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
      id: crypto.randomUUID(),
      checked: false,
    };
    props.handleSubmit(formPayload);
  };

  return (
    <S.Form
      onSubmit={handleSubmit}
      className="rounded-sm bg-white p-5 md:flex md:items-center mb-6 f"
    >
      {Object.entries(formData).map(([name, value], index) => (
        <Input
          name={name}
          value={value}
          label={name}
          onChange={handleChange}
          key={index}
        />
      ))}
      <SubmitButton>Enviar</SubmitButton>
    </S.Form>
  );
};

export default Form;
