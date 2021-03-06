import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './MovieInfoCollection.module.scss';
import { COLLECTION } from '../../../routes/consts';
import BillBackdrop from '../../../common/BillsBlocks/BillBackdrop/BillBackdrop';

const MovieInfoCollection = ({collection}) => {

	if(!collection) {
		return null;
	}

	return (
		<div className={styles.collection}>
			<BillBackdrop backdrop={collection.backdrop_path}/>

			<h2 className={styles.title}>Part of {collection.name}</h2>

			<NavLink className={styles.link} to={`${COLLECTION}/${collection.id}`}>
				View all collection
			</NavLink>
		</div>
	);
};

export default MovieInfoCollection;