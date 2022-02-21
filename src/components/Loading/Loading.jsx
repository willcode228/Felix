import React from 'react';
import styles from './Loading.module.scss';
import { useSelector } from 'react-redux';
import ScrollLoader from '../../common/ScrollLoader/ScrollLoader';

const Loading = () => {
	const {isLoading} = useSelector(state => state.loading);

	return (
		<div className={`${styles.loading} ${isLoading && styles.loading__show}`}>
			<ScrollLoader />
		</div>
	);
};

export default Loading;