export default function reducer(state = {}, action) {
	switch (action.type) {
		case 'SET_REPORTS':
			return Object.assign({}, state, {latestReports: action.latestReports});

		default:
			return state;
	}
}
