//import { registrationReducer } from "./registration.reducer";
import  usersReducer  from "./users.reducer"
import homeReducer from "./home.reducer"
import postReducer from "./posts.reducer"
import sessionReducer from './session.reducer'
import couponsReducer from "./coupons.reducer"
import paymentReducer from "./payment.reducer"
import healthReducer from "./doc&couns.reducer"
import { combineReducers } from "@reduxjs/toolkit"


export default combineReducers({
    //auth: authenticationReducer,
    //errors: registrationReducer,
    users: usersReducer,
    home: homeReducer,
    posts: postReducer,
    sessions : sessionReducer,
    coupons: couponsReducer,
    health : healthReducer,
    payment : paymentReducer,
})
