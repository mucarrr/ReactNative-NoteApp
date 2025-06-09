import { StyleSheet, View } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { AddNote, EditNote, MyNotes } from './utils/screens'
import MyNotees from '../screens/MyNotees'
import AddNotes from '../screens/AddNotes'
import EditNotes from '../screens/EditNotes'
import { AttachCircle, More, Share } from 'iconsax-react-nativejs'
import { AppsColors } from './utils/colors'

const Stack = createNativeStackNavigator()

const StackNavigator = () => {
  return (
    <Stack.Navigator initialRouteName={MyNotes}>
    <Stack.Screen 
    name={MyNotes} 
    component={MyNotees}
    options={{
        headerShown: false,
    }}
    />
    <Stack.Screen 
    name={AddNote} 
    component={AddNotes} 
    options={{
      title: '',
      headerRight: ()=>(
<View style={{flexDirection:'row', gap:10}}>
<AttachCircle size={24}/>
<Share size={24}/>
<More size={24}/>
</View>
      ),
        headerShown: true,
        headerBackTitle: 'Back',
        headerBackVisible: true,
        headerBackTitleStyle: {
          fontSize: 16,
          color: '#fff',
        },
    }}
    />
    <Stack.Screen 
    name={EditNote} 
    component={EditNotes} 
    options={{
      title: '',
        headerShown: true,
        headerBackTitle: 'Back',
        headerBackVisible: true,
        headerBackTitleStyle: {
          fontSize: 16,
          color: '#fff',
        },
    }}
    />
  </Stack.Navigator>
  )
}

export default StackNavigator

const styles = StyleSheet.create({})