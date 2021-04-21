import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import { config } from "../_config/index"
import { Token } from "../_constants/user.constants"
const { testUrl } = config

let url = `${testUrl}/admin/manage-users/`

export const initialState = {
    users: [],
    hasErrors: false,
}

const usersSlice = createSlice({
    name: "users",
    initialState,
    reducers: {
        getUsers: (state, { payload }) => {
            state.users = payload
            state.hasErrors = false
        },

        getUsersFailure: state => {
            state.hasErrors = true
        },
    },
})

export function fetchUsers() {
    return async dispatch => {
        
        try {
            let h = new Headers()
            h.append('Authorization', `Bearer ${Token}`)
            const response = await fetch(`${url}`, {
                method:"GET",
                mode: 'cors',
                headers: h
            })
            const data = await response.json()
            dispatch(getUsers(data.data.users))
        } catch (error) {
            console.log(error)
        }
    }
   
}


export const { getUsers, getUsersFailure } = usersSlice.actions

export const userSelector = state => state



export default usersSlice.reducer

