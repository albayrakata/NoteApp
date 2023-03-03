import React from "react";
import Notes from "./Notes";
import { notes } from "../../redux/NoteSlice";
import { useSelector } from "react-redux";


export default function Index(props) {
    const { navigation } = props
    const notesState = useSelector(notes)

    const onAddNewNotePress = () => {
        navigation.navigate('AddNote')
    }

    const onItemPress = item => {
        navigation.navigate('AddNote', { note: item })
    }

    return (
        <Notes {...props}
            onAddNewNotePress={onAddNewNotePress}
            onItemPress={onItemPress}
            DATA={notesState.notes}

        />
    )
}