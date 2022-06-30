import { fireEvent, render, screen } from "@testing-library/react";
import { TodoItem } from "../../src/08-useReducer/TodoItem";

describe("Pruebas en <TodoItem />", () => {
	const todo = {
		id: 1,
		description: "Holis",
		done: false,
	};
	const handleDeleteTodoMock = jest.fn();
	const handleToggleTodoMock = jest.fn();

	beforeEach(() => {
		jest.clearAllMocks();
	});

	test("Debe de mostrar el todo pendiente de completar", () => {
		render(
			<TodoItem
				todo={todo}
				handleDeleteTodo={handleDeleteTodoMock}
				handleToggleTodo={handleToggleTodoMock}
			/>
		);

		const liElement = screen.getByRole("listitem");
		expect(liElement.className).toContain("list-group-item d-flex justify-content-between");
		const spanElement = screen.getByLabelText("span");
		expect(spanElement.className).toContain("align-self-center");
	});

	test("Debe de mostrar el componente completado", () => {
		todo.done = true;
		render(
			<TodoItem
				todo={todo}
				handleDeleteTodo={handleDeleteTodoMock}
				handleToggleTodo={handleToggleTodoMock}
			/>
		);
		const spanElement = screen.getByLabelText("span");
		expect(spanElement.className).toContain("text-decoration-line-through");
	});

	test("Debe de llamar handleToggleTodo cuando se da click al span", () => {
		render(
			<TodoItem
				todo={todo}
				handleDeleteTodo={handleDeleteTodoMock}
				handleToggleTodo={handleToggleTodoMock}
			/>
		);
		const spanElement = screen.getByLabelText("span");
		fireEvent.click(spanElement);
		expect(handleToggleTodoMock).toHaveBeenCalledWith(todo.id);
	});

	test("Debe de llamar handleDeleteTodo cuando se da click al button", () => {
		render(
			<TodoItem
				todo={todo}
				handleDeleteTodo={handleDeleteTodoMock}
				handleToggleTodo={handleToggleTodoMock}
			/>
		);
		const buttonElement =screen.getByRole("button", { name: "Delete" });
		fireEvent.click(buttonElement);
		expect(handleDeleteTodoMock).toHaveBeenCalledWith(todo.id);
	});
});
