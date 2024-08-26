'use client';
import React from 'react';
import dayjs from 'dayjs';
import utc from 'dayjs/plugin/utc';
import timezone from 'dayjs/plugin/timezone';
import 'dayjs/locale/ja';
import { useState } from 'react';

dayjs.extend(utc);
dayjs.extend(timezone);
dayjs.locale('ja');

interface StudyData {
	_id: string;
	title: string;
	duration: number;
	description: string;
	created_at: string;
}

interface MonthlyStudiesProps {
	allStudiesData: StudyData[];
	year: number;
}

const ReadAllStudiesData: React.FC<MonthlyStudiesProps> = ({ allStudiesData, year }) => {
	const [isOpenYear, setIsOpenYear] = useState<boolean>(false);
	const [openMonths, setOpenMonths] = useState<Record<string, boolean>>({});
	// 学習時間を月ごとに分ける
	const studiesByMonth = allStudiesData.reduce((acc, study) => {
		const month = dayjs(study.created_at).format('MM');
		if (!acc[month]) acc[month] = [];
		acc[month].push(study);
		return acc;
	}, {} as Record<string, StudyData[]>);
	// 学習時間オブジェクト
	const monthlyStudies: Record<string, StudyData[]> = {};
	// 1月から12月を作る
	for (let i = 1; i <= 12; i++) {
		// 10月からフォーマットが変わる対策
		const monthKey = i <= 9 ? `0${i}` : `${i}`;
		// studiesByMonthで抜き出したキーに合致した月を代入
		monthlyStudies[monthKey] = studiesByMonth[monthKey] || [];
	}

	// 月の順序を1月から12月に並べ替え 出力 0102(省略)101112
	const sortedMonths = Object.keys(monthlyStudies).sort((a, b) => parseInt(a) - parseInt(b));
	const handleYearClick = () => {
		setIsOpenYear(!isOpenYear);
	};

	const handleMonthClick = (month: string) => {
		setOpenMonths((prev) => ({
			...prev,
			[month]: !prev[month],
		}));
	};
	return (
		<article className='flex items-center box-border flex-col justify-center pt-2'>
			<div className='bg-slate-50 rounded-2xl shadow shadow-slate-500 mb-4 p-4 w-10/12' onClick={handleYearClick}>
				<h2 className='study-record__month'>{year}年の学習内容</h2>
			</div>
			{isOpenYear &&
				sortedMonths.map((month) => (
					<div key={month} className='bg-slate-50 rounded-2xl shadow shadow-slate-500 mb-4 p-4 w-10/12'>
						<h2 className='text-lg text-center pb-3' onClick={() => handleMonthClick(month)}>
							{parseInt(month)}月の学習内容
						</h2>
						{openMonths[month] && (
							<div className=''>
								{monthlyStudies[month].length > 0 ? (
									<ul>
										{monthlyStudies[month].map((studyData) => (
											<li key={studyData._id} className='[&:not(:last-child)]:border-b border-1 px-2 p-4'>
												<dl>
													<div>
														<dt>記録日時:</dt>
														<dd className='indent-4'>{dayjs(studyData.created_at).format('YYYY年MM月DD日 HH:mm')}</dd>
													</div>
													<div>
														<dt>学習時間</dt>
														<dd className='indent-4'>{studyData.duration}h</dd>
													</div>
													<div className=''>
														<dt>学習内容</dt>
														<dd className='indent-4'>学習内容: {studyData.title}</dd>
													</div>
												</dl>
											</li>
										))}
									</ul>
								) : (
									<p>この月の学習記録はありません。</p>
								)}
							</div>
						)}
					</div>
				))}
		</article>
	);
};

export default ReadAllStudiesData;
