//import { registrationReducer } from "./registration.reducer";
import  usersReducer  from "./users.reducer"
import homeReducer from "./home.reducer"
import postReducer from "./posts.reducer"
import { combineReducers } from "@reduxjs/toolkit"
import postsReducer from "./posts.reducer"

export default combineReducers({
    //auth: authenticationReducer,
    //errors: registrationReducer,
    users: usersReducer,
    home: homeReducer,
    posts: postReducer
})
