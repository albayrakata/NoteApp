import { createSlice } from "@reduxjs/toolkit";

export const noteSlice = createSlice({
    name: 'notes',
    initialState: {
        notes: [],
    },
    reducers: {
        addNote: (state, action) => {
            state.lastId += 1
            let notes = [{ ...action.payload }, ...state.notes]
        
            state.notes = notes
        },
        editNote: (state, action) => {
            let editedNote = action?.payload
            let updatedNotes = state.notes.map(note => {
                if (note?.id === editedNote?.id) {
                    return {
                        ...note,
                        title: editedNote.title,
                        description: editedNote.description
                    };
                };
                return note;
            })
            state.notes = updatedNotes
        },
        deleteNote: (state, action) => {
            let id = action.payload?.id
            let notes = state.notes
            notes = notes.filter(item => item.id !== id)
            state.notes = notes

        }
    }
})

export const { addNote, editNote, deleteNote } = noteSlice.actions
export const notes = state => state.notes;


export default noteSlice.reducer