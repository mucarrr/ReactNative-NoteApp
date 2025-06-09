import { Dimensions, FlatList, SafeAreaView, View } from 'react-native'
import React, { useState } from 'react'
import Header from '../components/Header'
import screenStyle from '../styles/screenStyle'
import NoteCard from '../components/NoteCard'
import FloatActionButton from '../components/FloatActionButton'
import { AddNote, MyNotes } from '../navigators/utils/screens'

const MyNotees = ({ navigation }) => {



  const [notes, setNotes] = useState([
    {
      id: 1,
      title: 'Note 1',
      description: 'This is the first note',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      id: 2,
      title: 'Note 2',
      description: 'This is the second note',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      id: 3,
      title: 'Note 3',
      description: 'This is the third note',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
  ])

  const addNote = (note) => {
    const newNotes = [...notes, note]
    setNotes(newNotes)
  }
const removeNote = (id) => {
  const newNotes = notes.filter(note => note.id !== id)
  setNotes(newNotes)
}
  return (
    <SafeAreaView style={screenStyle.container}>
      <View style={{ flex: 4 }}>
        <Header />
        <View style={{ flex: 3 }}>
          <FlatList
            data={notes}
            scrollEnabled={true}
            style={{height: Dimensions.get('window').height/5, marginBottom:120} }
            renderItem={({ item }) => <NoteCard item={item} removeNote={removeNote}/>}
            keyExtractor={(item) => item.id.toString()}
          />
          <FloatActionButton onPress={() => navigation.navigate(AddNote, {addNote})} />
        </View>
      </View>
    </SafeAreaView>
  )
}

export default MyNotees