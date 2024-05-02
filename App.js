import React from "react";
import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import Home from "./src/screens/Home";
import Settings from "./src/screens/Settings";
import { Provider } from "react-redux";
import store from "./src/store/store";
import Round from "./src/screens/Round";

const Stack = createStackNavigator();
export default function App() {

  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen name="Home" component={Home}/>
          <Stack.Screen name="Settings" component={Settings}/>
          <Stack.Screen name="Round" component={Round}/>
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}

