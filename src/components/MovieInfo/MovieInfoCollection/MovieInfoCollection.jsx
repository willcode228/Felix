import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './MovieInfoCollection.module.scss';
import { COLLECTION } from '../../../routes/consts';
import { LazyLoadImage } from 'react-lazy-load-image-component';

const IMG = process.env.REACT_APP_IMG;

const MovieInfoCollection = ({collection}) => {

	if(!collection) {
		return null;
	}

	return (
		<div className={styles.collection}>

			<div className={styles.background}>
				<LazyLoadImage
					src={`${IMG}/w1440_and_h320_multi_faces/${collection.backdrop_path}`}
					alt={collection.name}
				/>
			</div>

			<h2 className={styles.title}>Part of {collection.name}</h2>

			<NavLink className={styles.link} to={`${COLLECTION}/${collection.id}`}>
				View all collection
			</NavLink>

		</div>
	);
};

export default MovieInfoCollection;