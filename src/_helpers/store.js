import { configureStore } from "@reduxjs/toolkit"
import rootReducer from '../_reducers';

export default configureStore({
    reducer: {
        root : rootReducer,
    }
})
