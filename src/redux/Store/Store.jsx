import { configureStore } from "@reduxjs/toolkit"
import userAuthSlice from "../Reducers/UserAuthSlice"
import profileSlice from "../Reducers/ProfileSlice"

const store = configureStore({
    reducer: {
        userAuth: userAuthSlice,
        profile: profileSlice
    },
})

export default store