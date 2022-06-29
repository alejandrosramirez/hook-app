import { useState } from "react";

export const useCounter = (value = 10) => {
	const [counter, setCounter] = useState(value);

	const increment = (value = 1) => {
		setCounter((c) => c + value);
	};

	const decrement = (value = 1) => {
		setCounter((c) => c - value);
	};

	const reset = () => {
		setCounter(value);
	};

	return { counter, increment, decrement, reset };
};
