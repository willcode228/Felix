import React, { useEffect } from 'react';
import { useMatch } from 'react-router';
import { SHOW_INFO } from '../../routes/consts';
import { useDispatch, useSelector } from 'react-redux';
import { fetchShowInfo } from '../../store/ShowInfo/actions';
import Catalogue from '../../common/Catalogue/Catalogue';
import ActorCard from '../../common/ActorCard/ActorCard';
import styles from './ShowInfo.module.scss';
import BillImages from '../../common/BillsBlocks/BillImages/BillImages';
import MovieInfoCollection from '../MovieInfo/MovieInfoCollection/MovieInfoCollection';
import BillCatalogue from '../../common/BillsBlocks/BillСatalogue/BillСatalogue';
import BillInfoTop from '../../common/BillsBlocks/BillInfoTop/BillInfoTop';

const ShowInfo = () => {
	const dispatch = useDispatch();
	const {details, images, credits, recommendations} = useSelector(state => state.showInfo);
	const {params: {showId}} = useMatch(`${SHOW_INFO}/:showId`);

	useEffect(() => {
		dispatch(fetchShowInfo(showId));
	}, [dispatch, fetchShowInfo, showId]);

	return (
		<div className={styles.showInfo}>

			<BillInfoTop details={details}/>

			<div className={styles.wrapper}>
				<Catalogue title='Top Billed Cast'>
					{credits.cast.map(actor => <ActorCard actor={actor}/>)}
				</Catalogue>

				<BillImages images={images}/>

				<MovieInfoCollection collection={details.belongs_to_collection}/>

				<BillCatalogue title='Recommendations' catalogue={recommendations.results}/>
			</div>
		</div>
	);
};

export default ShowInfo;