import React from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';

const IMG = process.env.REACT_APP_IMG;

const FilmCardImg = ({isBigSize, path, alt}) => {
	const imgSize = isBigSize ? 'w355_and_h200_multi_faces' : 'w220_and_h330_face';

	return (
		<LazyLoadImage
			src={`${IMG}/${imgSize}/${path}`}
			effect='blur'
			alt={alt}
		/>
	);
};

export default FilmCardImg;