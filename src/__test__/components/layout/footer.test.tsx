import React from "react";
import { render, screen } from "@testing-library/react";
import Footer from "../../../components/layout/footer";

describe("Footer component", () => {
  test("Footer should be in the document", () => {
    render(<Footer />);
    expect(screen.getByText(/copyright notice/i)).toBeInTheDocument();
  });
});
