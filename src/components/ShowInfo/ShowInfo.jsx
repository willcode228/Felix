import React, { useEffect } from 'react';
import { useMatch } from 'react-router';
import { SHOW_INFO } from '../../routes/consts';
import { useDispatch } from 'react-redux';
import { fetchShowInfo } from '../../store/ShowInfo/actions';

const ShowInfo = () => {
	const dispatch = useDispatch();
	const {params: {showId}} = useMatch(`${SHOW_INFO}/:showId`);

	useEffect(() => {
		dispatch(fetchShowInfo(showId));
	}, [dispatch, fetchShowInfo, showId]);

	return (
		<div>

		</div>
	);
};

export default ShowInfo;