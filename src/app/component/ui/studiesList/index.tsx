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
	// console.log('Studies with created_at:', allStudiesData.filter(study => study.created_at));
	const studiesByMonth = allStudiesData.reduce((acc, study) => {
		if (study.created_at) {
			const month = dayjs(study.created_at).format('MM');
			if (!acc[month]) acc[month] = [];
			acc[month].push(study);
		}
		return acc;
	}, {});
	console.log('studiesByMonth:', studiesByMonth);

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