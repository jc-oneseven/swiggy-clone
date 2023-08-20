import { render } from "@testing-library/react";
import Header from "../Header";
import { StaticRouter } from "react-router-dom/server";

test("Logo should load on rendering header", () => {
  // Load the header
  const header = render(
    <StaticRouter>
      <Header />
    </StaticRouter>
  );

  const logo = header.getByTestId("logo");

  // check if logo is already loaded
  expect(logo.src).toBe("http://localhost/dummy.png");
});

test("Online status should be green on rendering header", () => {
  // Load the header
  const header = render(
    <StaticRouter>
      <Header />
    </StaticRouter>
  );

  const onlineStatus = header.getByTestId("online-status");

  //console.log(onlineStatus);
  // check if logo is already loaded
  expect(onlineStatus.innerHTML).toBe("✅");
});

test("Cart items should be zero items on rendering header", () => {
  // Load the header
  const header = render(
    <StaticRouter>
      <Header />
    </StaticRouter>
  );

  const cartLength = header.getByTestId("cart");

  //console.log(cartLength);
  // check if logo is already loaded
  expect(cartLength.innerHTML).toBe("Cart- 0 items");
});
