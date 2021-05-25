import { dashboardConstants } from "../_constants"

export function dashboardData( state= {}, action) {
    switch (action.type) {
        case dashboardConstants.GETALL_REQUEST:
            return {
                loading : true
            }
        case dashboardConstants.GETALL_SUCCESS:
            return {
                data : action.data
            }
        case dashboardConstants.GETALL_FAILURE:
            return {
                error: action.error
            }
        default:
            return state
    }
}
