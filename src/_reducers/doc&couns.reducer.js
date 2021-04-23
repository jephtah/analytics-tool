import { createSlice } from "@reduxjs/toolkit"

export const initialState = {
    healthPractitioners : []
}

const doctorsSlice = createSlice({
    name: "health",
    initialState,
    reducers: {
        getHealth: (state, { payload }) => {
            state.healthPractitioners = payload
        }
    }
})

export const { getHealth }  = doctorsSlice.actions

export default doctorsSlice.reducer
