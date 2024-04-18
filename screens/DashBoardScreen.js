import { View, Text , Button} from 'react-native'
import React from 'react'

const DashBoardScreen = ({navigation}) => {
  return (
    <View>
      <Text>DashBoardScreen</Text>
      <Button title="Toggle Drawer" onPress={() => navigation.toggleDrawer()}/>
      <Button title="Settings" onPress={() => navigation.jumpTo("Settings")}/>
    </View>
  )
}

export default DashBoardScreen