const initialState = [
	{
		id: 1,
		todo: "Recoger la basura de la calle",
		done: false,
	},
];

const todoReducer = (state = initialState, action = {}) => {
	if (action.type === "[TODO] add todo") {
		return [
			...state,
			action.payload,
		];
	}

	return state;
};

let todos = todoReducer();

const newTodo = {
	id: 2,
	todo: "Jalarle a la cadena",
	done: false,
};

const addTodoAction = {
	type: "[TODO] add todo",
	payload: newTodo,
};

todos = todoReducer(todos, addTodoAction);

console.log(todos);
