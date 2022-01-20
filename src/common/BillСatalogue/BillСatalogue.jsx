import React, { useState } from 'react';
import styles from './BillСatalogue.module.scss';
import { NavLink } from 'react-router-dom';
import { ReactComponent as ArrowIcon } from '../../assets/icons/right-arrow.svg';
import BillCard from '../BillCard/BillCard';

const BillCatalogue = ({title, catalogue=[], vertical, isBigSize = true, linkText='All movies'}) => {
	const [scrollRight, setScrollRight] = useState(false);
	const [scrollLeft, setScrollLeft] = useState(true);

	const boxClasses = [
		styles.box, vertical && styles.vertical,
		scrollRight && styles.right, scrollLeft && styles.left].join(' ');

	const scrollHandler = (e) => {
		const scrollBox = e.target;

		if (scrollBox.scrollWidth - scrollBox.scrollLeft === scrollBox.clientWidth) setScrollRight(true);
		else setScrollRight(false);

		if(scrollBox.scrollLeft > 0) setScrollLeft(false);
		else setScrollLeft(true);
	};

	return (
		<div className={boxClasses}>

			<div className={styles.top}>
				<h2 className={styles.top__title}>{title}</h2>

				<NavLink to="/" className={styles.top__link}>
					{linkText} <ArrowIcon/>
				</NavLink>
			</div>

			<div className={styles.films} onScroll={scrollHandler}>
				{catalogue.map(bill => (
					<BillCard
						isBigSize={isBigSize}
						key={bill.id}
						bill={bill}
					/>
				))}
			</div>

		</div>
	);
};

export default BillCatalogue;