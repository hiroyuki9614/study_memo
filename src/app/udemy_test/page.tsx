"use client"
import ToDo from '../component/ui/udemy-component/ToDo'
import React, { FormEvent, useState } from 'react';

const ToDoApp = () => {
	// const [task, setTask] = useState<string>("");
	// let taskLists: string | any = [];
	// const pushTask = (e: any) => {
	// 	const inputVal = e.target.value;
	// 	const newTodo = taskLists.push(inputVal);
	// };
	return (
		<div className="flex flex-col items-center justify-center mt-8 min-h-80 border border-black rounded-lg">
			<h1 className="text-3xl">Reminder</h1>
			<ToDo />
		</div>
	)
}

export default ToDoApp;