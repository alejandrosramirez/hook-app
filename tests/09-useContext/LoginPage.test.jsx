import { fireEvent, render, screen } from "@testing-library/react";
import { UserContext } from "../../src/09-useContext/context/UserContext";
import { LoginPage } from "../../src/09-useContext/LoginPage";

describe("Pruebas en <LoginPage />", () => {
	test("Debe de mostrar el componente sin el usuario", () => {
		render(
			<UserContext.Provider value={{ user: null }}>
				<LoginPage />
			</UserContext.Provider>
		);
		const preElement = screen.getByLabelText("pre");
		expect(preElement.innerHTML).toBe("null");
	});

	test("Debe de llamar setUser cuando se da click en el button", () => {
		const user = {
			id: 1,
			name: "Alex Salgado",
			email: "alex@mail.com",
		};
		const setUserMock = jest.fn();
		render(
			<UserContext.Provider value={{ user: null, setUser: setUserMock }}>
				<LoginPage />
			</UserContext.Provider>
		);
		const buttonElement = screen.getByRole("button", { name: "Set user" });
		fireEvent.click(buttonElement);
		expect(setUserMock).toHaveBeenCalledWith(user);
	});
});
