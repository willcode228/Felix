import React from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import styles from './SideActorInfo.module.scss';
import SideInfoItem from './SideInfoItem/SideInfoItem';
const IMG = process.env.REACT_APP_IMG;

const SideActorInfo = ({actorDetails, actorCreditsAmount}) => {
	const {profile_path, name, gender, place_of_birth, known_for_department, birthday, also_known_as} = actorDetails;

	const genderWord = gender == 1 ? 'Woman' : 'Man';
	const known = typeof also_known_as === 'string' ? also_known_as : also_known_as.join(", ");
	const old = new Date().getFullYear() - new Date(birthday).getFullYear();

	return (
		<div className={styles.sidebar}>
			<LazyLoadImage
				src={`${IMG}/w600_and_h900_bestv2/${profile_path}`}
				effect='blur'
				alt={name}
			/>

			<h2 className={styles.sidebar__title}>Personal Information</h2>
			<SideInfoItem title={'Sex'} info={genderWord}/>
			<SideInfoItem title={'Birthday'} info={`${birthday} (${old} years old)`}/>
			<SideInfoItem title={'Born place'} info={place_of_birth}/>
			<SideInfoItem title={'Popular for'} info={known_for_department}/>
			<SideInfoItem title={'Known Credits'} info={actorCreditsAmount}/>
			<SideInfoItem title={'Known as'} info={known}/>
		</div>
	);
};

export default SideActorInfo;