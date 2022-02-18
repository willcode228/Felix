import React from 'react';
import styles from './CollectionTop.module.scss';
import BillBackdrop from '../../../common/BillsBlocks/BillBackdrop/BillBackdrop';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import RateCircle from '../../../common/RateCircle/RateCircle';

const IMG = process.env.REACT_APP_IMG;

const CollectionTop = ({details, genres}) => {
	const {backdrop_path, poster_path, name, overview, parts} = details;
	const averageRateForCollection = Math.round(parts.reduce((acc, obj) => acc + obj.vote_average, 0) / parts.length) || 0;

	return (
		<div className={styles.collection__top}>

			<BillBackdrop backdrop={backdrop_path} />

			<LazyLoadImage
				className={styles.collection__poster}
				src={poster_path ? `${IMG}/w600_and_h900_bestv2/${poster_path}` : ''}
				effect='blur'
				alt={name}
			/>

			<div className={styles.collection__info}>

				<h2 className={styles.collection__title}>{name}</h2>

				<p className={styles.collection__genres}>
					{(parts?.[0]?.genre_ids || []).map(genreId =>
						 genres.map(obj => obj.id === genreId ? <span key={obj.id}>{obj.name}, </span> : null)
					)}
				</p>

				<div className={styles.collection__rate}>
					<RateCircle big rate={averageRateForCollection}/>
					<p>User<br/>score</p>
				</div>

				<div className={styles.collection__overview}>
					<h3>Overviews</h3>
					<p>{overview}</p>
				</div>

				<h3>Numbers Of Movies: {parts.length}</h3>

			</div>

		</div>
	);
};

export default CollectionTop;