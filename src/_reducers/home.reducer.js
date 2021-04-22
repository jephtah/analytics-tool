import { createSlice } from "@reduxjs/toolkit"

export const initialState = {
    signups : [],
    topics : [],
    comments : []
}

const homeSlice = createSlice({
    name: "home",
    initialState,
    reducers : {
        getHomeData : (state, { payload }) => {
            state.signups = payload.signups
            state.topics = payload.topics
            state.comments = payload.comments
        }
    }
})

export const { getHomeData } = homeSlice.actions

export default homeSlice.reducer
