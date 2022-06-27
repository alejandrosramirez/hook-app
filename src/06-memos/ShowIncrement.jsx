export const ShowIncrement = ({ increment }) => {
	return (
		<button className="btn btn-outline-success" onClick={() => increment(5)}>
			+1
		</button>
	);
};
