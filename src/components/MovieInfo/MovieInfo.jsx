import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchMovieInfo } from '../../store/MovieInfo/actions';
import { useMatch } from 'react-router';
import { MOVIE_INFO } from '../../routes/consts';
import MoveInfoTop from './MoveInfoTop/MoveInfoTop';

const MovieInfo = () => {
	const dispatch = useDispatch();
	const {details} = useSelector(state => state.movieInfo);
	const {params: {movieId}} = useMatch(`${MOVIE_INFO}/:movieId`);


	useEffect(() => {
		dispatch(fetchMovieInfo(movieId));
	}, [dispatch]);


	return (
		<div>
			<MoveInfoTop details={details}/>
		</div>
	);
};

export default MovieInfo;