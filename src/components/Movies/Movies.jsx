import React, { useEffect } from 'react';
import styles from './Movies.module.scss';
import Sidebar from './Sidebar/Sidebar';
import Main from './Main/Main';
import { useDispatch, useSelector } from 'react-redux';
import { fetchMovies } from '../../store/Movies/actions';

const Movies = () => {
	const dispatch = useDispatch(),
		isFull = useSelector(state => state.movies.isFull);

	useEffect(() => {
		window.scrollTo(0, 0);
		if(!isFull) {
			dispatch(fetchMovies());
		}
	},[dispatch, isFull]);

	return (
		<div className={styles.movies}>
			<Sidebar />
			<Main />
		</div>
	);
};

export default Movies;