import React, { useEffect } from 'react';
import styles from './Main.module.scss';
import Films from '../../../common/Films/Films';
import { moviesApi } from '../../../api/moviesApi';
import { useSelector } from 'react-redux';

const Main = () => {
	const {popular, playing, topRated} = useSelector(state => state.movies);
	return (
		<div className={styles.main}>
			<Films
				title="Popular Movies"
				movies={popular.results}
			/>
			<Films
				title="Top Rated Movies"
				movies={topRated.results}
				isBigSize={false}
			/>
			<Films
				title="PLaying Movies"
				movies={playing.results}
			/>
		</div>);
};

export default Main;