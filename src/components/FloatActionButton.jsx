import { StyleSheet, Text, TouchableOpacity} from 'react-native'
import React from 'react'
import { AppsColors } from '../navigators/utils/colors'
import { Add } from 'iconsax-react-nativejs'

const FloatActionButton = (props) => {
  return (
    <TouchableOpacity {...props} style={styles.container}>
        <Add size="50" color={AppsColors.white} />
    </TouchableOpacity>
  )
}

export default FloatActionButton

const styles = StyleSheet.create({
    container: {
        position: 'absolute',
        bottom: 10,
        right: 10,
        backgroundColor: AppsColors.primary,
        padding: 10,
        borderRadius: 50,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 10,
    },

})