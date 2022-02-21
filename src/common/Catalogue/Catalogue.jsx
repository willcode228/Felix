import React, { useState } from 'react';
import styles from './Catalogue.module.scss';
import { NavLink } from 'react-router-dom';
import { ReactComponent as ArrowIcon } from '../../assets/icons/right-arrow.svg';
import { DISCOVER, TYPE_MOVIE } from '../../routes/consts';

const Catalogue = ({children, linkText, title, path=`${DISCOVER}/${TYPE_MOVIE}`, vertical}) => {
	const [scrollRight, setScrollRight] = useState(false);
	const [scrollLeft, setScrollLeft] = useState(true);

	const boxClasses = [
		styles.box, vertical && styles.vertical,
		scrollRight && styles.right, scrollLeft && styles.left].join(' ');

	const scrollHandler = (e) => {
		const scrollBox = e.target;

		if (scrollBox.scrollWidth - scrollBox.scrollLeft === scrollBox.clientWidth) setScrollRight(true);
		else setScrollRight(false);

		if (scrollBox.scrollLeft > 0) setScrollLeft(false);
		else setScrollLeft(true);
	};

	return (
		<div className={boxClasses}>

			<div className={styles.top}>
				<h2 className={styles.top__title}>{title}</h2>

				{linkText &&
					<NavLink to={path} className={styles.top__link}>
						{linkText} <ArrowIcon/>
					</NavLink>
				}
			</div>

			<div className={styles.scroll} onScroll={scrollHandler}>
				{children}
			</div>

		</div>
	);
};

export default Catalogue;