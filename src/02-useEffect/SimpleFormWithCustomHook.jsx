import { useForm } from "../hooks";

export const SimpleFormWithCustomHook = () => {
	const { formState, onChange, onReset, username, email, password } = useForm({
		username: "",
		email: "",
		password: "",
	});

	// const { username, email, password } = formState;

	return (
		<>
			<h1>Simple Form with custom hook</h1>

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

			<input
				type="password"
				className="form-control mt-1"
				placeholder="Password"
				name="password"
				value={password}
				onChange={onChange}
			/>

			<button className="btn btn-outline-primary mt-1" onClick={onReset}>
				Borrar
			</button>
		</>
	);
};
