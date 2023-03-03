import React, { useEffect, useState } from "react";
import AddNote from "./AddNotes";
import { useDispatch } from "react-redux";
import { addNote,deleteNote,editNote, id } from "../../redux/NoteSlice";
import uuid from 'react-native-uuid'
export default function Index(props) {
    const dispatch = useDispatch();
    const note = props?.route?.params?.note;
    
   

    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')
    const navigation  = props?.navigation

    useEffect(() => {
        if (note != null && note != undefined) {
            setTitle(note?.title)
            setDescription(note?.description)
        }
    }, [])

    const onAddNewNotePress = () => { 
        let params = {id:uuid.v1(), title:title,description:description}
        dispatch(addNote(params))
        navigation.goBack();
        
    }
    const onUpdateNotePress = () => { 
        let updateParams ={ id:note.id,title:title, description:description}
        dispatch(editNote(updateParams))
        navigation.goBack();
        
    }
    const onDeleteNotePress = () => { 
        let deleteParams ={id: note.id}
        dispatch(deleteNote(deleteParams))
        navigation.goBack();
    }

    return (
        <AddNote 
        note={note}
        title={title}
        description={description}
        setTitle={setTitle}
        setDescription={setDescription}
        onAddNewNotePress={onAddNewNotePress}
        onUpdateNotePress={onUpdateNotePress}
        onDeleteNotePress={onDeleteNotePress}
        {...props} />
    )
}