import { render, fireEvent, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { Form } from "../components/Form";
import userEvent from "@testing-library/user-event";

const mockHandleSubmit = jest.fn();
const initialValues = {
  taskName: "",
  category: "",
};

describe("Form component", () => {
  it("should render without errors", () => {
    render(
      <Form handleSubmit={mockHandleSubmit} initialValues={initialValues} />
    );
    const form = screen.getByRole("form");
    expect(form).toBeInTheDocument();
  });

  it("should update form data when input values are changed", async () => {
    render(
      <Form handleSubmit={mockHandleSubmit} initialValues={initialValues} />
    );

    const taskName = screen.getByTestId("taskName");
    const category = screen.getByTestId("category");

    await userEvent.type(taskName, "Limpar a cozinha");
    await userEvent.type(category, "Limpeza");

    expect(taskName).toHaveValue("Limpar a cozinha");
    expect(category).toHaveValue("Limpeza");
  });

  it("should fire the handleSubmit when submit button gets clicked", async () => {
    render(
      <Form handleSubmit={mockHandleSubmit} initialValues={initialValues} />
    );

    const form = screen.getByRole("form");
    const taskName = screen.getByTestId("taskName");
    const category = screen.getByTestId("category");

    await userEvent.type(taskName, "Limpar a cozinha");
    await userEvent.type(category, "Limpeza");

    const expectedPayload = {
      taskName: "Limpar a cozinha",
      category: "Limpeza",
      id: expect.any(String),
      checked: false,
    };
    fireEvent.submit(form);

    expect(mockHandleSubmit).toHaveBeenCalledTimes(1);
    expect(mockHandleSubmit).toHaveBeenCalledWith(expectedPayload);
  });
  it("should render N number of inputs according to initialValues prop", () => {
    const MOCK_INITIAL_VALUES = {
      taskName: "",
      category: "",
      description: '',
      title: ''
    };

    render(
      <Form handleSubmit={mockHandleSubmit} initialValues={MOCK_INITIAL_VALUES} />
    );
    const inputList = screen.getAllByRole("textbox");
    expect(inputList.length).toBe(Object.keys(MOCK_INITIAL_VALUES).length)
  });
});
