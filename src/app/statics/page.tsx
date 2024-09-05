'use client';
import React from 'react';

import { ComposedChart, Bar, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
	{ date: '2023-01-01', totalHours: 5, averageHours: 3 },
	{ date: '2023-01-02', totalHours: 7, averageHours: 4 },
	{ date: '2023-01-01', totalHours: 5, averageHours: 3 },
	{ date: '2023-01-02', totalHours: 7, averageHours: 4 },
	{ date: '2023-01-01', totalHours: 5, averageHours: 3 },
	{ date: '2023-01-02', totalHours: 7, averageHours: 4 },
	{ date: '2023-01-01', totalHours: 5, averageHours: 3 },
	{ date: '2023-01-02', totalHours: 7, averageHours: 4 },
	// ... more data
];

export default function Statics() {
	return (
		<main className='flex justify-center flex-col'>
			<h1 className='text-center mt-1'>学習の統計</h1>
			<article className='flex justify-center mt-2'>
				<div className='mr-3 flex flex-col justify-center items-center'>
					<p className='text-center'>連続学習記録</p>
					<p className='text-center font-semibold border rounded-2xl bg-slate-200 shadow-lg w-24 h-10 flex items-center justify-center'>999days</p>
				</div>
				<div className='mr-3 ml-2 flex flex-col justify-center items-center'>
					<p className='text-center'>今年の学習時間</p>
					<p className='text-center font-semibold border rounded-2xl bg-slate-200 shadow-lg w-24 h-10 flex items-center justify-center'>9999h</p>
				</div>
				<div className='ml-3 flex flex-col justify-center items-center'>
					<p className='text-center'>平均学習時間</p>
					<p className='text-center font-semibold border border-solid rounded-2xl bg-slate-200 shadow-lg w-24 h-10 flex items-center justify-center'>999h</p>
				</div>
			</article>
			<article className='flex justify-center mt-5'>
				<div className='w-full max-w-md'>
					<ResponsiveContainer width='100%' height={200}>
						<ComposedChart data={data}>
							<CartesianGrid strokeDasharray='3 3' />
							<XAxis dataKey='date' />
							<YAxis yAxisId='left' />
							<YAxis yAxisId='right' orientation='right' />
							<Tooltip />
							<Bar yAxisId='left' dataKey='totalHours' fill='#8884d8' name='総学習時間' />
							<Line yAxisId='right' type='monotone' dataKey='averageHours' stroke='#82ca9d' name='平均学習時間' />
						</ComposedChart>
					</ResponsiveContainer>
				</div>
			</article>
			<article className='flex justify-center flex-col items-center'>
				<h1 className='font-bold mb-1'>最も多く勉強した内容</h1>
				<div className='mb-4 flex justify-center items-center w-10/12 h-11 border rounded-2xl bg-slate-200 shadow-lg'>
					<p className='flex items-center'>
						<span className='font-semibold'>JavaScript</span>
						<span className='text-lg ml-4'>9999times</span>
					</p>
				</div>
				<div className='mb-4 flex justify-center items-center w-10/12 h-11 border rounded-2xl bg-slate-200 shadow-lg'>
					<p className='flex items-center'>
						<span className='font-semibold'>Ruby</span>
						<span className='text-lg ml-4'>9999times</span>
					</p>
				</div>
				<div className='flex justify-center items-center w-10/12 h-11 border rounded-2xl bg-slate-200 shadow-lg'>
					<p className='flex items-center'>
						<span className='font-semibold'>Python</span>
						<span className='text-lg ml-4'>9999times</span>
					</p>
				</div>
			</article>
		</main>
	);
}
