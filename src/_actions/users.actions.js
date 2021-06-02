// import { history } from "../_helpers/history";
import { userService } from '../_services'
import { alertActions } from './alert.actions'
import { userConstants } from '../_constants'
// import { useHistory } from 'react-router';
// import {config} from '../_config';
import Router from 'next/router'

export const userActions = {
  login,
  getAll,
  getSearch,
  getPaginated
}

function getAll () {
  return async dispatch => {
    dispatch(request())

    try {
      const users = await userService.getAll()
      dispatch(success(users))
    } catch (error) {
      dispatch(failure(error.toString()))
    }
  }

  function request () { return { type: userConstants.GETALL_REQUEST } }
  function success (users) { return { type: userConstants.GETALL_SUCCESS, users } }
  function failure (error) { return { type: userConstants.GETALL_FAILURE, error } }
}

function getPaginated (hasNext, hasPrev) {
  return async dispatch => {
    dispatch(request(hasNext, hasPrev))
    try {
      const users = await userService.getPaginated(hasNext, hasPrev)
      dispatch(success(users))
    } catch (error) {
      dispatch(failure(error.toString()))
    }
  }

  function request (hasNext, hasPrev) { return { type: userConstants.GETALL_REQUEST, hasNext, hasPrev } }
  function success (users) { return { type: userConstants.GETALL_SUCCESS, users } }
  function failure (error) { return { type: userConstants.GETALL_FAILURE, error } }
}

function getSearch (searchStr) {
  console.log(searchStr)
  return async dispatch => {
    dispatch(request(searchStr))

    try {
      const users = await userService.getSearch(searchStr)
      dispatch(success(users))
    } catch (error) {
      dispatch(failure(error.toString()))
    }
  }

  function request (searchStr) { return { type: userConstants.GETSEARCH_REQUEST, searchStr } }
  function success (users) { return { type: userConstants.GETSEARCH_SUCCESS, users } }
  function failure (error) { return { type: userConstants.GETSEARCH_FAILURE, error } }
}

function login (username, password, history) {
  return dispatch => {
    dispatch(request({ username }))

    userService.login(username, password)
      .then(
        user => {
          dispatch(success(user))
          Router.push('/users')
        },
        error => {
          dispatch(failure(error.toString()))
          dispatch(alertActions.error(error.toString()))
        }
      )
  }

  function request (user) { return { type: userConstants.LOGIN_REQUEST, user } }
  function success (user) { return { type: userConstants.LOGIN_SUCCESS, user } }
  function failure (error) { return { type: userConstants.LOGIN_FAILURE, error } }
}
