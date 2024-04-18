import { View, Text } from 'react-native'
import React from 'react'
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import DashBoardScreen from './screens/DashBoardScreen';
import SettingsScreen from './screens/SettingsScreen';
const Drawer = createDrawerNavigator();


const App = () => {
  return (
   <NavigationContainer>
    <Drawer.Navigator>
      <Drawer.Screen name="Dashboard" component={DashBoardScreen} options={{
        title:"My dashboard",drawerLabel:"Dashboard label", drawerActiveTintColor:"#333", drawerActiveBackgroundColor:"lightblue",
        drawerContentStyle: {
          backgroundColor: '#c6cbef',
        },
      }}/>
      <Drawer.Screen name="Settings" component={SettingsScreen} />
    </Drawer.Navigator>
   </NavigationContainer>
  )
}

export default App