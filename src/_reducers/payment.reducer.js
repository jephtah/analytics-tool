import { createSlice } from "@reduxjs/toolkit"

export const initialState = {
    payments : []
}

const paymentSlice = createSlice({
    name: "payment",
    initialState,
    reducers: {
        getPayment: (state, {payload}) => {
            state.payments = payload
        }
    }
})

export const { getPayment }  = paymentSlice.actions

export default paymentSlice.reducer
