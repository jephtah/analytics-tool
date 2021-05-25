import {singleSessionConstants} from "../_constants"
import {singleSessionService} from "../_services"

export const singleSessionActions = {
    getSingleSession
}

function getSingleSession() {
    return async dispatch => {
      dispatch(request());
  
      try {
        const singleSession = await singleSessionService.getSingleSession()
        dispatch(success(singleSession))
      }
      catch (error) {
        dispatch(failure(error.toString()))
      }
    }
  
    function request () {return { type: singleSessionConstants.GETSINGLE_REQUEST}}
    function success (sessions) { return { type: singleSessionConstants.GETSINGLE_SUCCESS, sessions}}
    function failure (error)  { return { type: singleSessionConstants.GETSINGLE_FAILURE, error}}
  }