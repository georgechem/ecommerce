/*
Configuration file
 */

const prefix = '';

export const url_login = prefix + '/api/login';

// Config for method=POST fn=FETCH -- To LOG-IN AND GET TOKEN
export const fetchPostConfig = (body) => {
    return {
        method: 'POST',
        mode: 'cors',
        cache: 'no-cache',
        credentials: 'same-origin',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(body)
    }

};
// Config for method=GET fn=FETCH
export const url_authorize = prefix + '/api/authorization';

export const fetchGetConfig = () => {
    return {
        method: 'GET',
        mode: 'cors',
        cache: 'no-cache',
        credentials: 'same-origin',
        headers:{
            'Content-Type': 'application/json'
        }
    };
}
