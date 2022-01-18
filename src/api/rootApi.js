import axios from 'axios';

const URL = process.env.REACT_APP_URL,
	KEY = process.env.REACT_APP_KEY;

const rootApi = axios.create({
	baseURL: URL,
	params: {
		api_key: KEY
	}
});

export default rootApi;