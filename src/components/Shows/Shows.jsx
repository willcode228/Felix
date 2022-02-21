import React, { useEffect } from 'react';
import BillStart from '../../common/BillsBlocks/BillStart/BillStart';
import { useDispatch, useSelector } from 'react-redux';
import { fetchShows } from '../../store/Shows/actions';
import styles from './Shows.module.scss';
import BillCatalogue from '../../common/BillsBlocks/BillСatalogue/BillСatalogue';
import { DISCOVER, TYPE_TV } from '../../routes/consts';

const Shows = () => {
	const dispatch = useDispatch();
	const {popular, onAir, topRated, isFull} = useSelector(state => state.shows);
	const path = `${DISCOVER}/${TYPE_TV}`;

	useEffect(() => {
		window.scrollTo(0, 0);
		if(!isFull) {
			dispatch(fetchShows());
		}
	}, [dispatch, isFull])

	return (
		<div className={styles.shows}>
			<BillStart
				bill={popular?.results?.[0]}
			/>

			<BillCatalogue
				title='Popular TV Shows'
				catalogue={popular.results}
				linkText={'All shows'}
				path={path}
			/>
			<BillCatalogue
				title='Top Rated TV Shows'
				catalogue={topRated.results}
				isBigSize={false}
				linkText={'All shows'}
				path={path}
			/>
			<BillCatalogue
				title='On Air TV Shows'
				catalogue={onAir.results}
				linkText={'All shows'}
				path={path}
			/>
		</div>
	);
};

export default Shows;