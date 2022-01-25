import React from 'react';
import styles from './BillStart.module.scss';
import RateCircle from '../RateCircle/RateCircle';
import {ReactComponent as EyeIcon} from '../../assets/icons/eye.svg';
import {ReactComponent as ArrowIcon} from '../../assets/icons/right-arrow.svg';
import { NavLink } from 'react-router-dom';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { MOVIE_INFO } from '../../routes/consts';


const IMG = process.env.REACT_APP_IMG;


const BillStart = ({bill}) => {

	const date = bill?.release_date || bill?.first_air_date;

	return (
		<div className={styles.box}>

			<LazyLoadImage
				className={styles.background}
				src={bill?.backdrop_path ? `${IMG}/original/${bill.backdrop_path}` : ''}
				alt={bill?.title}
				effect='blur'
			/>

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

			<NavLink to={`${MOVIE_INFO}/${bill?.id}`} className={styles.link}>
				More info <ArrowIcon />
			</NavLink>

		</div>
	);
};

export default BillStart;