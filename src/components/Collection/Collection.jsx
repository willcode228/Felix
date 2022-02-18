import React, { useEffect } from 'react';
import { useMatch } from 'react-router';
import { COLLECTION } from '../../routes/consts';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCollection } from '../../store/Collection/actions';
import CollectionTop from './CollectionTop/CollectionTop';
import styles from './Collection.module.scss';
import BillCatalogue from '../../common/BillsBlocks/BillСatalogue/BillСatalogue';
import BillImages from '../../common/BillsBlocks/BillImages/BillImages';

const Collection = () => {
	const dispatch = useDispatch();
	const {details, images, genres} = useSelector(state => state.collection);
	const {params: {collectionId}} = useMatch(`${COLLECTION}/:collectionId`);

	useEffect(() => {
		dispatch(fetchCollection(collectionId));
	}, [dispatch, collectionId]);

	return (
		<div className={styles.collection}>
			<CollectionTop details={details} genres={genres}/>

			<div className={`${styles.collection__wrapper}`}>
				<BillCatalogue
					title={`${details?.parts.length} movies`}
					catalogue={details?.parts}
					isBigSize={false}
				/>

				<BillImages images={images}/>
			</div>
		</div>
	);
};

export default Collection;