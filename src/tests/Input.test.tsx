import { render, fireEvent, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { Form, Input } from "../components/Form";
import userEvent from "@testing-library/user-event";

const MOCK_ATTRIBUTES = {
  name: "title",
  label: "Title",
};

const mockHandleChange = jest.fn();

describe("Input component", () => {
  it("should render without errors", () => {
    render(<Input {...MOCK_ATTRIBUTES} onChange={mockHandleChange} />);
    const input = screen.getByLabelText(MOCK_ATTRIBUTES.label);

    expect(input).toBeInTheDocument();
  });

  it("handleChange should be called and change input value", async () => {
    render(<Input {...MOCK_ATTRIBUTES} onChange={mockHandleChange} />);
    const input = screen.getByLabelText(MOCK_ATTRIBUTES.label);
    await userEvent.type(input, "new title");

    expect(mockHandleChange).toHaveBeenCalled();
    expect(input).toHaveValue("new title");
  });
});