/*
Configuration file
 */

// LOCAL
//const prefix = '';
//export const ex_path = '';

// REMOTE
export const ex_path = '/ecommerce/public/index.php';
const prefix = '/ecommerce/public/index.php';

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
export const url_logout = prefix + '/api/logout';
export const url_getAllProducts = prefix + '/api/products';

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
