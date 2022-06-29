import { renderHook } from "@testing-library/react";
import { useForm } from "../../src/hooks/useForm";

describe("Pruebas en useForm", () => {
	const initialForm = {
		name: "Alejandro",
		email: "alejandro@mail.com",
	};

	test("Debe de retornar los valores por defecto", () => {
		const { result } = renderHook(() => useForm(initialForm));
		expect(result.current).toEqual({
			name: initialForm.name,
			email: initialForm.email,
			formState: initialForm,
			onChange: expect.any(Function),
			onReset: expect.any(Function),
		});
	});
});
