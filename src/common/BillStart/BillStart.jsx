import React from 'react';
import styles from './BillStart.module.scss';
import RateCircle from '../RateCircle/RateCircle';
import {ReactComponent as EyeIcon} from '../../assets/icons/eye.svg';
import {ReactComponent as ArrowIcon} from '../../assets/icons/right-arrow.svg';
import { NavLink } from 'react-router-dom';


const IMG = process.env.REACT_APP_IMG;


const BillStart = ({bill}) => {

	const date = bill?.release_date || bill?.first_air_date;

	return (
		<div className={styles.box}>

			<img className={styles.background} src={`${IMG}/original/${bill?.backdrop_path}`} alt={bill?.title}/>

			<h2 className={styles.title}>{bill?.title || bill?.name}</h2>

			<div className={styles.meta}>
				<h3 className={styles.year}>{date ? new Date(date).getFullYear() : ''}</h3>
				<RateCircle className={styles.rate} rate={bill?.vote_average}/>

				<h3 className={styles.popularity}>
					<EyeIcon className={styles.eye}/>
					{Math.round(bill?.popularity)}
				</h3>

			</div>

			<p className={styles.overview}>{bill?.overview}</p>

			<NavLink to={'/'} className={styles.link}>
				More info <ArrowIcon />
			</NavLink>

		</div>
	);
};

export default BillStart;