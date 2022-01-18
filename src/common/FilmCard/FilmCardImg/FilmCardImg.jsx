import React from 'react';
const IMG = process.env.REACT_APP_IMG;

const FilmCardImg = ({isBigSize, path, alt}) => {
	const imgSize = isBigSize ? 'w355_and_h200_multi_faces' : 'w220_and_h330_face';

	return (
		<img
			src={`${IMG}/${imgSize}/${path}`}
			alt={alt}
		/>
	);
};

export default FilmCardImg;