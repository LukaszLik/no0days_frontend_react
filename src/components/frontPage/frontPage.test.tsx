import React from "react";
import {
  fireEvent,
  getAllByRole,
  render,
  screen,
} from "@testing-library/react";
import FrontPage from "./frontPage";
import { Provider } from "react-redux";
import { store } from "../../store";

describe("FrontPage", () => {
  it("shows no completed tasks on startup", () => {
    render(
      <Provider store={store}>
        <FrontPage />
      </Provider>
    );
    const countValue = screen.getByTestId("count").textContent;

    expect(countValue).toEqual("0");
  });
});
