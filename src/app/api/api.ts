import axios from 'axios';

export const fetchData = async (url: any) => {
	try {
		const response = await axios.get(url);
		return response.data;
	} catch (error) {
		throw error;
	}
};
