import React from 'react';
import styles from './MovieInfoTop.module.scss';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import RateCircle from '../../../common/RateCircle/RateCircle';
import MovieInfoCompanies from './MovieInfoCompanies';
import BillBackdrop from '../../../common/BillBackdrop/BillBackdrop';
const IMG = process.env.REACT_APP_IMG;

const MovieInfoTop = ({details}) => {
	const {poster_path, backdrop_path, title, release_date, genres, runtime, vote_average, tagline, overview, production_companies} = details;

	// const
	return (
		<div className={styles.top}>

			<BillBackdrop backdrop={backdrop_path} />

			<LazyLoadImage
				className={styles.top__poster}
				src={poster_path ? `${IMG}/w600_and_h900_bestv2/${poster_path}` : ''}
				effect='blur'
				alt={title}
			/>

			<div className={styles.top__info}>
				<h2>{title}</h2>

				<div className={styles.top__meta}>
					<p className={styles.top__meta_date}>{release_date}</p>
					<p className={styles.top__meta_genres}>{genres.map(genre => <span key={genre.id}>{genre.name}, </span>)}</p>
					<p>{(runtime / 60).toFixed(2)}</p>
				</div>


				<div className={styles.top__rate}>
					<RateCircle big rate={vote_average}/>
					<p>User<br/>score</p>
				</div>

				<p className={styles.top__tagline}>{tagline}</p>

				<div className={styles.top__overview}>
					<h3>Overviews</h3>
					<p>{overview}</p>
				</div>

				<MovieInfoCompanies companies={production_companies}/>

			</div>

		</div>
	);
};

export default MovieInfoTop;