import React from "react";
import { render, screen } from "@testing-library/react";
import BubblePage from "./BubblePage";

test("Renders BubblePage without errors", () => {
  // Finish this test
  render(<BubblePage />);
});

test("Fetches data and renders the bubbles on mounting", () => {
  // Finish this test
  //ARRANGE:
  render(<BubblePage />);
  //ACT     (SEARCH FOR COMPONENT RETURNED TEXT):
  const colorlist = screen.queryByText(/colors/i);
  const bubbles = screen.queryByText(/bubbles/i);
  //ASSERT:
  expect(colorlist).not.toBeNull();
  expect(bubbles).not.toBeNull();

});

//Task List
//1. Setup test for basic rendering of component
//2. Setup test for initial rendering of bubbles on loading