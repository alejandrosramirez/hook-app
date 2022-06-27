import { useEffect, useReducer } from "react";
import { TodoAdd } from "./TodoAdd";
import { TodoList } from "./TodoList";
import { todoReducer } from "./todoReducer";

const initialState = [
	// {
	// 	id: new Date().getTime(),
	// 	description: "Recolectar la basura",
	// 	done: false,
	// },
	// {
	// 	id: new Date().getTime() * 3,
	// 	description: "Recolectar a la vecina",
	// 	done: false,
	// },
];

const init = () => {
	return JSON.parse(localStorage.getItem("todos")) || [];
};

export const TodoApp = () => {
	const [todos, dispatch] = useReducer(todoReducer, initialState, init);

	useEffect(() => {
		localStorage.setItem("todos", JSON.stringify(todos));
	}, [todos]);

	const handleTodo = (todo) => {
		const action = {
			type: "[TODO] Add Todo",
			payload: todo,
		};

		dispatch(action);
	};

	const handleDeleteTodo = (id) => {
		dispatch({
			type: "[TODO] Delete Todo",
			payload: id,
		});
	};

	const handleToggleTodo = (id) => {
		dispatch({
			type: "[TODO] Toggle Todo",
			payload: id,
		});
	};

	return (
		<>
			<h1>
				Todo App (10), <small>pendientes: 2</small>
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

					<TodoAdd handleTodo={handleTodo} />
				</div>
			</div>
		</>
	);
};
