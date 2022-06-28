import PropTypes from "prop-types";
import { useForm } from "../hooks";

export const TodoAdd = ({ handleAddTodo }) => {
	const { formState, onChange, onReset, description } = useForm({
		description: "",
	});

	const onSubmit = (e) => {
		e.preventDefault();

		if (description.length < 1) {
			return;
		}

		const todo = {
			id: new Date().getTime(),
			description,
			done: false,
		};

		handleAddTodo(todo);

		onReset();
	};

	return (
		<>
			<form onSubmit={onSubmit}>
				<input
					type="text"
					className="form-control"
					placeholder="¿Qué piensas hacer?"
					value={description}
					name="description"
					onChange={onChange}
				/>

				<button type="submit" className="btn btn-outline-success mt-1">
					Add
				</button>
			</form>
		</>
	);
};

TodoAdd.propTypes = {
	handleAddTodo: PropTypes.func.isRequired,
};
