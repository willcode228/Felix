import React from 'react';
import styles from './Films.module.scss';
import { NavLink } from 'react-router-dom';
import { ReactComponent as ArrowIcon } from '../../assets/icons/right-arrow.svg';
import FilmCard from '../FilmCard/FilmCard';

const Films = ({title, movies=[], vertical, isBigSize=true}) => {

	const boxClasses = [styles.box, vertical && styles.vertical].join(' ');

	return (
		<div className={boxClasses}>

			<div className={styles.top}>
				<h2 className={styles.top__title}>{title}</h2>

				<NavLink to="/" className={styles.top__link}>
					All movies <ArrowIcon/>
				</NavLink>
			</div>

			<div className={styles.films}>
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