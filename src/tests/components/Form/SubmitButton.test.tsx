import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { Form, SubmitButton } from "../../../components/Form";
import userEvent from "@testing-library/user-event";

const mockHandleSubmit = jest.fn();

const initialValues = {
  taskName: "",
  category: "",
};

describe("SubmitButton component", () => {
  it("should render without any errors", () => {
    render(<SubmitButton>Enviar</SubmitButton>);
    const submitBtn = screen.getByRole("button");
    expect(submitBtn).toBeInTheDocument();
  });

  it("should call handleSubmit button when clicked", async () => {
    render(
      <Form handleSubmit={mockHandleSubmit} initialValues={initialValues} />
    );
    const submitBtn = screen.getByRole("button");
    await userEvent.click(submitBtn);
    expect(mockHandleSubmit).toHaveBeenCalledTimes(1);
  });

  it("should render text correctly on children props", () => {
    render(<SubmitButton>Enviar</SubmitButton>);
    const submitBtn = screen.getByRole("button");
    expect(submitBtn).toHaveTextContent("Enviar");
  });

  it("is disabled when the disabled prop is true", () => {
    render(<SubmitButton disabled>Click me!</SubmitButton>);
    const button = screen.getByRole("button");
    expect(button).toBeDisabled();
  });
  it("has the type attribute 'submit' by default", () => {
    render(<SubmitButton>Click me!</SubmitButton>);
    const button = screen.getByRole("button");
    expect(button).toHaveAttribute("type", "submit");
  });
});
