import React from "react";
import { render, screen } from "@testing-library/react";
import PageLayout from "../../../components/layout/page_layout";
import { BrowserRouter } from "react-router-dom";

describe("Page Layout", () => {
  test("Page heading is present", () => {
    render(
      <PageLayout>
        <h1>Test heading</h1>
      </PageLayout>,
      { wrapper: BrowserRouter }
    );
    expect(screen.getByText(/test heading/i)).toBeInTheDocument();
    expect(screen.getByText(/Take Home Assignment/i)).toBeInTheDocument();
  });
});
