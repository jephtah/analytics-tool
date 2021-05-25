import { accountActions, singleSessionConstants } from "../_actions"
import { singleSessionContants } from "../_constants/single-session.constants"

export function singleSession (state ={}, action) 
{
    switch(action.type) {
        case singleSessionConstants.GETSINGLE_REQUEST:
            return {
                loading: true
            }
        case singleSessionContants.GETSINGLE_SUCCESS:
            return {
                singleSession: accountActions.singleSession
            }
        case singleSessionContants.GETSINGLE_FAILURE:
            return {
                error: action.error
            }
    }
}