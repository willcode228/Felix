import React, { useEffect } from 'react';
import { useMatch } from 'react-router';
import { PEOPLE_INFO } from '../../routes/consts';
import { useDispatch, useSelector } from 'react-redux';
import { fetchActorInfo } from '../../store/ActorInfo/actions';
import styles from './ActorInfo.module.scss';
import SideActorInfo from './SideActorInfo/SideActorInfo';
import MainActorInfo from './MainActorInfo/MainActorInfo';

const ActorInfo = () => {
	const dispatch = useDispatch();
	const {details, credits, images} = useSelector(state => state.actorInfo);
	const {params: {actorId}} = useMatch(`${PEOPLE_INFO}/:actorId`);

	useEffect(() => {
		window.scrollTo(0, 0);
		dispatch(fetchActorInfo(actorId));
	}, [dispatch, actorId]);

	return (
		<div className={styles.actorInfo}>

			<SideActorInfo
				actorDetails={details}
				actorCreditsAmount={credits.cast.length}
			/>

			<MainActorInfo
				actorDetails={details}
				actorImages={images.profiles}
				billList={credits.cast}
			/>

		</div>
	);
};

export default ActorInfo;