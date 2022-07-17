import { render, screen } from "@testing-library/react";
import Navigation from "./Navigation";

test("renders correct app title", () => {
  render(<Navigation />);
  const linkElement = screen.getByText(/workout tracker/i);
  expect(linkElement).toBeInTheDocument();
});
