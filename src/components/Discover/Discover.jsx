import React, { useEffect } from 'react';
import { useMatch } from 'react-router';
import { DISCOVER } from '../../routes/consts';
import { useDispatch, useSelector } from 'react-redux';
import { fetchDiscover } from '../../store/Discover/actions';
import InfiniteBox from '../../common/InfiniteBox/InfiniteBox';
import BillCard from '../../common/BillsBlocks/BillCard/BillCard';
import styles from './Discover.module.scss';

const Discover = () => {
	const dispatch = useDispatch();
	const {params: {mediaType}} = useMatch(`${DISCOVER}/:mediaType`);
	const {page, total_pages, results} = useSelector(state => state.discover);

	useEffect(() => {
		window.scrollTo(0, 0);
		dispatch(fetchDiscover(mediaType));
	}, [dispatch, mediaType]);

	return (
		<InfiniteBox
			className={styles.discover}
			next={() => dispatch(fetchDiscover(mediaType))}
			length={results.length}
			more={page !== total_pages}
		>
			{results.map(bill => <BillCard key={bill.id} bill={bill} />)}
		</InfiniteBox>
	);
};

export default Discover;