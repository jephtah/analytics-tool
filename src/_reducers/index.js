//import { registrationReducer } from "./registration.reducer";
import  usersReducer  from "./users.reducer"
import { combineReducers } from "@reduxjs/toolkit"

export default combineReducers({
    //auth: authenticationReducer,
    //errors: registrationReducer,
    users: usersReducer
})
