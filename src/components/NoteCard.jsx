import { TouchableOpacity, View, Text } from 'react-native'
import React from 'react'
import { Edit, Trash } from 'iconsax-react-nativejs'
import { NoteCardStyles } from '../styles/NoteCardStyles'
import { useNavigation } from '@react-navigation/native'
import { EditNote } from '../navigators/utils/screens'

const NoteCard = ({item, removeNote}) => {
  const navigation = useNavigation()
  return (
    <TouchableOpacity style={NoteCardStyles.container}
    onPress={() => navigation.navigate(EditNote)}
    >
      <View style={NoteCardStyles.card}>
        <View style={{flex: 1}}>
          <Text style={NoteCardStyles.title}>{item.title}</Text>
          <Text style={NoteCardStyles.description}>{item.description}</Text>
          <Text style={NoteCardStyles.date}>{item.createdAt.toLocaleDateString()}</Text>
        </View>
        <View style={NoteCardStyles.iconContainer} >
          <TouchableOpacity onPress={() => removeNote(item.id)}>
            <Trash size="24"/>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate(EditNote, {item})}>
            <Edit size="24"/>
          </TouchableOpacity>
        </View>
      </View>
    </TouchableOpacity>
  )
}

export default NoteCard