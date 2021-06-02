import { sessionConstants } from '../_constants'
import { sessionService } from '../_services'

export const sessionActions = {
  getAllSessions,
  getPaginated,
  getSearch
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

function getPaginated (hasNext, hasPrev) {
  return async dispatch => {
    dispatch(request(hasNext, hasPrev))
    try {
      const sessions = await sessionService.getPaginated(hasNext, hasPrev)
      console.log(sessions)
      dispatch(success(sessions))
    } catch (error) {
      dispatch(failure(error.toString()))
    }
  }

  function request (hasNext, hasPrev) { return { type: sessionConstants.GETALL_REQUEST, hasNext, hasPrev } }
  function success (sessions) { return { type: sessionConstants.GETALL_SUCCESS, sessions } }
  function failure (error) { return { type: sessionConstants.GETALL_FAILURE, error } }
}

function getSearch (searchStr) {
  console.log(searchStr)
  return async dispatch => {
    dispatch(request(searchStr))

    try {
      const sessions = await sessionService.getSearch(searchStr)
      dispatch(success(sessions))
    } catch (error) {
      dispatch(failure(error.toString()))
    }
  }

  function request (searchStr) { return { type: sessionConstants.GETSEARCH_REQUEST, searchStr } }
  function success (sessions) { return { type: sessionConstants.GETSEARCH_SUCCESS, sessions } }
  function failure (error) { return { type: sessionConstants.GETSEARCH_FAILURE, error } }
}
