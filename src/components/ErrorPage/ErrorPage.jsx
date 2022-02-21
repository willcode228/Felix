import React from 'react';
import {ReactComponent as ErrorIcon} from '../../assets/icons/error.svg';
import styles from './ErrorPage.module.scss';
import { useDispatch } from 'react-redux';
import { setErrorPage } from '../../store/ErrorPage/actions';
import { useNavigate } from 'react-router';

const ErrorPage = () => {
	const dispatch = useDispatch();
	const navigate = useNavigate();

	const changeErrorStatus = () => {
		navigate(-1);
		dispatch(setErrorPage());
	}

	return (
		<div className={styles.errorPage}>
			<ErrorIcon />
			<h2>Sorry, it's not you, it's us.<br/> We already left to deal with this problem.</h2>
		</div>
	);
};

export default ErrorPage;