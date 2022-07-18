import { render, screen } from "@testing-library/react";
import App from "./App";
import { TEST_IDS } from "./app/utils/Constants";
import userEvent from "@testing-library/user-event";

test("renders search bar", () => {
  render(<App />);
  const searchbar = screen.getByTestId(TEST_IDS.searchbar);
  expect(searchbar).toBeInTheDocument();
});

test("test if input works", () => {
  render(<App />);
  const searchbar = screen.getByTestId(TEST_IDS.searchbar);
  userEvent.type(searchbar, "snake");
  expect(screen.getByTestId(TEST_IDS.searchbar)).toHaveValue("snake");
});


test("renders image grid", () => {
  render(<App />);
  const imageGrid = screen.getByTestId(TEST_IDS.imageGrid);
  expect(imageGrid).toBeInTheDocument();
});