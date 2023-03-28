import React from "react";
import { render, screen } from "@testing-library/react";
import FallbackErrorComponent from "../../../components/error/fallback_error_component";

describe("Fallback component", () => {
  test("Fallback error component", () => {
    render(<FallbackErrorComponent />);
    expect(screen.getByText(/seems right at the moment./i)).toBeInTheDocument();
  });
});
