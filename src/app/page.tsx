import Link from 'next/link';
import Image from 'next/image';
import CreateStudiesMemo from './component/ui/form/index';
import ReadAllStudiesData from './component/ui/studiesList/index';

const getStudiesDataThisYear = async () => {
	try {
		const response = await fetch('http://localhost:3000/api/studies-memo', { cache: 'no-store' });
		const jsonData = await response.json();
		const AllStudiesData = jsonData.studies_memo;
		return AllStudiesData;
	} catch (err) {
		console.error(err);
		return [];
	}
};
const getStudiesDataLastYear = async () => {
	try {
		const response = await fetch('http://localhost:3000/api/studies-memo', { cache: 'no-store' });
		const jsonData = await response.json();
		const AllStudiesData = jsonData.studies_memo;
		return AllStudiesData;
	} catch (err) {
		console.error(err);
		return [];
	}
};

const App = async () => {
	const allStudiesData = await getStudiesDataThisYear();
	return (
		<div className='grid-container-in'>
			<ReadAllStudiesData allStudiesData={allStudiesData} />
			{/* <CreateStudiesMemo /> */}
		</div>
	);
};

export default App;
