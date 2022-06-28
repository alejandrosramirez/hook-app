import PropTypes from "prop-types";
import { TodoItem } from "./TodoItem";

export const TodoList = ({
	todos = [],
	handleDeleteTodo,
	handleToggleTodo,
}) => {
	return (
		<>
			<ul className="list-group">
				{todos.map((todo) => (
					<TodoItem
						key={todo.id}
						todo={todo}
						handleDeleteTodo={handleDeleteTodo}
						handleToggleTodo={handleToggleTodo}
					/>
				))}
			</ul>
		</>
	);
};

TodoList.propTypes = {
	todos: PropTypes.array.isRequired,
	handleDeleteTodo: PropTypes.func.isRequired,
	handleToggleTodo: PropTypes.func.isRequired,
};
