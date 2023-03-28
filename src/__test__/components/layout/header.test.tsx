import React from "react";
import { render, screen } from "@testing-library/react";
import Header from "../../../components/layout/header";
import { BrowserRouter, MemoryRouter } from "react-router-dom";

describe("Header component", () => {
  test("Header should have Level 1 link present", () => {
    render(<Header />, { wrapper: BrowserRouter });
    expect(screen.getByText(/Level 1/i)).toBeInTheDocument();
  });

  test("Header should have Level 2 link present", () => {
    render(<Header />, { wrapper: BrowserRouter });
    expect(screen.getByText(/Level 2/i)).toBeInTheDocument();
  });
});
