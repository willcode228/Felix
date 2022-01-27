import React from 'react';
import { Tab, TabList, TabPanel, Tabs } from 'react-tabs';
import Catalogue from '../../../common/Catalogue/Catalogue';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import styles from './MovieInfoImages.module.scss';
import { removeDuplicate } from '../../../utils/removeDuplicates';
const IMG = process.env.REACT_APP_IMG;

const MovieInfoImages = ({images}) => {
	const {backdrops, posters} = images;

	return (
		<Tabs className={styles.tab__wrapper}>

			<TabList className={styles.tab__list}>
				<Tab className={styles.tab__tab} selectedClassName={styles.tab__selected}>Backdrops</Tab>
				<Tab className={styles.tab__tab} selectedClassName={styles.tab__selected}>Posters</Tab>
			</TabList>

			<TabPanel>
				<Catalogue>
					{removeDuplicate(backdrops, 'file_path').map(image =>
						<LazyLoadImage
							className={styles.image}
							src={`${IMG}/w533_and_h300_face/${image.file_path}`}
							key={image.file_path}
							effect='blur'
						/>
					)}
				</Catalogue>
			</TabPanel>

			<TabPanel>
				<Catalogue>
					{removeDuplicate(posters, 'file_path').map(image =>
						<LazyLoadImage
							className={styles.image}
							src={`${IMG}/w440_and_h660_face/${image.file_path}`}
							key={image.file_path}
							effect='blur'
						/>
					)}
				</Catalogue>
			</TabPanel>
		</Tabs>
	);
};

export default MovieInfoImages;