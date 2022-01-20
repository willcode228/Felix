import React from 'react';
import styles from './Main.module.scss';
import BillCatalogue from '../../../common/BillСatalogue/BillСatalogue';
import { useSelector } from 'react-redux';
import BillStart from '../../../common/BillStart/BillStart';

const Main = () => {
	const {popular, playing, topRated} = useSelector(state => state.movies);
	return (
		<div className={styles.main}>
			<BillStart
				bill={popular?.results?.[0]}
			/>
			<BillCatalogue
				title="Popular Movies"
				catalogue={popular.results}
			/>
			<BillCatalogue
				title="Top Rated Movies"
				catalogue={topRated.results}
				isBigSize={false}
			/>
			<BillCatalogue
				title="PLaying Movies"
				catalogue={playing.results}
			/>
		</div>);
};

export default Main;