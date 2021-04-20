import { FETCH_USERS } from "../_constants/user.constants"


let url 

export const fetchUsers = () => dispatch => 
{
    fetch(url)
    .then(response => response.json())
    .then(users => 
        dispatch({
            type: FETCH_USERS,
            payload: users
        })
    )
}
