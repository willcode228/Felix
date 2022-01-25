import React from 'react';
import styles from './RateCircle.module.scss';

const RateCircle = ({rate, big = 0, ...props}) => {
	const offset = 1256 - ((rate * 10) * 12.56);
	const radius = big ? 200 : 400;

	const rateClasses = [
		styles.rate, big && styles.rate__big
	].join(' ');

	return (
		<div {...props}>
			<div className={rateClasses}>
				<svg className={styles.rate__svg} viewBox="0 0 450 450">
					<circle className={styles.rate__bg} cx="50%" cy="50%" r={radius} strokeWidth={40}/>

					<circle className={styles.rate__fill} cx="50%" cy="50%" r={radius} strokeWidth={45}
									strokeDashoffset={offset || '0'} strokeDasharray={1256}/>
				</svg>
				<h3 className={styles.rate__title}>{rate}</h3>
			</div>
		</div>
	);
};

export default RateCircle;