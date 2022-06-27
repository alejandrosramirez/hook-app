import { useCallback, useState } from "react";
import { Son } from "./Son";

export const Father = () => {
	const [value, setValue] = useState(0);
	const increment = useCallback((number) => {
		setValue((value) => value + number);
	}, []);

	const numbers = [2, 4, 6, 8, 10];

	return (
		<div>
			<h1>Father</h1>
			<p>Total: {value}</p>

			<hr />

			{numbers.map((number) => (
				<Son key={number} number={number} increment={increment} />
			))}
		</div>
	);
};
