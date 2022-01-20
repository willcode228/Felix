import React, { useEffect } from 'react';
import BillStart from '../../common/BillStart/BillStart';
import { useDispatch, useSelector } from 'react-redux';
import { fetchShows } from '../../store/Shows/actions';
import styles from './Shows.module.scss';
import BillCatalogue from '../../common/BillСatalogue/BillСatalogue';

const Shows = () => {
	const dispatch = useDispatch();
	const {popular, onAir, topRated, isFull} = useSelector(state => state.shows);

	useEffect(() => {
		if(!isFull) {
			dispatch(fetchShows());
		}
	}, [dispatch])

	return (
		<div className={styles.shows}>
			<BillStart
				bill={popular?.results?.[0]}
			/>

			<BillCatalogue
				title='Popular TV Shows'
				catalogue={popular.results}
				linkText={'All shows'}
			/>
			<BillCatalogue
				title='Top Rated TV Shows'
				catalogue={topRated.results}
				isBigSize={false}
				linkText={'All shows'}
			/>
			<BillCatalogue
				title='On Air TV Shows'
				catalogue={onAir.results}
				linkText={'All shows'}
			/>
		</div>
	);
};

export default Shows;