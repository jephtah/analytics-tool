//import { registrationReducer } from "./registration.reducer";
import { users }  from "./users.reducer";
import { accounts } from "./accounts.reducer";
import { sessions } from "./sessions.reducer";
import { zones } from "./zone.reducer";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
    users,
    accounts,
    sessions,
    zones
})

export default rootReducer;
