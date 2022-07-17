import { render, screen } from "@testing-library/react";
import Navigation from "./Navigation";
import { BrowserRouter } from "react-router-dom";

test("renders correct app title", () => {
  render(
    <BrowserRouter>
      <Navigation />
    </BrowserRouter>
  );
  const linkElement = screen.getByText(/workout tracker/i);
  expect(linkElement).toBeInTheDocument();
});
