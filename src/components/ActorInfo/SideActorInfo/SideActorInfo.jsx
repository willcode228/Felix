import React from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import styles from './SideActorInfo.module.scss';
import SideInfoItem from './SideInfoItem/SideInfoItem';
const IMG = process.env.REACT_APP_IMG;

const SideActorInfo = ({actorDetails}) => {
	const {profile_path, name, gender, place_of_birth, known_for_department, birthday, also_known_as} = actorDetails;

	const genderWord = gender == 1 ? 'Woman' : 'Man';

	return (
		<div className={styles.sidebar}>
			<LazyLoadImage
				src={`${IMG}/w600_and_h900_bestv2/${profile_path}`}
				effect='blur'
				alt={name}
			/>

			<h2 className={styles.sidebar__title}>Personal Information</h2>
			<SideInfoItem title={'Sex'} info={genderWord}/>
			<SideInfoItem title={'Popular for'} info={known_for_department}/>
			<SideInfoItem title={'Birthday'} info={birthday}/>
			<SideInfoItem title={'Born place'} info={place_of_birth}/>
			<SideInfoItem title={'Known as'} info={also_known_as.join(", ")}/>
		</div>
	);
};

export default SideActorInfo;