'use client';

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
		</main>
	);
}
