import { createSlice } from "@reduxjs/toolkit"

export const initialState = {
    userSession : []
}

const sessionSlice = createSlice({
    name: "session",
    initialState,
    reducers: {
        getSession: (state, {payload}) => {
            state.userSession = payload.users
        }
    }
})

export const { getSession }  = sessionSlice.actions

export default sessionSlice.reducer
