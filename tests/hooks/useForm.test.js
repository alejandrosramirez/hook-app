import { act, renderHook } from "@testing-library/react";
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

	test("Debe de cambiar el nombre del formulario", () => {
		const value = "Juan";
		const { result } = renderHook(() => useForm(initialForm));
		const { onChange } = result.current;
		act(() => {
			onChange({
				target: {
					name: "name",
					value,
				},
			});
		});
		expect(result.current.name).toBe(value);
		expect(result.current.formState.name).toBe(value);
	});

	test("Debe de realizar el reset del formulario", () => {
		const value = "Juan";
		const { result } = renderHook(() => useForm(initialForm));
		const { onChange, onReset } = result.current;
		act(() => {
			onChange({
				target: {
					name: "name",
					value,
				},
			});
			onReset();
		});
		expect(result.current.name).toBe(initialForm.name);
		expect(result.current.formState.name).toBe(initialForm.name);
	});
});
