import React, { useState } from 'react';
import styles from './Films.module.scss';
import { NavLink } from 'react-router-dom';
import { ReactComponent as ArrowIcon } from '../../assets/icons/right-arrow.svg';
import FilmCard from '../FilmCard/FilmCard';

const Films = ({title, movies = [], vertical, isBigSize = true}) => {
	const [scrollRight, setScrollRight] = useState(false);
	const [scrollLeft, setScrollLeft] = useState(true);

	const boxClasses = [
		styles.box, vertical && styles.vertical,
		scrollRight && styles.right, scrollLeft && styles.left].join(' ');

	const scrollHandler = (e) => {
		const scrollBox = e.target;

		if (scrollBox.scrollWidth - scrollBox.scrollLeft === scrollBox.clientWidth) setScrollRight(true);
		else setScrollRight(false);

		if(scrollBox.scrollLeft > 0) setScrollLeft(false);
		else setScrollLeft(true);
	};

	return (
		<div className={boxClasses}>

			<div className={styles.top}>
				<h2 className={styles.top__title}>{title}</h2>

				<NavLink to="/" className={styles.top__link}>
					All movies <ArrowIcon/>
				</NavLink>
			</div>

			<div className={styles.films} onScroll={scrollHandler}>
				{movies.map(movie => (
					<FilmCard
						isBigSize={isBigSize}
						key={movie.id}
						movie={movie}
					/>
				))}
			</div>

		</div>
	);
};

export default Films;