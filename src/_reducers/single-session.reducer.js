import { singleSessionActions } from "../_actions"
import { singleSessionConstants } from "../_constants"

export function singleSession (state = {}, action) 
{
    switch(action.type) {
        case singleSessionConstants.GETSINGLE_REQUEST:
            return {
                loading: true
            }
        case singleSessionConstants.GETSINGLE_SUCCESS:
            return {
                singleSession: singleSessionActions.singleSession
            }
        case singleSessionConstants.GETSINGLE_FAILURE:
            return {
                error: action.error
            }
    }
}