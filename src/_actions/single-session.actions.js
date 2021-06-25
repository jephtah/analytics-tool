import { singleSessionConstants } from '../_constants'
import { singleSessionService } from '../_services'

export const singleSessionActions = {
  getSingleSession
}

function getSingleSession (username) {
  return async dispatch => {
    dispatch(request(username))
    try {
      const singleSession = await singleSessionService.getSingleSession(username)
      console.log()
      dispatch(success(singleSession))
    } catch (error) {
      dispatch(failure(error.toString()))
    }
  }

  function request (username) { return { type: singleSessionConstants.GETSINGLE_REQUEST, username } }
  function success (sessions) { return { type: singleSessionConstants.GETSINGLE_SUCCESS, sessions } }
  function failure (error) { return { type: singleSessionConstants.GETSINGLE_FAILURE, error } }
}
