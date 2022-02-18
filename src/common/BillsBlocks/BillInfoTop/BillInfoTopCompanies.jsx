import React from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import styles from './BillInfoTop.module.scss';
const IMG = process.env.REACT_APP_IMG;

const BillInfoTopCompanies = ({companies}) => {
	return (
		<div>
			<div className={styles.top__production}>
				{companies.map(companie => {
					if(companie?.logo_path) {
						return (
							<div key={companie.id} className={styles.top__companie}>
								<LazyLoadImage
									src={`${IMG}/original/${companie.logo_path}`}
									alt={companie.name}
									effect='blur'
								/>
							</div>
						)
					}
					return null
				})}
			</div>
		</div>
	);
};

export default BillInfoTopCompanies;