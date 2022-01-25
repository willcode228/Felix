import React from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import styles from './ActorCard.module.scss';
import { NavLink } from 'react-router-dom';
import { PEOPLE_INFO } from '../../../routes/consts';

const IMG = process.env.REACT_APP_IMG;

const ActorCard = ({actor}) => {
	const {name, id, profile_path, known_for} = actor;

	return (
		<div className={styles.actor}>

			<NavLink className={styles.actor__link} to={`${PEOPLE_INFO}/${id}`} />

			<LazyLoadImage
				src={`${IMG}/w235_and_h235_face/${profile_path}`}
				alt={name}
				effect='blur'
			/>

			<div className={styles.actor__info}>
				<h3>{name}</h3>
				<p className={styles.known}>
					{known_for.map(bill => <span key={bill?.id}>{bill?.name || bill?.title}, </span>)}
				</p>
			</div>
		</div>
	);
};

export default ActorCard;