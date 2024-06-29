import { render, screen } from "@testing-library/react";
import Joke from "../components/Joke";

describe("Joke component", () => {
  it("should render correctly the setup and punchline", () => {
    render(
      <Joke
        setup="Setup: O que o pato disse para a pata?"
        punchline="Vem Quá!"
      />
    );

    expect(screen.getByRole("heading", { level: 3 })).toHaveTextContent(
      "Setup: O que o pato disse para a pata?"
    );
    expect(screen.getByText("Punchline: Vem Quá!")).toBeInTheDocument();
  });

  it("should render correctly the punchline without setup", () => {
    render(<Joke punchline="Vem Quá!" />);

    expect(screen.queryByText("Setup:")).toBeNull();
    expect(screen.getByText("Punchline: Vem Quá!")).toBeInTheDocument();
  });
});
