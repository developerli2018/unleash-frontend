import { throwIfNotSuccess, headers } from './helper';

const URI = 'api/admin/archive';

function fetchAll () {
    return fetch(`${URI}/features`, { credentials: 'include' })
        .then(throwIfNotSuccess)
        .then(response => response.json());
}

function revive (featureName) {
    return fetch(`${URI}/revive/${featureName}`, {
        method: 'POST',
        headers,
        credentials: 'include',
    }).then(throwIfNotSuccess);
}


module.exports = {
    fetchAll,
    revive,
};

