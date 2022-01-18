import React from 'react';
import styles from './Sidebar.module.scss';
import Films from '../../../common/Films/Films';
import { useSelector } from 'react-redux';

const Sidebar = () => {
	const upcoming = useSelector(state => state.movies.upcoming.results);

	return (
		<div className={styles.sidebar}>
			<Films
				movies={upcoming}
				title='Upcoming'
				vertical
			/>
		</div>
	);
};

export default Sidebar;