import {combineReducers, configureStore} from "@reduxjs/toolkit";
import FileReducer from './fileSlice';

const rootReducer = combineReducers({
    files: FileReducer,
})

export const store = configureStore({
    reducer: rootReducer,
    devTools: true,
})


export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch