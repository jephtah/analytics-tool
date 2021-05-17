import { accountConstants } from '../_constants';

export function accounts (state = {}, action ) {
    switch (action.type) {
        case accountConstants.GETALL_REQUEST:
            return {
                loading: true
            }
        case accountConstants.GETALL_SUCCESS:
            return {
                accounts: action.accounts
            }
        case accountConstants.GETALL_FAILURE:
            return {
                error: action.error
            }
        default:
            return state

    }
}
