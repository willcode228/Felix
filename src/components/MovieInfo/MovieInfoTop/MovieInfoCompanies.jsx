import React from 'react';
import styles from './MovieInfoTop.module.scss';
import { LazyLoadImage } from 'react-lazy-load-image-component';
const IMG = process.env.REACT_APP_IMG;

const MovieInfoCompanies = ({companies}) => {
	return (
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
	);
};

export default MovieInfoCompanies;