import { dashboardService } from '../_services'
import { dashboardConstants } from '../_constants'

export const dashboardActions = {
  getAll
}

function getAll () {
  return async dispatch => {
    dispatch(request())

    try {
      const data = await dashboardService.getAll()
      dispatch(success(data))
    } catch (error) {
      dispatch(failure(error.toString()))
    }
  }

  function request () { return { type: dashboardConstants.GETALL_REQUEST } }
  function success (data) { return { type: dashboardConstants.GETALL_SUCCESS, data } }
  function failure (error) { return { type: dashboardConstants.GETALL_FAILURE, error } }
}
