import { SET_ERROR_PAGE_RESULT } from './actions';

const initialState = {
	error: false,
	errorMessage: '',
}

const errorPageReducer = (state=initialState, action) => {
		switch (action.type) {
			case SET_ERROR_PAGE_RESULT:
				return {
					error: action.payload.error,
					errorMessage: action.payload.errorMessage
				}
			default:
				return state;
		}
}


export default errorPageReducer;