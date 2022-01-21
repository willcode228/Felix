import React, { useEffect } from 'react';
import { useMatch } from 'react-router';
import { PEOPLE_INFO } from '../../routes/consts';
import { useDispatch, useSelector } from 'react-redux';
import { fetchActorInfo } from '../../store/ActorInfo/actions';
import styles from './ActorInfo.module.scss';
import SideActorInfo from './SideActorInfo/SideActorInfo';

const ActorInfo = () => {
	const dispatch = useDispatch();
	const {details} = useSelector(state => state.actorInfo);
	const {params: {actorId}} = useMatch(`${PEOPLE_INFO}/:actorId`);

	useEffect(() => {
		dispatch(fetchActorInfo(actorId));
	}, []);

	return (
		<div className={styles.actorInfo}>
			<SideActorInfo actorDetails={details}/>
		</div>
	);
};

export default ActorInfo;