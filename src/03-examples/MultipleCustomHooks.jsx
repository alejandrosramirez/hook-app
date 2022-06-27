import { useCounter, useFetch } from "../hooks";
import { LoadingQuote, Quote } from "./";

export const MultipleCustomHooks = () => {
	const { counter, increment } = useCounter(1);
	const { data, isLoading, hasError } = useFetch(
		`https://www.breakingbadapi.com/api/quotes/${counter}`
	);

	const { author, quote } = !!data && data[0];

	return (
		<>
			<h1>Breaking Bad Quotes</h1>

			<hr />

			{isLoading ? (
				<LoadingQuote />
			) : (
				<Quote quote={quote} author={author} />
			)}

			<button
				className="btn btn-outline-success"
				disabled={isLoading}
				onClick={() => increment(1)}
			>
				Next quote
			</button>
		</>
	);
};
