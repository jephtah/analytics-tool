import Router from 'next/router'
import { zoneConstants } from '../_constants'
import { zoneService } from '../_services'
import { alertActions } from './alert.actions'

export const zoneActions = {
  getAll,
  getSearch,
  getPaginated,
  updateZone,
  deleteZone
}

function getAll () {
  return async dispatch => {
    dispatch(request())

    try {
      const zones = await zoneService.getAll()
      dispatch(success(zones))
    } catch (error) {
      dispatch(failure(error.toString()))
    }
  }

  function request () { return { type: zoneConstants.GETALL_REQUEST } }
  function success (zones) { return { type: zoneConstants.GETALL_SUCCESS, zones } }
  function failure (error) { return { type: zoneConstants.GETALL_FAILURE, error } }
}

function getPaginated ({ hasNext, hasPrevious }) {
  return async dispatch => {
    dispatch(request(hasNext, hasPrevious))
    try {
      const zones = await zoneService.getPaginated(hasNext, hasPrevious)
      dispatch(success(zones))
    } catch (error) {
      dispatch(failure(error.toString()))
    }
  }

  function request (hasNext, hasPrevious) { return { type: zoneConstants.GETALL_REQUEST, hasNext, hasPrevious } }
  function success (zones) { return { type: zoneConstants.GETALL_SUCCESS, zones } }
  function failure (error) { return { type: zoneConstants.GETALL_FAILURE, error } }
}

function getSearch (searchStr, hasNext, hasPrevious) {
  return async dispatch => {
    dispatch(request(searchStr, hasNext, hasPrevious))
    try {
      const zones = await zoneService.getSearch(searchStr, hasNext, hasPrevious)
      dispatch(success(zones))
    } catch (error) {
      dispatch(failure(error.toString()))
    }
  }

  function request (searchStr, hasNext, hasPrevious) { return { type: zoneConstants.GETSEARCH_REQUEST, searchStr, hasNext, hasPrevious } }
  function success (zones) { return { type: zoneConstants.GETSEARCH_SUCCESS, zones } }
  function failure (error) { return { type: zoneConstants.GETSEARCH_FAILURE, error } }
}

function updateZone (slug, title, content) {
  return async dispatch => {
    dispatch(request(slug, title, content))

    try {
      const zones = await zoneService.updatePost(slug, title, content)
      dispatch(success(zones))
    } catch (error) {
      dispatch(failure(error.toString()))
    }
  }

  function request (slug, title, content) { return { type: zoneConstants.UPDATEZONE_REQUEST, slug, title, content } }
  function success (zones) { return { type: zoneConstants.UPDATEZONE_SUCCESS, zones } }
  function failure (error) { return { type: zoneConstants.UPDATEZONE_FAILURE, error } }
}

function deleteZone (slug) {
  return async dispatch => {
    dispatch(request(slug))

    try {
      const zones = await zoneService.deletePost(slug)
      dispatch(success(zones))
      dispatch(alertActions.success(zones))
      setTimeout(() => {
        location.reload()
      }, 3000)
    } catch (error) {
      dispatch(failure(error.toString()))
      dispatch(alertActions.error(error.toString()))
    }
  }

  function request (slug) { return { type: zoneConstants.DELETEZONE_REQUEST, slug } }
  function success (zones) { return { type: zoneConstants.DELETEZONE_SUCCESS, zones } }
  function failure (error) { return { type: zoneConstants.DELETE_FAILURE, error } }
}
