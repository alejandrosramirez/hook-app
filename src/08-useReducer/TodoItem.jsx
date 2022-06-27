import PropTypes from "prop-types";

export const TodoItem = ({ todo, handleDeleteTodo, handleToggleTodo }) => {
	return (
		<>
			<li
				className="list-group-item d-flex justify-content-between"
				key={todo.id}
			>
				<span
					className={`align-self-center ${
						todo.done ? "text-decoration-line-through" : ''
					}`}
					onClick={() => handleToggleTodo(todo.id)}
				>
					{todo.description}
				</span>
				<button
					className="btn btn-outline-danger"
					onClick={() => handleDeleteTodo(todo.id)}
				>
					Delete
				</button>
			</li>
		</>
	);
};

TodoItem.propTypes = {
	todo: PropTypes.object.isRequired,
	handleDeleteTodo: PropTypes.func.isRequired,
	handleToggleTodo: PropTypes.func.isRequired,
};
