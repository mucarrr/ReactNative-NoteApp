import { SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import screenStyle from '../styles/screenStyle'
import { AppsColors } from '../navigators/utils/colors'
import { HamburgerMenu, More, SearchNormal } from 'iconsax-react-nativejs'

const Header = () => {
    return (
        <SafeAreaView style={screenStyle.container}>
            <View style={styles.headerContainer}>
                <Text style={styles.headerText}>My Notes</Text>
            </View>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginTop: 40, paddingHorizontal: 25 }}>
                <View>
                    <HamburgerMenu />
                </View>
                <View style={{ flexDirection: 'row', alignItems: 'center', gap: 10 }}>
                    <SearchNormal />
                    <More />
                </View>
            </View>
        </SafeAreaView>
    )
}

export default Header

const styles = StyleSheet.create({
    headerText: {
        fontSize: 38,
        fontWeight: 'bold',
        color: AppsColors.secondary,
    },
    headerContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: 20,
    },
})