"use client"

import { useState } from "react";
type Todo = {
	id: number;
	content: string;
};
const Form = ({ createTodo }: { createTodo: any; }) => {
	const [enterdTodo, setEnteredTodo] = useState<string>("");
	const addTodo = (e: any) => {
		e.preventDefault();

		const newTodo = {
			id: Math.floor(Math.random() * 1e5),
			content: enterdTodo,
		};
		createTodo(newTodo);
		setEnteredTodo("");
	};
	return (
		<div>
			<form onSubmit={addTodo}>
				<label htmlFor="addTask"></label>
				<input
					type="text"
					className="border border-blue-700"
					value={enterdTodo}
					onChange={(e) => setEnteredTodo(e.target.value)}
					id="addTask"
				/>
				<button
					className="ml-4 border-black rounded-lg bg-slate-400"
				>作成</button>
			</form>
		</div>
	)
}

export default Form;