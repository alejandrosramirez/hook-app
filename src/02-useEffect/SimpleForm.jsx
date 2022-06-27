import { useEffect, useState } from "react";
import { Message } from "./Message";

export const SimpleForm = () => {
	const [formState, setFormState] = useState({
		username: "alex",
		email: "alejandro@mail.com",
	});

	const { username, email } = formState;

	const onChange = (e) => {
		const { name, value } = e.target;

		setFormState({
			...formState,
			[name]: value,
		});
	};

	useEffect(() => {}, []);

	useEffect(() => {}, [formState]);

	useEffect(() => {}, [email]);

	return (
		<>
			<h1>Simple Form</h1>

			<hr />

			<input
				type="text"
				className="form-control mt-1"
				placeholder="Username"
				name="username"
				value={username}
				onChange={onChange}
			/>

			<input
				type="email"
				className="form-control mt-1"
				placeholder="alejandro@mail.com"
				name="email"
				value={email}
				onChange={onChange}
			/>

			{username === "alex2" && <Message />}
		</>
	);
};
