import { Alert, TouchableOpacity, Text, SafeAreaView, View, TextInput, Dimensions } from 'react-native'
import React from 'react'
import screenStyle from '../styles/screenStyle'
import { AppsColors } from '../navigators/utils/colors'
import { useState } from 'react'


const AddNotes = ({route, navigation}) => {

  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')

  console.log(route.params);
  const {addNote} = route.params

  const saveNote = () => {
    if(!title.length>0 || !description.length>0){
      Alert.alert('Please fill all the fields')
    }else{
      const form ={
        id: Date.now(),
        title: title,
        description: description,
        createdAt: new Date(),
        updatedAt: new Date()
      }
      addNote(form)
      Alert.alert('Note added successfully')
      navigation.goBack()
    }
  }
  return (
    <SafeAreaView style={screenStyle.container}>
      <View style={screenStyle.container}>
        <View style={{flex:1, padding:10}}>
          <Text style={{fontSize:20, fontWeight:'bold'}}>Heading</Text>
          <TextInput 
          placeholder='Write your heading here...'
          value={title}
          onChangeText={setTitle}
          style={{borderWidth:1, borderColor:AppsColors.gray, backgroundColor:"white", margin:10, padding:10, borderRadius:10, height:45, marginVertical:10}}/>
          <Text style={{fontSize:20, fontWeight:'bold'}}>Description</Text>
          <TextInput 
          placeholder='Write your description here...'
          value={description}
          onChangeText={setDescription}
          style={{borderWidth:1, borderColor:AppsColors.gray, backgroundColor:"white", margin:10, padding:10, borderRadius:10, height:300, marginVertical:10}} multiline={true}/>
        </View>

<View style={{flex:1, justifyContent:'center', alignItems:'center'}}>
  <TouchableOpacity style={{padding:15, backgroundColor:AppsColors.primary, borderRadius:10, width:Dimensions.get('window').width/2}}>
    <Text 
    style={{fontSize:20, alignSelf:'center', fontWeight:'bold', color:'white'}}
    onPress={saveNote}
    >Add Note</Text>
  </TouchableOpacity>
</View>
      </View>
    </SafeAreaView>
  )
}

export default AddNotes