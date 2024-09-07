import './custom.css';
import { useState } from 'react';
import SearchBar from './components/SearchBar';
import ImageList from './components/ImageList';
import searchImages from './api';

function App() {
	// console.log('Rendered App');

	// state
	const [images, setImages] = useState([]);

	// handler
	const handleSubmit = async (term) => {
		const result = await searchImages(term);

		setImages(result);
	};

	// jsx
	return (
		<div>
			<SearchBar onSubmit={handleSubmit} />
			<ImageList images={images} />
		</div>);
}

export default App;
