import { FC, InputHTMLAttributes } from "react";
import * as S from "./style";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  label: string;
}

const Input: FC<InputProps> = ({ name, label, ...rest }) => {
  return (
    <S.InputWrapper>
      <label htmlFor={name}>{label}</label>
      <input role="input" id={name} {...rest} data-testid={name} name={name} type="text" placeholder={`Change ${label}`}/>
    </S.InputWrapper>
  );
};

export default Input;
