import { render, screen } from "@testing-library/react";
import { UserContext } from "../../src/09-useContext/context/UserContext";
import { HomePage } from "../../src/09-useContext/HomePage";

describe("Pruebas en <HomePage />", () => {
	const user = {
		id: 1,
		name: "Alex",
	};

	test("Debe de mostrar el componente sin el usuario", () => {
		render(
			<UserContext.Provider value={{ user: null }}>
				<HomePage />
			</UserContext.Provider>
		);
		const preElement = screen.getByLabelText("pre");
		expect(preElement.innerHTML).toBe("null");
	});

	test("Debe mostrar el componente con el usuario", () => {
		render(
			<UserContext.Provider value={{ user }}>
				<HomePage />
			</UserContext.Provider>
		);
		const preElement = screen.getByLabelText("pre");
		expect(preElement.innerHTML).toContain(user.name);
		expect(preElement.innerHTML).toContain(`${user.id}`);
	});
});
