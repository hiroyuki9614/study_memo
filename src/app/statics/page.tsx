'use client';
import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
	{
		name: 'Page A',
		uv: 4000,
		pv: 2400,
		amt: 2400,
	},
	{
		name: 'Page B',
		uv: 3000,
		pv: 1398,
		amt: 2210,
	},
	{
		name: 'Page C',
		uv: 2000,
		pv: 9800,
		amt: 2290,
	},
	{
		name: 'Page D',
		uv: 2780,
		pv: 3908,
		amt: 2000,
	},
	{
		name: 'Page E',
		uv: 1890,
		pv: 4800,
		amt: 2181,
	},
	{
		name: 'Page F',
		uv: 2390,
		pv: 3800,
		amt: 2500,
	},
	{
		name: 'Page G',
		uv: 3490,
		pv: 4300,
		amt: 2100,
	},
];

export default function Statics() {
	return (
		<main className='flex justify-center flex-col'>
			<h1 className='text-center mt-5'>学習の統計</h1>
			<article className='flex justify-center mt-5'>
				<div className='mr-3 flex flex-col justify-center'>
					<p className='text-center'>連続学習記録</p>
					<p className='text-center font-semibold border rounded-2xl bg-slate-200 shadow-lg w-24 h-12 flex items-center justify-center'>31days</p>
				</div>
				<div className='mr-3 ml-2 flex flex-col justify-center'>
					<p className='text-center'>今年の学習時間</p>
					<p className='text-center font-semibold border rounded-2xl bg-slate-200 shadow-lg w-24 h-12 flex items-center justify-center'>460h</p>
				</div>
				<div className='ml-3 flex flex-col justify-center'>
					<p className='text-center'>平均学習時間</p>
					<p className='text-center font-semibold border border-solid rounded-2xl bg-slate-200 shadow-lg w-24 h-12 flex items-center justify-center'>2h</p>
				</div>
			</article>
			<article className='w-11/12 h-64'>
				<ResponsiveContainer width='100%' height='100%'>
					<LineChart width={300} height={100} data={data}>
						<Line type='monotone' dataKey='pv' stroke='#8884d8' strokeWidth={2} />
					</LineChart>
				</ResponsiveContainer>
			</article>
		</main>
	);
}
