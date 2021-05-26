import { zoneConstants } from '../_constants';

export function zones(state = {}, action ) {
    switch (action.type) {
        case zoneConstants.GETALL_REQUEST:
            return {
                loading: true
            }
        case zoneConstants.GETALL_SUCCESS:
            return {
                zones: action.zones
            }
        case zoneConstants.GETALL_FAILURE:
            return {
                error: action.error
            }
        case zoneConstants.GETSEARCH_REQUEST:
            return {
                loading: true
            }
        case zoneConstants.GETSEARCH_SUCCESS:
            return {
                zones: action.zones
            }
        case zoneConstants.GETSEARCH_FAILURE:
            return {
                error : action.error
            }
        default:
            return state

    }
}
