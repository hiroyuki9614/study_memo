'use client'
import React from 'react';
import dayjs from 'dayjs';
import utc from 'dayjs/plugin/utc';
import timezone from 'dayjs/plugin/timezone';
import 'dayjs/locale/ja';
import { useState } from 'react'

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
	allStudiesData: StudyData[]
}

const ReadAllStudiesData: React.FC<MonthlyStudiesProps> = ({ allStudiesData }) => {
	const [isOpen, setIsOpen] = useState<boolean>(false);
	const studiesByMonth = allStudiesData.reduce((acc, study) => {
		const month = dayjs(study.created_at).format('MM');
		if (!acc[month]) acc[month] = [];
		acc[month].push(study);
		return acc;
	}, {} as Record<string, StudyData[]>);

	const monthlyStudies: Record<string, StudyData[]> = {};
	for (let i = 1; i <= 12; i++) {
		const monthKey = i <= 9 ? `0${i}` : `${i}`;
		monthlyStudies[monthKey] = studiesByMonth[monthKey] || [];
	}

	// 月の順序を1月から12月に並べ替え
	const sortedMonths = Object.keys(monthlyStudies).sort((a, b) => parseInt(a) - parseInt(b));

	return (
		<div>
			{sortedMonths.map((month) => (
				<div key={month}>
					<h3>{parseInt(month)}月の学習内容</h3>
					{monthlyStudies[month].length > 0 ? (
						<ul>
							{monthlyStudies[month].map((studyData) => (
								<li key={studyData._id}>
									<span>* 学習内容: {studyData.title} {studyData.duration}h</span>
									<p>{dayjs(studyData.created_at).format('YYYY年MM月DD日 HH:mm')}</p>
								</li>
							))}
						</ul>
					) : (
						<p>この月の学習記録はありません。</p>
					)}
				</div>
			))}
		</div>
	);
};

export default ReadAllStudiesData;