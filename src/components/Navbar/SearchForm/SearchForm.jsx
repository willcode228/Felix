import React, { useState } from 'react';
import styles from './SearchForm.module.scss';
import { useNavigate } from 'react-router';
import { SEARCH } from '../../../routes/consts';

const SearchForm = () => {
	const [searchQuery, setSearchQuery] = useState('');
	const navigation = useNavigate();

	const changeHandler = (e) => {
		setSearchQuery(e.target.value);
	}

	const submitHandler = (e) => {
		e.preventDefault();
		if(searchQuery.trim()) {
			navigation(`${SEARCH}/${searchQuery}`);
		}
	};

	return (
		<form onSubmit={submitHandler} className={styles.search}>
			<input
				value={searchQuery}
				onChange={changeHandler}
				className={styles.search__input}
				type="text"
				placeholder="Type to search..."
			/>
			<button className={styles.search__btn} type="submit">Search</button>
		</form>
	);
};

export default SearchForm;