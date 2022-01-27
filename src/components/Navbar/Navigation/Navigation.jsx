import React from 'react';
import { navbarPublicLinks } from '../../../routes/links';
import styles from './Navigation.module.scss';
import Link from './Link';

const Navigation = () => {
	return (
		<ul className={styles.list}>
			{navbarPublicLinks.map(option => <Link key={option.path} option={option}/>)}
		</ul>
	);
};

export default Navigation;