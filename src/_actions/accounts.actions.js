
import { accountConstants } from '../_constants'
import { accountService } from '../_services'

export const accountActions = {
  getAllAccounts,
  getSearch,
  getPaginated
}

function getAllAccounts () {
  return async dispatch => {
    dispatch(request())

    try {
      const accounts = await accountService.getAll()
      dispatch(success(accounts))
    } catch (error) {
      dispatch(failure(error.toString()))
    }
  }

  function request () { return { type: accountConstants.GETALL_REQUEST } }
  function success (accounts) { return { type: accountConstants.GETALL_SUCCESS, accounts } }
  function failure (error) { return { type: accountConstants.GETALL_FAILURE, error } }
}
function getPaginated ({ hasNext, hasPrevious }) {
  return async dispatch => {
    dispatch(request(hasNext, hasPrevious))
    try {
      const accounts = await accountService.getPaginated(hasNext, hasPrevious)
      dispatch(success(accounts))
    } catch (error) {
      dispatch(failure(error.toString()))
    }
  }

  function request (hasNext, hasPrevious) { return { type: accountService.GETALL_REQUEST, hasNext, hasPrevious } }
  function success (accounts) { return { type: accountService.GETALL_SUCCESS, accounts } }
  function failure (error) { return { type: accountService.GETALL_FAILURE, error } }
}

function getSearch (searchStr, hasNext, hasPrevious) {
  return async dispatch => {
    dispatch(request(searchStr))

    try {
      const accounts = await accountService.getSearch(searchStr, hasNext, hasPrevious)
      dispatch(success(accounts))
    } catch (error) {
      dispatch(failure(error.toString()))
    }
  }

  function request (searchStr, hasNext, hasPrevious) { return { type: accountConstants.GETSEARCH_REQUEST, searchStr, hasNext, hasPrevious } };
  function success (accounts) { return { type: accountConstants.GETSEARCH_SUCCESS, accounts } }
  function failure (error) { return { type: accountConstants.GETSEARCH_FAILURE, error } }
}
