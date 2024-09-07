import './ImageList.css';
import ImageShow from './ImageShow';

function ImageList({ images }) {
	// console.log('Rendered ImageList');

	const renderedImages = images.map((image) => <ImageShow key={image.id} image={image} />);

	// jsx
	return (<div className="image-list">{renderedImages}</div>);
}

export default ImageList;
