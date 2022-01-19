import React from 'react';
import styles from './FilmCardInfo.module.scss';
import { ReactComponent as PlayIcon } from '../../../assets/icons/play.svg';
import RateCircle from '../../RateStar/RateCircle';

const FilmCardInfo = ({movie, isBigSize}) => {
	const {title, id, vote_count, vote_average, release_date} = movie;

	const infoClasses = [
		styles.info,
		isBigSize ? styles.info__big : styles.info__small
	].join(' ');

	return (
		<div className={infoClasses}>

			<div className={styles.container}>
				<div className={`${styles.play} play`}>
					<PlayIcon/>
				</div>

				<div className={styles.titles}>
					<h4 className={styles.titles__title}>{title}</h4>
					<h5 className={styles.titles__date}>{release_date}</h5>
				</div>
			</div>

			<div className={`${styles.rate} rate`}>
				<RateCircle rate={vote_average}/>
			</div>

		</div>
	);
};

export default FilmCardInfo;