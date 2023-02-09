import { render } from "@testing-library/react";
import Button from "./index";

describe("Button", () => {
  it("Button/render", async () => {
    const { getByRole } = render(<Button />);

    expect(getByRole("button")).toBeInTheDocument;
  });
});
