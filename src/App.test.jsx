import { fireEvent, render, screen, within } from "@testing-library/react";
import App from "./App";

describe("shopping app", () => {
  test("filters products by category", () => {
    render(<App />);

    fireEvent.change(screen.getByRole("combobox", { name: /filter by category/i }), {
      target: { value: "Dairy" },
    });

    expect(screen.getByText("Milk")).toBeInTheDocument();
    expect(screen.getByText("Cheese")).toBeInTheDocument();
    expect(screen.queryByText("Apple")).not.toBeInTheDocument();
    expect(screen.queryByText("Bread")).not.toBeInTheDocument();
  });

  test("adds a selected product to the cart", () => {
    render(<App />);

    const milkCard = screen.getByText("Milk").closest("li");
    fireEvent.click(within(milkCard).getByRole("button", { name: "Add to Cart" }));

    expect(screen.getByText("Milk is in your cart.")).toBeInTheDocument();
  });

  test("toggles dark mode", () => {
    render(<App />);

    const app = document.querySelector(".app");
    fireEvent.click(screen.getByRole("button", { name: "Toggle Dark Mode" }));
    expect(app).toHaveClass("dark");
    expect(screen.getByRole("button", { name: "Toggle Light Mode" })).toBeInTheDocument();
  });
});
