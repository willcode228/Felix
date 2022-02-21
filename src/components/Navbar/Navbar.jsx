import React from 'react';
import Navigation from './Navigation/Navigation';
import styles from './Navbar.module.scss';
import SearchForm from './SearchForm/SearchForm';

const Navbar = () => {
	return (
		<nav className={styles.nav}>
			<h1 className={styles.nav__logo}>Felix</h1>

			<Navigation />
			<SearchForm />
		</nav>
	);
};

export default Navbar;