import { useTodos } from "../hooks";
import { TodoAdd } from "./TodoAdd";
import { TodoList } from "./TodoList";

export const TodoApp = () => {
	const {
		todos,
		todosCounter,
		pendingTodosCounter,
		handleAddTodo,
		handleDeleteTodo,
		handleToggleTodo,
	} = useTodos();

	return (
		<>
			<h1>
				Todo App ({todosCounter}),{" "}
				<small>pendientes: {pendingTodosCounter}</small>
			</h1>

			<hr />

			<div className="row">
				<div className="col-7">
					<TodoList
						todos={todos}
						handleDeleteTodo={handleDeleteTodo}
						handleToggleTodo={handleToggleTodo}
					/>
				</div>

				<div className="col-5">
					<h4>Add TODO</h4>

					<hr />

					<TodoAdd handleAddTodo={handleAddTodo} />
				</div>
			</div>
		</>
	);
};
