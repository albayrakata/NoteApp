import React from "react";
import { StyleSheet, View, Text, TextInput, TouchableOpacity } from "react-native";



export default function AddNote(props) {


    const { 
        note,
        title,
        description,
        setTitle,
        setDescription,
        onAddNewNotePress,
        onDeleteNotePress,
        onUpdateNotePress 
    } = props

    const renderNoteDetailView = () => {
        return (
            <View style={styles.notesDetailContainerView} >
                <TextInput
                    style={styles.titleInput}
                    onChangeText={setTitle}
                    placeholder={"Title"}
                    value={title}
                />
                <TextInput
                    style={styles.descriptionInput}
                    onChangeText={setDescription}
                    placeholder={"Add Note..."}
                    value={description}
                    multiline
                />
            </View>
        )
    }

    const renderUpdatedNoteButton = () => {
        return (
            <TouchableOpacity onPress={onUpdateNotePress}>
                <View style={styles.updateButtonStyle}>
                    <Text style={styles.buttonTitleText}> Save  </Text>
                </View>
            </TouchableOpacity>
        )

    }


    const renderDeleteNoteButton = () => {
        return (
            <TouchableOpacity onPress={onDeleteNotePress}>
                <View style={styles.deleteButtonStyle}>
                    <Text style={styles.deleteButtonTitleText}> Delete  </Text>
                </View>
            </TouchableOpacity>
        )

    }
    const renderAddNewNote = () => {
        return (
            <TouchableOpacity onPress={onAddNewNotePress}>
                <View style={styles.deleteButtonStyle}>
                    <Text style={styles.deleteButtonTitleText}> Add a New Note  </Text>
                </View>
            </TouchableOpacity>
        )
    }
    const renderUpdateNoteView = () => {
        return (
            <View style={styles.updateViewContainer}>
                {renderUpdatedNoteButton()}
                {renderDeleteNoteButton()}
            </View>
        )
    }
    return (
        <View style={styles.containerStyle}>
            {renderNoteDetailView()}
           {note != null && note != undefined
           ? renderUpdateNoteView()
           : renderAddNewNote()
           }
        </View>
    )
}

const styles = StyleSheet.create({
    updateViewContainer: {
        position: 'absolute',
        width: '100%',
        height: '16%',
        bottom: 0
    },
    containerStyle: {
        flex: 1,
        backgroundColor: 'white'
    },
    notesDetailContainerView: {
        height: '90%'
    },
    titleInput: {
        height: '7%',
        margin: 12,
        padding: 10,
        backgroundColor: '#eeeeee',
        borderRadius: 5
    },
    descriptionInput: {
        height: '75%',
        margin: 12,
        padding: 10,
        backgroundColor: '#eeeeee',
        borderRadius: 5

    },
    updateButtonStyle: {
        backgroundColor: '#358856'

    },
    buttonTitleText: {
        paddingVertical: '5%',
        color: 'white',
        fontSize: 18,
        textAlign: 'center'
    },
    deleteButtonStyle: {
        backgroundColor: '#A72F2F'

    },
    deleteButtonTitleText: {
        paddingVertical: '5%',
        color: 'white',
        fontSize: 18,
        textAlign: 'center'

    }


})

