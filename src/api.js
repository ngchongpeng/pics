import axios from 'axios';

const searchImages = async () => {
	const response = await axios.get('https://api.unsplash.com/search/photos', {
		headers: {
			Authorization: 'Client-ID aDI_dYPD_HN0Y6aek0v-0IL5hkskAvoREmWCtPZD4dA'
		},
		params: {
			query: 'cars'
		}
	});

	console.log(response);

	return response;
};

export default searchImages;
