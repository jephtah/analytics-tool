import {config} from '../_config';
import {authHeader} from "../_helpers";
import axios from "axios";

export const userService = {
    login,
    getAll
};

async function login(username, password) {
    // const requestOptions = {
    //     method: 'POST',
    //     headers: {'Content-Type': 'application/json'},
    //     body: JSON.stringify(({username, password}))
    // };
    //     return fetch(`${config.testUrl}/auth/signin`, requestOptions).then(handleResponse)

    const response =  await axios.post(`${config.testUrl}/auth/signin`, {username, password})

    const { token, user } = response.data.data

    localStorage.setItem('user', JSON.stringify(user));

    localStorage.setItem('token', JSON.stringify(token));

    console.log('token', token);
    console.log('user', user)

    return user;
}

async function getAll() {
    const requestOptions = {
        method: 'GET',
        headers: { ...authHeader(), 'Content-Type': 'application/json' },
    }


    const response = await axios(`${config.testUrl}/admin/manage-users`, requestOptions);


    const { users } = response.data.data

    return users;
}


function handleResponse(response) {
    return response.text().then(text => {
        const data = text && JSON.parse(text);
        if (!response.ok) {
            if (response.status === 401) {
                // auto logout if 401 response returned from api
                logout();
                location.reload(true);
            }

            const error = (data && data.message) || response.statusText;
            return Promise.reject(error);
        }

        return data;
    });
}
