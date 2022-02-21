import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import ErrorPage from '../../components/ErrorPage/ErrorPage';

const ErrorHoc = ({Component}) => {
	const {error} = useSelector(state => state.errorPage);
	return error ? <ErrorPage /> : <Component />;
};

export default ErrorHoc;