import { render, waitFor, fireEvent } from "@testing-library/react";
import Body from "../Body";
import { StaticRouter } from "react-router-dom/server";
import { RESTAURANT_DATA } from "../../mocks/data";
import "@testing-library/jest-dom";

// created own dummy fetch with mock data of restaurant
global.fetch = jest.fn(() => {
  return Promise.resolve({
    json: () => Promise.resolve(RESTAURANT_DATA),
  });
});

test("Skeleton should load on home page", () => {
  const body = render(
    <StaticRouter>
      <Body />
    </StaticRouter>
  );

  const skeleton = body.getByTestId("skeleton");

  expect(skeleton.children.length).toBe(15);
});

test("Restaurant should load on home page", async () => {
  const body = render(
    <StaticRouter>
      <Body />
    </StaticRouter>
  );

  await waitFor(() => {
    expect(body.getByTestId("search-btn"));
  });

  const resList = body.getByTestId("res-list");

  expect(resList.children.length).toBe(20);
});

test("Search for string (King) on home page", async () => {
  const body = render(
    <StaticRouter>
      <Body />
    </StaticRouter>
  );

  await waitFor(() => {
    expect(body.getByTestId("search-btn"));
  });

  const searchInput = body.getByTestId("search-input");
  // Fire Event

  fireEvent.change(searchInput, {
    target: {
      value: "pizza",
    },
  });
  const searchButton = body.getByTestId("search-btn");

  fireEvent.click(searchButton);

  const resList = body.getByTestId("res-list");

  expect(resList.children.length).toBe(2);
});
