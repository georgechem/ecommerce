/*
Configuration file
 */

const prefix = '';

export const url_login = prefix + '/api/login';

// Config for POST FETCH
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

}
