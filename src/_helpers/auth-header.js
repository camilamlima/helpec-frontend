export function authHeader() {
    // return authorization header with jwt token
    let user = JSON.parse(window.localStorage.getItem('user'));

    if (user && user.key) {
        return { 'Authorization': 'Bearer ' + user.key };
    } else {
        return {};
    }
}

export function getUser() {
    // return authorization user saved
    let user = JSON.parse(window.localStorage.getItem('user'));

    if (user && user.key) {
        return true;
    } else {
        return false;
    }
}