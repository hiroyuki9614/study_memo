'use client';
import React, { useState, useEffect } from 'react';
import { ComposedChart, Bar, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const Statics = () => {
	const [allStudiesData, setAllStudiesData] = useState([]);
	useEffect(() => {
		const getStudiesData = async () => {
			try {
				const response = await fetch(`http://localhost:3000/api/studies-memo`, { cache: 'no-store' });
				const jsonData = await response.json();
				const StudiesData = jsonData.studies_memo;
				setAllStudiesData(StudiesData);
			} catch (err) {
				console.error(err);
				setAllStudiesData([]);
			}
		};

		getStudiesData();
	}, []);
	console.log({ allStudiesData });

	// durationの合計を計算
	const totalDuration = allStudiesData.reduce((sum, item) => sum + item.duration, 0);

	console.log(totalDuration); // 総学習時間（時間単位）

	const totalStudyDays = () => {
		// 日付のみを抽出し、重複を除去
		const uniqueDates = new Set(allStudiesData.map((item) => item.study_date.split('T')[0]));

		// 重複を除いた日付の数をカウント
		return uniqueDates.size;
	};

	const totalDays = totalStudyDays();
	// console.log(`合計学習日数: ${totalDays}日`);
	// 日付の重複削除
	// const sortedDates = [...new Set(dates.map(d => d.toDateString()))]
	// .map(d => new Date(d))
	// .sort((a, b) => b - a);

	const calculateAverageStudyTime = () => {
		if (allStudiesData.length === 0) return 0; // データがない場合は0を返す

		const totalDuration = allStudiesData.reduce((sum, item) => sum + item.duration, 0);
		const averageDuration = totalDuration / allStudiesData.length;

		// 小数点以下1桁に丸める
		return Math.round(averageDuration * 10) / 10;
	};

	const getMostFrequentCategory = () => {
		if (allStudiesData.length === 0) return 0; // データがない場合は0を返す
	};

	const averageStudyTime = calculateAverageStudyTime();
	console.log(`平均学習時間: ${averageStudyTime}時間`);

	const data = [
		{ date: 'Jan', totalHours: 5, averageHours: 3 },
		{ date: 'Feb', totalHours: 7, averageHours: 4 },
		{ date: 'Mar', totalHours: 5, averageHours: 3 },
		{ date: 'May', totalHours: 7, averageHours: 4 },
		{ date: 'Jul', totalHours: 5, averageHours: 3 },
		{ date: 'Aug', totalHours: 7, averageHours: 4 },
		{ date: 'Sep', totalHours: 5, averageHours: 3 },
		{ date: 'Oct', totalHours: 7, averageHours: 4 },
		{ date: 'Nov', totalHours: 5, averageHours: 3 },
		{ date: 'Dec', totalHours: 5, averageHours: 3 },
	];

	function organizeDataByMonth(allStudiesData) {
		// 月の略称マッピング
		const monthAbbreviations = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

		// すべての月について初期データを作成
		const monthlyData = monthAbbreviations.reduce((acc, month) => {
			acc[month] = { totalHours: 0, studyCount: 0 };
			return acc;
		}, {});

		allStudiesData.forEach((study) => {
			const date = new Date(study.study_date);
			const monthKey = monthAbbreviations[date.getMonth()];

			monthlyData[monthKey].totalHours += study.duration;
			monthlyData[monthKey].studyCount += 1;
		});

		// 平均を計算し、指定された形式に変換
		const formattedData = monthAbbreviations.map((month) => ({
			date: month,
			totalHours: Number((monthlyData[month].totalHours / 60).toFixed(2)),
			averageHours:
				monthlyData[month].studyCount > 0
					? Number((monthlyData[month].totalHours / monthlyData[month].studyCount / 60).toFixed(2))
					: 0,
		}));

		return formattedData;
	}

	const getMostFrequentCategories = () => {
		if (allStudiesData.length === 0) return [];

		// カテゴリーごとの出現回数をカウント
		const categoryCount = allStudiesData.reduce((acc, item) => {
			const category = item.category || '未分類'; // 空のカテゴリーは「未分類」として扱う
			acc[category] = (acc[category] || 0) + 1;
			return acc;
		}, {});

		// 出現回数でソートした配列に変換
		const sortedCategories = Object.entries(categoryCount)
			.map(([category, count]) => ({
				category,
				count,
			}))
			.sort((a, b) => b.count - a.count); // 降順でソート

		return sortedCategories;
	};

	// 使用部分
	const categoryRanking = getMostFrequentCategories();

	const formattedMonthlyData = organizeDataByMonth(allStudiesData);
	console.log(formattedMonthlyData);

	return (
		<main className='flex justify-center flex-col'>
			<h1 className='font-bold text-center mb-1'>学習の統計</h1>
			<article className='flex justify-center mt-2'>
				<div className='mr-3 flex flex-col justify-center items-center'>
					<p className='text-center'>学習した合計日数</p>
					<p className='text-center font-semibold border rounded-2xl bg-slate-200 shadow-lg w-24 h-10 flex items-center justify-center'>
						{totalDays} d
					</p>
				</div>
				<div className='mr-3 ml-2 flex flex-col justify-center items-center'>
					<p className='text-center'>今年の学習時間</p>
					<p className='text-center font-semibold border rounded-2xl bg-slate-200 shadow-lg w-24 h-10 flex items-center justify-center'>
						{totalDuration} h
					</p>
				</div>
				<div className='ml-3 flex flex-col justify-center items-center'>
					<p className='text-center'>平均学習時間</p>
					<p className='text-center font-semibold border border-solid rounded-2xl bg-slate-200 shadow-lg w-24 h-10 flex items-center justify-center'>
						{averageStudyTime} h
					</p>
				</div>
			</article>
			<article className='flex justify-center mt-5'>
				<div className='w-full max-w-lg'>
					<ResponsiveContainer width='100%' height={200}>
						<ComposedChart data={formattedMonthlyData}>
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
				{categoryRanking.map((item, index) => (
					<div
						key={item.category}
						className='mb-4 flex justify-center items-center w-10/12 h-11 border rounded-2xl bg-slate-200 shadow-lg'
					>
						<p className='flex items-center'>
							<span className='font-semibold'>{item.category}</span>
							<span className='text-lg ml-4'>{item.count} times</span>
						</p>
					</div>
				))}
			</article>
		</main>
	);
};

export default Statics;
