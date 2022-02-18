import React from 'react';
import styles from './BillCardInfo.module.scss';
import { ReactComponent as PlayIcon } from '../../../../assets/icons/play.svg';
import RateCircle from '../../../RateCircle/RateCircle';
import { NavLink } from 'react-router-dom';
import { MOVIE_INFO, SHOW_INFO } from '../../../../routes/consts';

const BillCardInfo = ({bill, isBigSize}) => {
	const {title, id, vote_average, release_date, name, first_air_date} = bill;
	const linkInfoPath = title ? MOVIE_INFO : SHOW_INFO;

	const infoClasses = [
		styles.info,
		isBigSize ? styles.info__big : styles.info__small
	].join(' ');

	return (
		<div className={infoClasses}>

			<div className={styles.container}>

				<div className={`${styles.play} play`}>
					<NavLink className={styles.play__link} to={`${linkInfoPath}/${id}`} />
					<PlayIcon/>
				</div>

				<div className={styles.titles}>
					<h4 className={styles.titles__title}>{title || name}</h4>
					<h5 className={styles.titles__date}>{release_date || first_air_date}</h5>
				</div>
			</div>

			<div className={`${styles.rate} rate`}>
				<RateCircle rate={vote_average}/>
			</div>

		</div>
	);
};

export default BillCardInfo;