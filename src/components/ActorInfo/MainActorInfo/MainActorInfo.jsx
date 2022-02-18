import React from 'react';
import styles from './MainActorInfo.module.scss';
import BillCatalogue from '../../../common/BillsBlocks/BillСatalogue/BillСatalogue';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import Catalogue from '../../../common/Catalogue/Catalogue';
const IMG = process.env.REACT_APP_IMG;

const MainActorInfo = ({actorDetails, billList, actorImages}) => {

	const {name, biography} = actorDetails;

	return (
		<div className={styles.actorInfo}>
			<h2>{name}</h2>

			<div className={styles.biography}>
				<h3>Biography</h3>
				<p>{biography}</p>
			</div>


			<BillCatalogue
				title='Known For'
				catalogue={billList}
				isBigSize={false}
				linkText=''
			/>

			<Catalogue title={'Actor photo-blog'}>
				{actorImages.map((image, i) => (
					<LazyLoadImage
						className={styles.photoblog__img}
						src={`${IMG}/original/${image.file_path}`}
						effect='blur'
						alt={name}
						key={i}
					/>
				))}
			</Catalogue>

		</div>
	);
};

export default MainActorInfo;