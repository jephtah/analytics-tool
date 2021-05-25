import { sessionConstants } from "../_constants"
import { sessionService } from "../_services"

export const singleSessionActions = {
    getSingleSession
}

function getSingleSession() {
    return async dispatch => {
      dispatch(request());
  
      try {
        const singleSession = await sessionService.getSingleSession()
        dispatch(success(singleSession))
      }
      catch (error) {
        dispatch(failure(error.toString()))
      }
    }
  
    function request () {return { type: sessionConstants.GETSINGLE_REQUEST}}
    function success (sessions) { return { type: sessionConstants.GETSINGLE_SUCCESS, sessions}}
    function failure (error)  { return { stype: sessionActions.GETSINGLE_FAILURE, error}}
  }