import { FETCH_USERS } from '../_constants/user.constants'
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import { config } from "../_config/index"
import { Token } from "../_constants/user.constants"
const { mainUrl, testUrl } = config

let url = `${testUrl}/admin/manage-users/`
console.log(url)

export const initialState = {
    users: [],
    hasErrors: false,
}

const userSlice = createSlice({
    name: "users",
    initialState,
    reducers: {
        getUsers : (state, { payload }) => {
            state.users = payload
            state.hasErrors = false
        },

        getUsersFailure: state => {
            state.hasErrors = true
        },
    },
})

export const { getUsers, getUsersFailure } = userSlice.actions

export const userSelector = state => state.users


export default userSlice.reducer

export function fetchUsers() {
    return async dispatch => {
        dispatch(getUsers())

        let h = new Headers()
        h.append('Authorization', `Bearer ${Token}`)
        try {
            const response = await fetch(`${url}`, {
                method:"GET",
                mode: 'cors',
                headers: h
            })
            const data = await response.json()
            console.log(data)
            console.log('The keys in the data object are:',Object.keys(data))
            console.log('The data found is: ', data.data.users)
            dispatch(getUsers(data.data.users))
            
        } catch (error) {
            console.log(error)
        }
        console.log(initialState.users)
    }
   
}

export const findUsers = createAsyncThunk('users/fetchPosts', async ()=>{
    let h = new Headers()
    h.append('Authorization', `Bearer ${Token}`)
    const response = await fetch(`${url}`, {
        method:"GET",
        mode: 'cors',
        headers: h
    })
    console.log(response.data)
    console.log(response)
    return response.users
    
})
