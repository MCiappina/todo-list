import { FC, ReactNode, ButtonHTMLAttributes } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
}

const SubmitButton: FC<ButtonProps> = ({ children, ...rest }) => {
  return (
    <button type="submit" {...rest}>
      {children}
    </button>
  );
};

export default SubmitButton;
