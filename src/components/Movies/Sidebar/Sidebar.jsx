import React from 'react';
import styles from './Sidebar.module.scss';
import { useSelector } from 'react-redux';
import BillCatalogue from '../../../common/BillsBlocks/BillСatalogue/BillСatalogue';

const Sidebar = () => {
	const upcoming = useSelector(state => state.movies.upcoming.results);

	return (
		<div className={styles.sidebar}>
			<BillCatalogue
				catalogue={upcoming}
				title='Upcoming'
				vertical
			/>
		</div>
	);
};

export default Sidebar;