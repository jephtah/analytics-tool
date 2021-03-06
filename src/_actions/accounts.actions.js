
import { accountConstants } from "../_constants";
import { accountService } from "../_services";

export const accountActions = {
    getAllAccounts
}

function getAllAccounts () {
    return async dispatch => {
        dispatch(request());

        try {
            const accounts =  await accountService.getAll()
            console.log(accounts);
            dispatch(success(accounts))
          } catch (error) {
            dispatch(failure(error.toString()))
          }
    }


    function request() { return { type: accountConstants.GETALL_REQUEST}}
    function success(accounts) { return { type: accountConstants.GETALL_SUCCESS, accounts}}
    function failure(error) { return { type: accountConstants.GETALL_FAILURE, error}}
}