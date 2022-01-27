import React from 'react';
import styles from './BillCardImg.module.scss';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import {ReactComponent as NotFoundImageIcon} from '../../../assets/icons/image-not-found.svg';

const IMG = process.env.REACT_APP_IMG;

const FilmCardImg = ({isBigSize, path, alt}) => {
	const imgSize = isBigSize ? 'w355_and_h200_multi_faces' : 'w220_and_h330_face';

	if(!path) {
		return (
			<div className={styles.error}>
				<NotFoundImageIcon />
			</div>
		);
	}

	return (
		<LazyLoadImage
			src={`${IMG}/${imgSize}/${path}`}
			effect='blur'
			alt={alt}
		/>
	);
};

export default FilmCardImg;