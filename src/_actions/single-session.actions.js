import { singleSessionConstants } from '../_constants'
import { singleSessionService } from '../_services'

export const singleSessionActions = {
  getSingleSession,
  endSession
}

function getSingleSession (username) {
  return async dispatch => {
    dispatch(request(username))
    try {
      const singleSession = await singleSessionService.getSingleSession(username)
      dispatch(success(singleSession))
    } catch (error) {
      dispatch(failure(error.toString()))
    }
  }

  function request (username) { return { type: singleSessionConstants.GETSINGLE_REQUEST, username } }
  function success (sessions) { return { type: singleSessionConstants.GETSINGLE_SUCCESS, sessions } }
  function failure (error) { return { type: singleSessionConstants.GETSINGLE_FAILURE, error } }
}

function endSession (with_user, id) {
  return async dispatch => {
    dispatch(request(with_user, id))
    try {
      const endsession = await singleSessionService.endSession(with_user, id)
      dispatch(success(endsession))
    } catch (error) {
      dispatch(failure(error.toString()))
    }
  }
  function request (with_user, id) { return { type: singleSessionConstants.ENDSESSION_REQUEST, with_user, id } }
  function success (endsession) { return { type: singleSessionConstants.ENDSESSION_SUCCESS, endsession } }
  function failure (error) { return { type: singleSessionConstants.ENDSESSION_FAILURE, error } }
}
