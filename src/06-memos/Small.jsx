import React from "react";
import PropTypes from "prop-types";

export const Small = React.memo(({ counter }) => {
	console.log("Hola de nuevo xd");
	return <small>{counter}</small>;
});

Small.propTypes = {
	counter: PropTypes.number.isRequired,
};
