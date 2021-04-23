import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    posts : [],
    cursors : []
}

const postSlice = createSlice({
    name: "posts",
    initialState,
    reducers: {
        getPosts: (state, { payload }) => {
            state.posts = payload.posts
            state.cursors = payload.cursors
        }
    }  
})

export const { getPosts } = postSlice.actions

export default postSlice.reducer