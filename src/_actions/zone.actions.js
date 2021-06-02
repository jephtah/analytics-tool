import { zoneConstants } from '../_constants'
import { zoneService } from '../_services'

export const zoneActions = {
  getAll,
  getSearch,
  getPaginated
}

function getAll () {
  return async dispatch => {
    dispatch(request())

    try {
      const zones = await zoneService.getAll()
      console.log('Zones', zones)
      dispatch(success(zones))
    } catch (error) {
      dispatch(failure(error.toString()))
    }
  }

  function request () { return { type: zoneConstants.GETALL_REQUEST } }
  function success (zones) { return { type: zoneConstants.GETALL_SUCCESS, zones } }
  function failure (error) { return { type: zoneConstants.GETALL_FAILURE, error } }
}

function getPaginated (hasNext, hasPrev) {
  return async dispatch => {
    dispatch(request(hasNext, hasPrev))
    try {
      const zones = await zoneService.getPaginated(hasNext, hasPrev)
      dispatch(success(zones))
    } catch (error) {
      dispatch(failure(error.toString()))
    }
  }

  function request (hasNext, hasPrev) { return { type: zoneConstants.GETALL_REQUEST, hasNext, hasPrev } }
  function success (zones) { return { type: zoneConstants.GETALL_SUCCESS, zones } }
  function failure (error) { return { type: zoneConstants.GETALL_FAILURE, error } }
}

function getSearch (searchStr) {
  return async dispatch => {
    dispatch(request(searchStr))
    try {
      const zones = await zoneService.getSearch(searchStr)
      dispatch(success(zones))
    } catch (error) {
      dispatch(failure(error.toString()))
    }
  }

  function request (searchStr) { return { type: zoneConstants.GETSEARCH_REQUEST, searchStr } }
  function success (zones) { return { type: zoneConstants.GETSEARCH_SUCCESS, zones } }
  function failure (error) { return { type: zoneConstants.GETSEARCH_FAILURE, error } }
}
