import { userConstants } from '../_constants';

export function users(state = {}, action ) {
    switch (action.type) {
        case userConstants.GETALL_REQUEST:
            return {
                loading: true
            }
        case userConstants.GETALL_SUCCESS:
            return {
                users: action.users
            }
        case userConstants.GETALL_FAILURE:
            return {
                error: action.error
            }

        case userConstants.GETSEARCH_REQUEST:
            return {
                loading: true
            }
        case userConstants.GETSEARCH_SUCCESS:
            return {
                users: action.users
            }
        case userConstants.GETSEARCH_FAILURE:
            return{
                error: action.error
            }
        default:
            return state
    }
}
