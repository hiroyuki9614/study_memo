"use client"
import ToDo from '../component/ui/udemy-component/ToDo'
import React, { FormEvent, useState } from 'react';

const ToDoApp = () => {
	return (
		<div className="flex flex-col items-center justify-center mt-8 min-h-80 border border-black rounded-lg">
			<h1 className="text-3xl">Reminder</h1>
			<ToDo />
		</div>
	)
}

export default ToDoApp;