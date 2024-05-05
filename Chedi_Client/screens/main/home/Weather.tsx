import { View, Text, ImageBackground, StatusBar, Image } from 'react-native'
import React from 'react'
import theme from '../../../assets/theme'
import styles from '../../../styles/mainStyles'

const Weather = () => {
    return (
        <ImageBackground source={theme.images.weatherPageBg} style={styles.homeCnt} >
            <StatusBar backgroundColor={'transparent'} translucent />
            <View style={styles.weatherLoc_Cnt}>
                <Image source={theme.images.locationWhite} style={{ width: "10%", height: "100%" }} resizeMode='contain' />
                <Text style={[styles.bigMediumText, { color: "white" }]}>Erode,komarapalayam</Text>
            </View>
            <View style={styles.weatherImg_Cnt}>
                <Image source={theme.images.cloudImg} style={{ width: "40%", height: "100%" }} resizeMode='contain' />
                <View style={styles.weatherInfo}>
                    <Text>Today,14 November</Text>
                    <Text style={styles.weatherText}>29°</Text>
                </View>
            </View>
            <View style={{ width: "80%", height: "20%", borderBottomWidth: 1, borderBottomColor: "white", }}>
                <Text style={{ textAlign: "justify", color: "white", fontSize: 18 }}>"Today's temperature is a comfortable 29 degrees Celsius, providing an ideal environment for your plants. Ensure they stay adequately hydrated, and consider offering some shade during the peak heat to keep them thriving in these warm conditions."</Text>
            </View>
            <View style={{ width: "80%", height: "10%", borderBottomWidth: 1, borderBottomColor: "white", }}>
                <Text style={{ textAlign: "justify", color: "white", fontSize: 18 }}>As the day cools down from a high of 29 degrees, consider watering your plants in the evening to help them absorb moisture more effectively and prepare for the night ahead.</Text>
            </View>
            <View style={{ width: "80%", height: "20%", borderBottomWidth: 1, borderBottomColor: "white", }}>
                <Text style={{ textAlign: "justify", color: "white", fontSize: 18 }}>It's a warm day at 29 degrees, so hydration is key! Check the soil moisture levels and water your plants sufficiently to help them stay resilient and vibrant in the face of the higher temperatures.</Text>
            </View>
        </ImageBackground>
    )
}

export default Weather;