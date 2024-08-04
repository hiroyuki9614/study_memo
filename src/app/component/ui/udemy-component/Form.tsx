"use client"

import { useState } from "react";

const Form = () => {
	const [enterdTodo, setEnterdTodo] = useState<string>("");
	const addTodo = (e: any) => {
		const inputVal = e.target.value;

		const newTodo = {
			id: Math.floor(Math.random() * 1e5),
			content: inputVal,
		};
	}
	return (
		<div>
			<form>
				<label htmlFor="addTask"></label>
				<input
					type="text"
					className="border border-blue-700"
					value={enterdTodo}
					onChange={(e) => setEnterdTodo(e.target.value)}
					id="addTask"
				/>
				<button
					className="ml-4 border-black rounded-lg bg-slate-400"
					onClick={addTodo}
				>作成</button>
			</form>
		</div>
	)
}

export default Form;