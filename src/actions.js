export function init() {
    return function (dispatch) {
        fetch('http://localhost:3004/api/', {
            method: 'get'
        })
        .then(response => response.json())
        .then(reportsData => {
            dispatch({ type: 'SET_REPORTS', reportsData })
        })
        .catch(function (err) {
            console.log('ERROR: ', err);
        });
    }
}