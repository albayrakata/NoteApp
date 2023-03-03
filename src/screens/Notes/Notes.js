import React from "react";
import { StyleSheet, View, Text, FlatList, TouchableOpacity, Image } from "react-native";
import Lottie from 'lottie-react-native';


export default function Notes(props) {
    const { DATA, onAddNewNotePress, onItemPress } = props
    const renderNoteList = () => {
        return (
            <FlatList
                data={DATA}
                renderItem={renderNotesItem}
                keyExtractor={item => item.id}
            />
        )
    }

    const renderNotesItem = ({ item }) => {
        return (
            <TouchableOpacity onPress={() => {
                onItemPress(item)
            }}>
                <View style={styles.itemContainer}>
                    <View>
                        <Text numberOfLines={1} style={styles.titleStyle}>{item?.title}</Text>
                        <Text numberOfLines={2} style={styles.descriptionStyle}>{item?.description}</Text>
                    </View>
                  <View>
                    <Image 
                    style={styles.icon}
                   source={require('../../asset/forward.png')}
                    />
                  </View>

                </View>
              
                   
          
            </TouchableOpacity>
        )
    };


    const renderAddNoteButton = () => {
        return (
            <TouchableOpacity
                style={styles.buttonContainer}
                onPress={onAddNewNotePress}>
                <View style={styles.buttonStyle}>
                    <Text style={styles.buttonTitleStyle}>Add New Note</Text>
                </View>
            </TouchableOpacity>
        )
    }
    return (
        <View style={styles.containerStyle}>
            {renderNoteList()}
            {renderAddNoteButton()}
        </View>
    )
}

const styles = StyleSheet.create({

    containerStyle: {
        flex: 1
    },
    itemContainer: {
        width: '100%',
        marginBottom: '1%',
        backgroundColor: 'white',
        paddingHorizontal: '5%',
        paddingVertical: '5%',
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    titleStyle: {
        color: '#737373',
        fontSize: 16,
        fontWeight: 'bold'
    },
    descriptionStyle: {
        color: '#828282',
        fontSize: 14
    },
    buttonContainer: {
        position: 'absolute',
        bottom: 0,
        width: '100%'
    },
    buttonStyle: {
        backgroundColor: '#6503a9'
      
    },
    buttonTitleStyle: {
        paddingVertical: '5%',
        color: 'white',
        textAlign: 'center',
        fontSize: 16
        
    },
    icon:{
        height:30,
        width:16
    }
})
