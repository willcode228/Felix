import React from 'react';
import styles from './BillBackdrop.module.scss';
import { LazyLoadImage } from 'react-lazy-load-image-component';

const IMG = process.env.REACT_APP_IMG;

const BillBackdrop = ({backdrop}) => {
	return (
		<div className={styles.backdrop}>
			<LazyLoadImage
				src={backdrop ? `${IMG}/original/${backdrop}` : ''}
				effect='blur'
			/>
		</div>
	);
};

export default BillBackdrop;