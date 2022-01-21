import React from 'react';
import { Routes, Route, Navigate } from 'react-router';
import { publicRoutes } from '../../routes/routes';
import { MOVIES } from '../../routes/consts';

const RouteMap = () => {
	return (
		<>
			<Routes>
				{publicRoutes.map(({Component, path, key}) => (
						<Route element={<Component/>} path={path} key={key}/>
				))}

				<Route path='/' element={<Navigate to={MOVIES}/>}/>
			</Routes>
		</>
	);
};

export default RouteMap;