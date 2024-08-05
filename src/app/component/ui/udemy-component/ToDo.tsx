import { useState } from "react";
import Form from "./Form";
import List from "./List";
type Todo = {
	id: number;
	content: string;
  };

const Todo = () => {
	const todosList = [
		{
			id: 1,
			content: "店予約する",
		},
		{
			id: 2,
			content: "卵買う",
		},
		{
			id: 3,
			content: "郵便出す",
		},
	];
	const [todos, setTodos] = useState<any>(todosList);
	const deleteTodos = (id :number) => {
		const newTodos = todos.filter((todo: any) => {
			return todo.id !== id;
		});
		setTodos(newTodos);
	}
	const createTodo = (todo: Todo) => {
		setTodos([...todos, todo]);
	}
	return (
		<div className="mb-5">
			<List todos={todos} deleteTodos={deleteTodos} />
			<Form createTodo={createTodo} />
		</div>
	)
};

export default Todo;