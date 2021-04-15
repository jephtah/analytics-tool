import { registrationReducer } from "./registration.reducer";
import { usersReducer } from "./users.reducer"

export default combineReducers({
    auth: authenticationReducer,
    errors: registrationReducer,
    user: usersReducer
})