import Link from 'next/link';
import Image from 'next/image';

const getAllStudiesData = async () => {
	const response = await fetch('http://localhost:3000/api/studies-memo', { cache: 'no-store' });
	const jsonData = await response.json();
	const AllStudiesData = jsonData.studies_memo;
	return AllStudiesData;
};

const ReadAllStudiesData = async () => {
	const allStudiesData = await getAllStudiesData();
	return (
		<div className='grid-container-in'>
			{allStudiesData.map((study_data: any) => (
				<div key={study_data._id}>
					<h1>学習内容:{study_data.title}</h1>
					<h2>{study_data.duration}h</h2>
					<p>{study_data.description}</p>
				</div>
			))}
		</div>
	);
};

export default ReadAllStudiesData;
