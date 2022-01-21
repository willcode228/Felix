import React from 'react';
import styles from './SideInfoItem.module.scss';
const SideInfoItem = ({title, info}) => {
	return (
		<div className={styles.info}>
			<h4>{title}</h4>
			<p>{info}</p>
		</div>
	);
};

export default SideInfoItem;