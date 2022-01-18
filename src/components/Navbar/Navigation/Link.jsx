import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './Navigation.module.scss';
import { useMatch, useResolvedPath } from 'react-router';

const Link = ({option}) => {
	const {path, title} = option,
		resolved = useResolvedPath(path),
		match = useMatch({path: resolved.pathname, end: true});

	const linkClasses = [styles.link, match && styles.active].join(' ');

	return (
		<NavLink to={path} className={linkClasses}>
			<span>{title}</span>
		</NavLink>
	);
};

export default Link;