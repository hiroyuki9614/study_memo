import Link from 'next/link';
import Image from 'next/image';
import CreateStudiesMemo from './component/ui/form/index';
import ReadAllStudiesData from './component/ui/studiesList/index';
import Form from './component/ui/form/index';

const getStudiesDataThisYear = async () => {
	const now = new Date();
	const year = now.getFullYear();
	const startDate = year + '-01-01';
	const endDate = year + '-12-31';
	console.log(startDate);
	try {
		const response = await fetch(`http://localhost:3000/api/studies-memo-monthly?startDate=${startDate}&endDate=${endDate}`, { cache: 'no-store' });
		const jsonData = await response.json();
		const StudiesDataThisYear = jsonData.studies_memo;
		return StudiesDataThisYear;
	} catch (err) {
		console.error(err);
		return [];
	}
};
const getStudiesDataLastYear = async () => {
	const now = new Date();
	const lastYear = now.getFullYear() - 1;
	const startDate = lastYear + '-01-01';
	const endDate = lastYear + '-12-31';
	try {
		const response = await fetch(`http://localhost:3000/api/studies-memo-monthly?startDate=${startDate}&endDate=${endDate}`, { cache: 'no-store' });
		const jsonData = await response.json();
		const AllStudiesData = jsonData.studies_memo;
		return AllStudiesData;
	} catch (err) {
		console.error(err);
		return [];
	}
};

const App = async () => {
	const now = new Date();
	const year = now.getFullYear();
	const lastYear = now.getFullYear() - 1;
	const allStudiesData = await getStudiesDataThisYear();
	const lastStudiesData = await getStudiesDataLastYear();
	return (
		<div className='grid-container-in pt-5'>
			<Form />
			<ReadAllStudiesData key={`studies-${lastYear}`} allStudiesData={lastStudiesData} year={lastYear} />
			<ReadAllStudiesData key={`studies-${year}`} allStudiesData={allStudiesData} year={year} />
		</div>
	);
};

export default App;
