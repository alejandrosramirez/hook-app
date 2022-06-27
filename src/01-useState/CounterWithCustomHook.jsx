import { useCounter } from "../hooks";

export const CounterWithCustomHook = () => {
	const { counter, increment, reset, decrement } = useCounter();

	return (
		<>
			<h1>Counter with custom hook: {counter}</h1>

			<hr />

			<button className="btn btn-outline-success" onClick={() => increment(2)}>+1</button>
			<button className="btn btn-outline-success" onClick={reset}>Reset</button>
			<button className="btn btn-outline-success" onClick={() => decrement(2)}>-1</button>
		</>
	);
};
