import React from 'react';
import Navigation from './Navigation/Navigation';
import styles from './Navbar.module.scss';
import Meta from './Meta/Meta';

const Navbar = () => {
	return (
		<nav className={styles.nav}>
			<h1 className={styles.nav__logo}>Felix</h1>

			<Navigation />
			<Meta />
		</nav>
	);
};

export default Navbar;