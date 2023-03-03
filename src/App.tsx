import React from "react";

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Notes from "./screens/Notes/";
import AddNote from "./screens/AddNotes/";
import store from "./redux/Store";
import { Provider } from "react-redux";

const Stack = createNativeStackNavigator();

function App(){
  return(
    <Provider store={store}>
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Notes" component={Notes}/>
        <Stack.Screen name="AddNote" component={AddNote}/>
      </Stack.Navigator>
    </NavigationContainer>
    </Provider>
  )
}
   
export default App
