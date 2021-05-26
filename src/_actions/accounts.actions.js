
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
      console.log(accounts)
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
    dispatch(request({ searchStr }))

    try {
      const accounts = await accountService.getSearch({ searchStr })
      dispatch(success(accounts))
    } catch (error) {
      dispatch(failure(error.toString()))
    }
  }

  function request (users) { return { type: accountConstants.GETSEARCH_REQUEST, users } };
  function success (users) { return { type: accountConstants.GETSEARCH_SUCCESS, users } }
  function failure (error) { return { type: accountConstants.GETSEARCH_FAILURE, error } }
}
