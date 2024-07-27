'use client';
import { useState } from 'react';
import React, { FormEvent } from 'react';

const CreateStudiesMemo = () => {
	const [title, setTitle] = useState('');
	const [duration, setDuration] = useState('');
	const [description, setDescription] = useState('');

	const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		try {
			const response = await fetch('http://localhost:3000/api/studies-memo', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify({
					title,
					duration: parseInt(duration, 10),
					description,
				}),
			});
			const data = await response.json();
			alert(data.message);
		} catch (error) {
			alert('学習メモの作成に失敗しました');
		}
	};

	return (
		<div>
			<h1>学習メモ作成</h1>
			<form onSubmit={handleSubmit}>
				<input type='text' onChange={(e) => setTitle(e.target.value)} name='title' placeholder='タイトル' required />
				<input type='number' onChange={(e) => setDuration(e.target.value)} name='duration' placeholder='学習時間' required />
				<textarea name='description' onChange={(e) => setDescription(e.target.value)} rows={15} placeholder='学習内容' required></textarea>
				<button type='submit'>作成</button>
			</form>
		</div>
	);
};

export default CreateStudiesMemo;
