import React from 'react';
import styles from './FilmCard.module.scss';
import FilmCardImg from './FilmCardImg/FilmCardImg';
import FilmCardInfo from './FilmCardInfo/FilmCardInfo';

const FilmCard = ({movie, isBigSize}) => {
	const {poster_path, title, id} = movie;

	const filmCardClasses = [
		styles.card,
		isBigSize && styles.card__big
	].join(' ');

	return (
		<div className={filmCardClasses}>
			<FilmCardImg isBigSize={isBigSize} path={poster_path} alt={title}/>

			<FilmCardInfo movie={movie}/>
		</div>
	);
};

export default FilmCard;