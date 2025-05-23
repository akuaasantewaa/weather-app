import { render, screen, fireEvent } from "@testing-library/react";
import App from "./App";

test("renders input and button", () => {
  render(<App />);
  expect(screen.getByPlaceholderText(/Enter city/i)).toBeInTheDocument();
  expect(screen.getByText(/Get Weather/i)).toBeInTheDocument();
});

test("shows error if city is empty", () => {
  render(<App />);
  fireEvent.click(screen.getByText(/Get Weather/i));
  expect(screen.getByText(/Please enter a city name/i)).toBeInTheDocument();
});  
