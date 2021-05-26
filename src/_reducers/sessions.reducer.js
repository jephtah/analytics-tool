import { sessionConstants } from '../_constants'

export function sessions (state = {}, action) {
  switch (action.type) {
    case sessionConstants.GETALL_REQUEST:
      return {
        loading: true
      }
    case sessionConstants.GETALL_SUCCESS:
      return {
        sessions: action.sessions
      }
    case sessionConstants.GETALL_FAILURE:
      return {
        error: action.error
      }
    default:
      return state
  }
}
