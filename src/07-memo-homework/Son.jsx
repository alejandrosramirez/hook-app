import React from 'react';

export const Son = React.memo(({ number, increment }) => {
	console.log("  Me volví a generar :(  ");

	return (
		<button
			className="btn btn-outline-primary mr-1"
			onClick={() => increment(number)}
		>
			{number}
		</button>
	);
});
