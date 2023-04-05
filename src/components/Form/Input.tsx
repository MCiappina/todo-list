import { FC, InputHTMLAttributes } from "react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  label: string;
}

const Input: FC<InputProps> = ({ name, label, ...rest }) => {
  return (
    <>
      <label htmlFor={name}>{label}</label>
      <input {...rest} name={name} />
    </>
  );
};

export default Input;
