"use client"

import React from 'react';

// type ListProps = {
// 	todos: Todo[];
//   };
  const List: React.FC<any> = ({ todos, deleteTodos }) => {
	const complete = (id: number) => {
		deleteTodos(id);
	}
	return (
		<div>
			<h2>List</h2>
			{
				todos.map((todo: any) => {
					return (
					<div key={todo.id}>
						<button
							onClick={() => complete(todo.id)}
							className='border'
						>完了</button>
						<span>{todo.content}</span>
					</div>
				)
				})
			}
		</div>
	)
}

export default List;