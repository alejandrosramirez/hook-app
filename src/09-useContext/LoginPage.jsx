import { useContext } from "react";
import { UserContext } from "./context/UserContext";

export const LoginPage = () => {
	const { user, setUser } = useContext(UserContext);

	return (
		<>
			<h1>Login Page</h1>

			<hr />

			<pre>{JSON.stringify(user, null, 3)}</pre>

			<button
				className="btn btn-outline-success"
				onClick={() =>
					setUser({
						id: 1,
						name: "Alex Salgado",
						email: "alex@mail.com",
					})
				}
			>
				Set user
			</button>
		</>
	);
};
