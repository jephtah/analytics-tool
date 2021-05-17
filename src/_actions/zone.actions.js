import { zoneConstants } from "../_constants";
import { zoneService } from "../_services";

export const zoneActions = {
    getAll
}

function getAll () {
    return async dispatch => {
        dispatch(request());

        try {
            const zones =  await zoneService.getAll()
            console.log('Zones', zones)
            dispatch(success(zones))
          } catch (error) {
            dispatch(failure(error.toString()))
          }
    }


    function request() { return { type: zoneConstants.GETALL_REQUEST}}
    function success(zones) { return { type: zoneConstants.GETALL_SUCCESS, zones}}
    function failure(error) { return { type: zoneConstants.GETALL_FAILURE, error}}
}