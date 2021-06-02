import { zoneConstants } from '../_constants'

export function zones (state = {}, action) {
  switch (action.type) {
    case zoneConstants.GETALL_REQUEST:
      return {
        loading: true
      }
    case zoneConstants.GETALL_SUCCESS:
      return {
        zones: action.zones
      }
    case zoneConstants.GETALL_FAILURE:
      return {
        error: action.error
      }
    case zoneConstants.GETSEARCH_REQUEST:
      return {
        loading: true
      }
    case zoneConstants.GETSEARCH_SUCCESS:
      return {
        zones: action.zones
      }
    case zoneConstants.GETSEARCH_FAILURE:
      return {
        error: action.error
      }
    case zoneConstants.UPDATEZONE_REQUEST:
      return {
        loading: true
      }
    case zoneConstants.UPDATEZONE_SUCCESS:
      return {
        zones: action.zones
      }
    case zoneConstants.UPDATEZONE_FAILURE:
      return {
        error: action.error
      }
    case zoneConstants.DELETEZONE_REQUEST:
      return {
        loading: true
      }
    case zoneConstants.DELETEZONE_SUCCESS:
      return {
        zones: action.zones
      }
    case zoneConstants.DELETEZONE_FAILURE:
      return {
        error: action.error
      }
    default:
      return state
  }
}
