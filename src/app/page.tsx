// 'use client';
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
			<h1 className='h1-style'>こん</h1>
			{allStudiesData.map((study_data: any) => (
				<div key={study_data._id}>
					<h2>￥{study_data.title}</h2>
					<h2>{study_data.duration}</h2>
					<p>{study_data.description.substring(0, 80)}...</p>
				</div>
			))}
		</div>
	);
};

export default ReadAllStudiesData;
