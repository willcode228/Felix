import React, { useEffect } from 'react';
import { useMatch } from 'react-router';
import { SEARCH } from '../../routes/consts';
import { useDispatch, useSelector } from 'react-redux';
import { fetchSearch } from '../../store/Search/actions';
import InfiniteBox from '../../common/InfiniteBox/InfiniteBox';
import BillCard from '../../common/BillsBlocks/BillCard/BillCard';
import styles from './SearchResult.module.scss';
import ActorCard from '../../common/ActorCard/ActorCard';

const SearchResult = () => {
	const {params: { searchQuery }} = useMatch(`${SEARCH}/:searchQuery`);
	const {results, page, total_pages} = useSelector(state => state.search);
	const dispatch = useDispatch();

	useEffect(() => {
		window.scrollTo(0, 0);
		dispatch(fetchSearch(searchQuery));
	}, [dispatch, searchQuery]);

	return (
		<div>
			<InfiniteBox
				className={styles.search}
				next={() => dispatch(fetchSearch(searchQuery))}
				length={results.length}
				more={page !== total_pages}
			>
				{results.map(result => result.media_type === 'person'
						? <ActorCard key={result.id} actor={result}/>
						: <BillCard key={result.id} bill={result}/>
				)}
			</InfiniteBox>
		</div>
	);
};

export default SearchResult;