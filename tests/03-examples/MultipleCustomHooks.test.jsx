import { fireEvent, render, screen } from "@testing-library/react";
import { MultipleCustomHooks } from "../../src/03-examples";
import { useCounter } from "../../src/hooks/useCounter";
import { useFetch } from "../../src/hooks/useFetch";

jest.mock("../../src/hooks/useCounter");
jest.mock("../../src/hooks/useFetch");

describe("Pruenas en <MultipleCustomHooks />", () => {
	const increment = jest.fn();
	useCounter.mockReturnValue({
		counter: 1,
		increment,
	});

	beforeEach(() => {
		jest.clearAllMocks();
	});

	test("Debe de mostrar el componente por defecto", () => {
		useFetch.mockReturnValue({
			data: null,
			isLoading: true,
			hasError: null,
		});
		render(<MultipleCustomHooks />);
		expect(screen.getByText("Loading...")).toBeTruthy();
		expect(screen.getByText("Breaking Bad Quotes")).toBeTruthy();
		const nextButton = screen.getByRole("button", { name: "Next quote" });
		expect(nextButton.disabled).toBeTruthy();
	});

	test("Debe de mostrar un quote", () => {
		useFetch.mockReturnValue({
			data: [
				{
					author: "Alex",
					quote: "Holis",
				},
			],
			isLoading: false,
			hasError: null,
		});
		render(<MultipleCustomHooks />);
		expect(screen.getByText("Holis")).toBeTruthy();
		expect(screen.getByText("Alex")).toBeTruthy();
		const nextButton = screen.getByRole("button", { name: "Next quote" });
		expect(nextButton.disabled).toBeFalsy();
	});

	test("Debe de llamar la función de incrementar", () => {
		useFetch.mockReturnValue({
			data: [
				{
					author: "Alex",
					quote: "Holis",
				},
			],
			isLoading: false,
			hasError: null,
		});
		render(<MultipleCustomHooks />);
		const nextButton = screen.getByRole("button", { name: "Next quote" });
		fireEvent.click(nextButton);
		expect(increment).toHaveBeenCalled();
	});
});
