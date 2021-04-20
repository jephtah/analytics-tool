//import { registrationReducer } from "./registration.reducer";
import  userReducer  from "./users.reducer"
import { combineReducers } from "@reduxjs/toolkit"

export default combineReducers({
    //auth: authenticationReducer,
    //errors: registrationReducer,
    users: userReducer
})
