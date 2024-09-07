function ImageShow({ image }) {
	// console.log('Rendered ImageShow');

	// jsx
	return (
		<img src={image.urls.small} alt={image.alt_description} />
	);
}

export default ImageShow;
