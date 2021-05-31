
import { accountConstants } from '../_constants'
import { accountService } from '../_services'

export const accountActions = {
  getAllAccounts,
  getSearch
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

function getSearch (searchStr) {
  return async dispatch => {
    dispatch(request(searchStr))

    try {
      const accounts = await accountService.getSearch(searchStr)
      dispatch(success(accounts))
    } catch (error) {
      dispatch(failure(error.toString()))
    }
  }

  function request (searchStr) { return { type: accountConstants.GETSEARCH_REQUEST, searchStr } };
  function success (accounts) { return { type: accountConstants.GETSEARCH_SUCCESS, accounts } }
  function failure (error) { return { type: accountConstants.GETSEARCH_FAILURE, error } }
}
