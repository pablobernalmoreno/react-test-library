import { render, screen } from "@testing-library/react";
import { ThemeButton } from "./ThemeButton";
import userEvent from "@testing-library/user-event";

describe("ThemeButton", () => {
  test("should render correctly", () => {
    render(<ThemeButton />);
    const themeButton = screen.getByTestId("theme-button");
    expect(themeButton).toHaveTextContent("light");
  });

  test("should change text correctly", async () => {
    render(<ThemeButton />);
    const themeButton = screen.getByTestId("theme-button");
    await userEvent.click(themeButton);
    expect(themeButton).toHaveTextContent("dark");
  });

  test("should call function 'toggle'", async () => {
    const toggle = jest.fn()
    render(<ThemeButton toggle={toggle}/>);
    const themeButton = screen.getByTestId("theme-button");
    await userEvent.click(themeButton);
    expect(toggle).toHaveBeenCalled();
  });
});
