import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchActors } from '../../store/Actors/actions';
import styles from './Actors.module.scss';
import ActorCard from '../../common/ActorCard/ActorCard';
import InfiniteBox from '../../common/InfiniteBox/InfiniteBox';

const Actors = () => {
	const dispatch = useDispatch();
	const {isFull, results, page, total_pages} = useSelector(state => state.actors);

	useEffect(() => {
		if (!isFull) {
			dispatch(fetchActors());
		}
	}, [dispatch, isFull]);

	return (
		<InfiniteBox
			className={styles.actors}
			next={() => dispatch(fetchActors())}
			length={results.length}
			more={page !== total_pages}
		>
			{results.map(actor => <ActorCard key={actor.id} actor={actor}/>)}
		</InfiniteBox>
	);
};

export default Actors;