import React from 'react';
import styles from './BillCard.module.scss';
import FilmCardImg from './BillCardImg/BillCardImg';
import BillCardInfo from './BillCardInfo/BillCardInfo';


const BillCard = ({bill, isBigSize}) => {
	const {poster_path, title} = bill;

	const filmCardClasses = [
		styles.card,
		isBigSize ? styles.card__big : styles.card__small
	].join(' ');

	return (
		<div className={filmCardClasses}>
			<FilmCardImg isBigSize={isBigSize} path={poster_path} alt={title}/>
			<BillCardInfo isBigSize={isBigSize} bill={bill} />
		</div>
	);
};

export default BillCard;