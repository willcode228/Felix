import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchActors } from '../../store/Actors/actions';

const Actors = () => {
	const dispatch = useDispatch();
	const {isFull} = useSelector(state => state.actors);

	useEffect(() => {
		if(!isFull) {
			dispatch(fetchActors());
		}
	}, [dispatch]);

	return (
		<div>

		</div>
	);
};

export default Actors;