import { render, screen } from "@testing-library/react";
import { TodoApp } from "../../src/08-useReducer/TodoApp";
import { useTodos } from "../../src/hooks/useTodos";

jest.mock("../../src/hooks/useTodos");

describe("Pruenbas en <TodoApp />", () => {
	const todos = [
		{
			id: 1,
			description: "Hola1",
			done: false,
		},
		{
			id: 2,
			description: "Hola2",
			done: true,
		},
	];

	useTodos.mockReturnValue({
		todos,
		todosCounter: todos.length,
		pendingTodosCounter: todos.filter((todo) => !todo.done).length,
		handleAddTodo: jest.fn(),
		handleDeleteTodo: jest.fn(),
		handleToggleTodo: jest.fn(),
	});

	test("Debe de mostrar el componente correctamente", () => {
		render(<TodoApp />);
		expect(screen.getByText("Hola1")).toBeTruthy();
		expect(screen.getByText("Hola2")).toBeTruthy();
		expect(screen.getByRole("textbox")).toBeTruthy();
	});
});
