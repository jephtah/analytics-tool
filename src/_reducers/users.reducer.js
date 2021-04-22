import { createSlice } from "@reduxjs/toolkit"



export const initialState = {
    users: [],
    hasErrors: false,
}

const usersSlice = createSlice({
    name: "users",
    initialState,
    reducers: {
        getUsers: (state, { payload }) => {
            state.users = payload.users
            state.hasErrors = false
        },

        getUsersFailure: state => {
            state.hasErrors = true
        },
    },
})

export const { getUsers, getUsersFailure } = usersSlice.actions

export const userSelector = state => state



export default usersSlice.reducer

