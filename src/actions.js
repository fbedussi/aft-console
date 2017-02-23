export function init() {
    return function (dispatch) {
        fetch('http://localhost:3004/api/', {
            method: 'get'
        })
        .then(response => response.json())
        .then(json => {
            var latestReports = json.stores.map(storeData => {
                var lastStoreReport = json.reports[storeData.id].sort((a,b) => a.date < b.date)[0];
                
                return {
                    store: storeData.name,
                    date: lastStoreReport.date,
                    passed: lastStoreReport.passed,
                    link: lastStoreReport.link
                };
            });


            dispatch({ type: 'SET_REPORTS', latestReports })
        })
        .catch(function (err) {
            console.log('ERROR: ', err);
        });
    }
}