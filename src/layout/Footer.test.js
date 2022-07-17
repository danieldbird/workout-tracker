import { render, screen } from "@testing-library/react";
import Footer from "./Footer";

describe("Footer", () => {
  test("renders copyright", () => {
    render(<Footer />);
    const element = screen.getByText(/copyright/i);
    expect(element).toBeInTheDocument();
  });

  test("renders correct year date", () => {
    const currentYear = new Date().getFullYear();
    render(<Footer />);
    const element = screen.getByRole("contentinfo");
    expect(element).toHaveTextContent("1999");
  });
});
