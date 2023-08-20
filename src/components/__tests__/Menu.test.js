import { render, waitFor, fireEvent } from "@testing-library/react";
import Body from "../Body";
import { StaticRouter } from "react-router-dom/server";
import { RESTAURANT_DATA } from "../../mocks/data";
import "@testing-library/jest-dom";

// created own dummy fetch with mock data of restaurant
global.fetch = jest.fn(() => {
  return Promise.resolve({
    json: () => Promise.resolve(MENU_DATA),
  });
});

test("Restaurant menu should be load on menu page", () => {});
