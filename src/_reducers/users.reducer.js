import { FETCH_USERS } from '../_constants/user.constants'

const initialState = {
    users: [],
    user : {}
}

export const usersReducer = (state=initialState, action) =>
{
    switch(action.type){
        case FETCH_USERS:
            return{
                ...state,
                users: action.payload
            }
        default:
            return state
    }
}
