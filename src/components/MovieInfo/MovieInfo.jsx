import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchMovieInfo } from '../../store/MovieInfo/actions';
import { useMatch } from 'react-router';
import { MOVIE_INFO } from '../../routes/consts';
import Catalogue from '../../common/Catalogue/Catalogue';
import ActorCard from '../../common/ActorCard/ActorCard';
import styles from './MovieInfo.module.scss';
import BillCatalogue from '../../common/BillsBlocks/BillСatalogue/BillСatalogue';
import MovieInfoCollection from './MovieInfoCollection/MovieInfoCollection';
import BillImages from '../../common/BillsBlocks/BillImages/BillImages';
import BillInfoTop from '../../common/BillsBlocks/BillInfoTop/BillInfoTop';

const MovieInfo = () => {
	const dispatch = useDispatch();
	const {details, credits, recommendations, images} = useSelector(state => state.movieInfo);
	const {params: {movieId}} = useMatch(`${MOVIE_INFO}/:movieId`);

	useEffect(() => {
		window.scrollTo(0, 0);
		dispatch(fetchMovieInfo(movieId));
	}, [dispatch, movieId]);

	return (
		<div>
			<BillInfoTop details={details}/>

			<div className={styles.wrapper}>
				<Catalogue title="Top Billed Cast">
					{credits.cast.map(actor => <ActorCard key={actor.id} actor={actor}/>)}
				</Catalogue>

				<BillImages images={images}/>

				<MovieInfoCollection collection={details.belongs_to_collection}/>

				<BillCatalogue title='Recommendations' catalogue={recommendations.results}/>
			</div>

		</div>
	);
};

export default MovieInfo;