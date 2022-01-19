import React from 'react';
import styles from './RateCircle.module.scss';

const RateCircle = ({rate=0}) => {
	const offset = 1256 - ((rate * 10) * 12.56);
	return (
		<div className={styles.rate}>
		<svg className={styles.rate__svg} viewBox="0 0 450 450">
			<circle className={styles.rate__bg} cx="50%" cy="50%" r={200} strokeWidth={40} />

			<circle className={styles.rate__fill} cx="50%" cy="50%" r={200}  strokeWidth={45}
							 strokeDashoffset={offset} strokeDasharray={1256} />
		</svg>
			<h3 className={styles.rate__title}>{rate}</h3>
		</div>
	);
};

export default RateCircle;