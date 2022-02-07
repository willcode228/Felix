import React from 'react';
import styles from './BillStart.module.scss';
import RateCircle from '../RateCircle/RateCircle';
import {ReactComponent as EyeIcon} from '../../assets/icons/eye.svg';
import {ReactComponent as ArrowIcon} from '../../assets/icons/right-arrow.svg';
import { NavLink } from 'react-router-dom';
import { MOVIE_INFO, SHOW_INFO } from '../../routes/consts';
import numbersFormat from '../../utils/numbersFormat';
import BillBackdrop from '../BillBackdrop/BillBackdrop';

const IMG = process.env.REACT_APP_IMG;

const BillStart = ({bill}) => {

	const date = bill?.release_date || bill?.first_air_date;
	const linkInfoPath = bill?.title ? MOVIE_INFO : SHOW_INFO;

	return (
		<div className={styles.box}>

			<BillBackdrop backdrop={bill?.backdrop_path} />

			<h2 className={styles.title}>{bill?.title || bill?.name}</h2>

			<div className={styles.meta}>
				<h3 className={styles.year}>{date ? new Date(date).getFullYear() : ''}</h3>
				<RateCircle className={styles.rate} rate={bill?.vote_average}/>

				<h3 className={styles.popularity}>
					<EyeIcon className={styles.eye}/>
					{numbersFormat(Math.round(bill?.popularity))}
				</h3>

			</div>

			<p className={styles.overview}>{bill?.overview}</p>

			<NavLink to={`${linkInfoPath}/${bill?.id}`} className={styles.link}>
				More info <ArrowIcon />
			</NavLink>

		</div>
	);
};

export default BillStart;