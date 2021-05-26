import axios from 'axios';
import { config} from '../_config';
import { authHeader } from '../_helpers';

export const accountService = {
    getAll,
    getSearch
}


async function getAll() {
    const requestOptions = {
        method: 'GET',
        headers: { ...authHeader(), 'Content-Type': 'application/json' },
    }


    const response = await axios(`${config.testUrl}/admin/manage-docs-couns`, requestOptions);


    const  accounts  = response.data.data

    return accounts;
}

async function getSearch(searchStr) {
    const requestOptions = {
        method: "GET",
        headers : { ...authHeader(), "Content-Type" : 'application/json' },
    }

    const response = await axios(`${config.testUrl}/admin/search ${searchStr}`, requestOptions)

    const { accounts } = response.data

    return accounts
}