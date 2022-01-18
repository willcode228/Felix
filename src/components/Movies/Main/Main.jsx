import React, { useEffect } from 'react';
import styles from './Main.module.scss';
import Films from '../../../common/Films/Films';
import { moviesApi } from '../../../api/moviesApi';
import { useSelector } from 'react-redux';

const Main = () => {
	const {popular} = useSelector(state => state.movies);
	return (
		<div className={styles.main}>
			<Films
				title="Popular Movies"
				movies={popular.results}
			/>
		</div>);
};

export default Main;