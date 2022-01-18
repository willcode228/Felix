import React from 'react';
import styles from './FilmCardInfo.module.scss';
import {ReactComponent as PlayIcon} from '../../../assets/icons/play.svg';

const FilmCardInfo = ({movie}) => {
	const {title, id, vote_count, vote_average, release_date} = movie;

	return (
		<div className={styles.info}>

			<div className={styles.play}>
				<PlayIcon />
			</div>

			<div>
				<h3>{title}</h3>
				<h4>{release_date}</h4>
			</div>

			<div>
				<h3>{vote_average}</h3>
			</div>

		</div>
	);
};

export default FilmCardInfo;