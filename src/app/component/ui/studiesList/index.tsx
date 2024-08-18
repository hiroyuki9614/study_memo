import Link from 'next/link';
import Image from 'next/image';

interface StudyData {
  _id: string;
  title: string;
  duration: number;
  description: string;
  month: number; // 月の情報を追加
}

interface MonthlyStudiesProps {
  month: number;
  studies: StudyData[];
}

const MonthlyStudies: React.FC<MonthlyStudiesProps> = ({ month, studies }) => (
  <li>
    <h3>{month}月の学習内容</h3>
    <ul>
      {studies.map((study_data) => (
        <li key={study_data._id}>
          <span>学習内容: {study_data.title}</span>
          <span>{study_data.duration}h</span>
          <p>{study_data.created_at}</p>
        </li>
      ))}
    </ul>
  </li>
);

const ReadAllStudiesData: React.FC<{ allStudiesData: StudyData[] }> = ({ allStudiesData }) => {
  const studiesByMonth = allStudiesData.reduce((acc, study) => {
    if (!acc[study.month]) {
      acc[study.month] = [];
    }
    acc[study.month].push(study);
    return acc;
  }, {} as Record<number, StudyData[]>);

  return (
    <div className='grid-container-in'>
      <ul>
        <li>
          <h2>2024年の学習内容</h2>
          <ul>
            {Object.entries(studiesByMonth).map(([month, studies]) => (
              <MonthlyStudies key={month} month={Number(month)} studies={studies} />
            ))}
          </ul>
        </li>
      </ul>
    </div>
  );
};

export default ReadAllStudiesData;