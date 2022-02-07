import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchMovieInfo } from '../../store/MovieInfo/actions';
import { useMatch } from 'react-router';
import { MOVIE_INFO } from '../../routes/consts';
import MovieInfoTop from './MovieInfoTop/MovieInfoTop';
import Catalogue from '../../common/Catalogue/Catalogue';
import ActorCard from '../../common/ActorCard/ActorCard';
import styles from './MovieInfo.module.scss';
import BillCatalogue from '../../common/BillСatalogue/BillСatalogue';
import MovieInfoCollection from './MovieInfoCollection/MovieInfoCollection';
import BillImages from '../../common/BillImages/BillImages';

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
			<MovieInfoTop details={details}/>

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