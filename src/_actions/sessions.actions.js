import { sessionConstants } from '../_constants'
import { sessionService } from '../_services'

export const sessionActions = {
  getAllSessions
}

function getAllSessions () {
  return async dispatch => {
    dispatch(request())

    try {
      const sessions = await sessionService.getAll()
      dispatch(success(sessions))
    } catch (error) {
      dispatch(failure(error.toString()))
    }
  }

  function request () { return { type: sessionConstants.GETALL_REQUEST } }
  function success (sessions) { return { type: sessionConstants.GETALL_SUCCESS, sessions } }
  function failure (error) { return { type: sessionConstants.GETALL_FAILURE, error } }
}
