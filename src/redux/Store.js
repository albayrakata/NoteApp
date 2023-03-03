import {configureStore,combineReducers} from '@reduxjs/toolkit';
import notesReducer from './NoteSlice'

const rootReducer = combineReducers ({
    notes:notesReducer
})

const store =configureStore({
    reducer:rootReducer,
})

export default store