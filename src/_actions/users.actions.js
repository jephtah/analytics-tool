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
  getPaginated,
  updateUser
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

function getPaginated ({ hasNext, hasPrevious }) {
  return async dispatch => {
    dispatch(request(hasNext, hasPrevious))
    try {
      const users = await userService.getPaginated(hasNext, hasPrevious)
      dispatch(success(users))
    } catch (error) {
      dispatch(failure(error.toString()))
    }
  }

  function request (hasNext, hasPrevious) { return { type: userConstants.GETALL_REQUEST, hasNext, hasPrevious } }
  function success (users) { return { type: userConstants.GETALL_SUCCESS, users } }
  function failure (error) { return { type: userConstants.GETALL_FAILURE, error } }
}

function getSearch (searchStr, hasNext, hasPrevious) {
  return async dispatch => {
    dispatch(request(searchStr, hasNext, hasPrevious))

    try {
      const users = await userService.getSearch(searchStr, hasNext, hasPrevious)
      dispatch(success(users))
    } catch (error) {
      dispatch(failure(error.toString()))
    }
  }

  function request (searchStr, hasPrevious, hasNext) { return { type: userConstants.GETSEARCH_REQUEST, searchStr, hasNext, hasPrevious } }
  function success (users) { return { type: userConstants.GETSEARCH_SUCCESS, users } }
  function failure (error) { return { type: userConstants.GETSEARCH_FAILURE, error } }
}

function updateUser (userName, membershipType) {
  return async dispatch => {
    dispatch(request(userName, membershipType))
    try {
      const user = await userService.updateUser(userName, membershipType)
      console.log(user)
      dispatch(success(user))
      setTimeout(() => {
        location.reload()
      }, 2000)
    } catch (error) {
      dispatch(failure(error.toString()))
      setTimeout(() => {
        location.reload()
      }, 2000)
    }
  }
  function request (userName, membershipType) { return { type: userConstants.UPDATEUSER_REQUEST, userName, membershipType } }
  function success (user) { return { type: userConstants.UPDATEUSER_SUCCESS, user } }
  function failure (error) { return { type: userConstants.UPDATEUSER_FAILURE, error } }
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
