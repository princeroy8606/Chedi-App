import { View, Text, StatusBar, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import styles from '../../../styles/mainStyles'
import theme from '../../../assets/theme'
import { useNavigation } from '@react-navigation/native'

const PlantDetails = ({ route }) => {
    const { data } = route.params

    const navigation = useNavigation()

    console.log(data)
    const plantedDate = () => {
        const plantedDate = new Date(data?.plantedDate)
        const currentDate = new Date()
        const TimeDifference = currentDate.getTime() - plantedDate.getTime();
        const noOfDays = Math.floor(TimeDifference / (1000 * 60 * 60 * 24))
        return noOfDays
    }
    return (
        <View style={[styles.communityPage, { backgroundColor: "#209283" }]}>
            <StatusBar backgroundColor={'transparent'} translucent />
            <Image source={theme.images.chedi_1} style={{ width: "70%", height: "50%", position: "absolute", bottom: 10, left: 10 }} />
            <View style={styles.plantName_Cnt}>
                <Text style={styles.weatherText}>{data?.name}</Text>
                <Text style={[styles.smallMedium_Text, { color: "#FFFFFF" }]}>Planted on 14/11/2023</Text>
            </View>
            <View style={styles.steaksCnt}>
                <Text style={[styles.smallMedium_Text, { color: "white", width: "50%", textAlign: "center" }]}>Your dedication to plant care is truly blossoming!</Text>
                <Text style={[styles.bigMediumText, { fontSize: 54, color: "white" }]}><Text style={{ fontSize: 30 }}>🔥</Text> {plantedDate()}<Text style={[styles.smallMedium_Text, { color: "white" }]}>days</Text></Text>
            </View>
            <View style={[styles.steaksCnt, { flexDirection: "column", paddingLeft: 20, backgroundColor: "#09b2b5", }]}>
                <View style={styles.wateringCnt}>
                    <Text style={[styles.linkText, { color: "white", textAlign: "center" }]}>Weakly Watering</Text>
                    <Text>1/2</Text>
                </View>
                <View style={{ width: "50%", height: 5, backgroundColor: "white", borderRadius: 50, alignSelf: "flex-start" }}></View>
                <Text style={[styles.linkText, { color: "white", width: "60%", textAlign: "center" }]}>Weakly Watering</Text>
            </View>
            <TouchableOpacity style={[styles.steaksCnt, { flexDirection: "column", backgroundColor: '#0c9435' }]} disabled={data?.health ? false : true} onPress={() => navigation.navigate('healthResult', { data: { result: data?.health } })} >
                <View style={[styles.wateringCnt, { height: "auto" }]}>
                    <Text style={[styles.linkText, { color: "white", textAlign: "center" }]}>Health Data</Text>
                </View>
                <Text>Recent Scan Resluts</Text>
                {
                    data?.health ? <Text style={[styles.bigMediumText, { width: "auto", color: "#FFAA33" }]}>{data?.health.local_name}</Text> : <Text style={[styles.meduimText, { width: "auto", color: "#aaf2bd" }]}>The Plant Looks Healthy</Text>
                }
            </TouchableOpacity>
            <TouchableOpacity style={styles.bottomBtn}>
                <Image source={theme.images.scanIcon} style={{ width: "70%", height: "60%" }} resizeMode='contain' />
            </TouchableOpacity>
        </View>
    )
}

export default PlantDetails