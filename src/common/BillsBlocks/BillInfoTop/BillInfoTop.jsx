import React from 'react';
import BillBackdrop from '../BillBackdrop/BillBackdrop';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import RateCircle from '../../RateCircle/RateCircle';
import BillInfoTopCompanies from './BillInfoTopCompanies';
import styles from './BillInfoTop.module.scss';

const IMG = process.env.REACT_APP_IMG;

const BillInfoTop = ({details}) => {
	const {poster_path, backdrop_path, title, name, release_date, first_air_date,  genres, runtime, vote_average, tagline, overview, production_companies, episode_run_time} = details;
	const genresNames = genres.map(genre => genre.name).join(',');

	return (
		<div className={styles.top}>

			<BillBackdrop backdrop={backdrop_path} />

			<LazyLoadImage
				className={styles.top__poster}
				src={poster_path ? `${IMG}/w600_and_h900_bestv2/${poster_path}` : ''}
				effect='blur'
				alt={title || name}
			/>

			<div className={styles.top__info}>
				<h2>{title || name}</h2>

				<div className={styles.top__meta}>
					<p className={styles.top__meta_date}>{release_date || first_air_date}</p>
					<p className={styles.top__meta_genres}>{genresNames}</p>
					<p>{ runtime ? (runtime / 60).toFixed(2) : `${episode_run_time} min for episode`}</p>
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

				<BillInfoTopCompanies companies={production_companies}/>

			</div>

		</div>
	);
};

export default BillInfoTop;