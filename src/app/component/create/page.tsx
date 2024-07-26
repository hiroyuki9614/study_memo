'use client';
import { useState } from 'react';
import React, { FormEvent } from 'react';
// import useAuth from '@/app/utils/useAuth';

const CreateItem = () => {
	const [title, setTitle] = useState('');
	const [duration, setDuration] = useState('');
	// const loginUserEmail = useAuth();
	const [description, setDescription] = useState('');
	const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		try {
			const response = await fetch('http://localhost:3000/api/item/create', {
				method: 'POST',
				headers: {
					Accept: 'application/json',
					'Content-Type': 'application/json',
					Authorization: `Bearer ${localStorage.getItem('token')}`,
				},
				body: JSON.stringify({
					title: title,
					duration: duration,
					// image: image,
					description: description,
					// email: loginUserEmail,
				}),
			});
			const jsonData = await response.json();
			alert(jsonData.message);
		} catch (err: any) {
			alert(err.message);
		}
	};
	// if (loginUserEmail) {
	return (
		<div>
			<h1>アイテム作成</h1>
			<form onSubmit={handleSubmit}>
				<input type='text' onChange={(e) => setTitle(e.target.value)} name='title' placeholder='アイテム名' required />
				<input type='text' onChange={(e) => setDuration(e.target.value)} name='duration' placeholder='学習時間' required />
				<textarea name='description' onChange={(e) => setDescription(e.target.value)} rows={15} placeholder='学習内容' required></textarea>
				<button>作成</button>
			</form>
		</div>
	);
};

export default CreateItem;
