import { View, Text, ImageBackground, TouchableOpacity } from 'react-native'
import React from 'react'
import theme from '../../assets/theme'
import styles from '../../styles/authStyles'
import { useNavigation } from '@react-navigation/native'

const Landing = () => {
    const navigation = useNavigation()
    return (
        <ImageBackground source={theme.images.landingImg} style={styles.landingCnt} resizeMode='cover'>
            <View style={styles.landingText_Cnt}>
                <Text style={styles.landingText}>
                    {" "}Go green,<View><Text style={styles.landingText}>Breath clean.</Text></View>
                </Text>
                <TouchableOpacity onPress={() => navigation.navigate('login')}>
                    <Text style={styles.landingBtn_Text}>Get Started </Text>
                </TouchableOpacity>
            </View>
        </ImageBackground>
    )
}

export default Landing