import Link from 'next/link';
import Image from 'next/image';
import dayjs from 'dayjs';
import utc from 'dayjs/plugin/utc';
import timezone from 'dayjs/plugin/timezone';
import 'dayjs/locale/ja';

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
	allStudiesData: any
}

const ReadAllStudiesData: React.FC<MonthlyStudiesProps> = ({ allStudiesData }) => {
	const studiesByMonth = allStudiesData.reduce((acc, study) => {
			const month = dayjs(study.created_at).format('MM');
			// monthというkeyを作って空の配列を割り当てる
			if (!acc[month]) acc[month] = [];
			acc[month].push(study);
		return acc;
	},);
	const monthlyStudies = {};
	for (let i = 1; i <= 12; i++) {
		const monthKey = i <= 9 ? `0${i}` : `${i}`;
		const monthData = studiesByMonth[monthKey] || [];
		monthlyStudies[monthKey] = monthData;
	  }
	console.log('monthlyStudies:', monthlyStudies);

	return (
		<li>
			<h3>{ }月の学習内容</h3>
			<ul>
				{allStudiesData.map((studyData: any) => (
					<li key={studyData._id}>
						<span>学習内容: {studyData.title}</span>
						<span>{studyData.duration}h</span>
						<p>{studyData.created_at}</p>
					</li>
				))}
			</ul>
		</li>
	)
};

export default ReadAllStudiesData;