import { render } from "@testing-library/react";
import Header from "../Header";

test("Logo should load on rendering header", () => {
  // Load the header
  const header = render(<Header />);
  console.log(header);

  //   Check if the loaded is loaded
});
