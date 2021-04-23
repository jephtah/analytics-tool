import { createSlice } from "@reduxjs/toolkit"

export const initialState = {
    userCoupons : []
}

const couponSlice =createSlice({
    name : "coupons",
    initialState,
    reducers : {
        getCoupon : (state, { payload }) => {
            state.userCoupons = payload
        }
    }
})

export const { getCoupon } = couponSlice.actions

export default couponSlice.reducer
