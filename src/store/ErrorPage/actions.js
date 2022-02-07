export const SET_ERROR_PAGE = 'ERROR_PAGE/SET_ERROR_PAGE';
export const SET_ERROR_PAGE_RESULT = 'ERROR_PAGE/SET_ERROR_PAGE_RESULT';

export const setErrorPageResult = (payload) => ({
	type: SET_ERROR_PAGE_RESULT, payload
});

export const setErrorPage = (payload) => ({
	type: SET_ERROR_PAGE, payload
});

