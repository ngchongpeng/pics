import './SearchBar.css';
import { useState } from 'react';

function SearchBar({ onSubmit }) {
	// console.log('Rendered SearchBar');

	// state
	const [term, setTerm] = useState('');

	// handler
	const handleChange = (event) => {
		setTerm(event.target.value);
	};

	// handler
	const handleFormSubmit = (event) => {
		event.preventDefault();

		onSubmit(term);
	};

	// jsx
	return (
		<div className="search-bar">
			<form onSubmit={handleFormSubmit}>
			<label>Enter search term</label>
				<input value={term} onChange={handleChange} />
			</form>
		</div>);
}

export default SearchBar;
