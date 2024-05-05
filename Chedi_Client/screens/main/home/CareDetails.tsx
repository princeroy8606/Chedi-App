import { View, Text, Image, ScrollView, TouchableOpacity } from 'react-native'
import React from 'react'
import styles from '../../../styles/mainStyles'
import theme from '../../../assets/theme'
import { useNavigation } from '@react-navigation/native'

const CareDetails = ({ route }) => {
    const { data } = route.params
    const navigation = useNavigation()

    console.log(data)
    return (
        <View style={styles.homeCnt}>
            <View style={styles.careDetails_Top}>
                <Image source={theme.images.cloudImg} style={{ width: "40%", height: "60%", borderRadius: 10 }} />
                <Text style={[styles.meduimText, { width: "auto" }]}>Care Guidelines</Text>
            </View>
            <View style={styles.careDetails}>
                <ScrollView>
                    <Text style={styles.bigMediumText}>{data.data[0]?.common_name}</Text>
                    <Text style={{ width: "100%", textAlign: "justify", height: "auto", color: "black", lineHeight: 25 }}>{data?.description}</Text>
                    <Text style={[styles.linkText, { fontSize: 24 }]}>Requirements</Text>
                    <View style={styles.requiremnts_cnt}>
                        <Text style={[styles.meduimText, { textDecorationLine: "underline" }]}>Watering-details</Text>
                        <Text style={styles.smallMedium_Text}>Watering-Type : </Text>
                        <Text style={styles.smallMedium_Text}>Watering : </Text>
                        <Text style={{ width: "100%", textAlign: "justify", height: "auto", color: "black", lineHeight: 25, fontStyle: 'italic' }}>{data.data[0]?.section[0]?.description}</Text>
                    </View>
                    <View style={[styles.requiremnts_cnt, { backgroundColor: "#EEF7E8" }]}>
                        <Text style={[styles.meduimText, { textDecorationLine: "underline" }]}>Pruning-details</Text>
                        <Text style={styles.smallMedium_Text}>Interval : </Text>
                        <Text style={styles.smallMedium_Text}>Amount : </Text>
                        <Text style={{ width: "100%", textAlign: "justify", height: "auto", color: "black", lineHeight: 25, fontStyle: 'italic' }}>{data.data[0]?.section[2]?.description}</Text>
                    </View>
                    <View style={[styles.requiremnts_cnt, { backgroundColor: "#FCF1E3" }]}>
                        <Text style={[styles.meduimText, { textDecorationLine: "underline" }]}>Sunlight-details</Text>
                        <Text style={styles.smallMedium_Text}>Interval : </Text>
                        <Text style={styles.smallMedium_Text}>Amount : </Text>
                        <Text style={{ width: "100%", textAlign: "justify", height: "auto", color: "black", lineHeight: 25, fontStyle: 'italic' }}>{data.data[0]?.section[1]?.description}</Text>
                    </View>
                    <TouchableOpacity style={[styles.bottomBtn_Cnt, { position: "relative", marginTop: 20, backgroundColor: "#4B8364", marginBottom: 50, width: "100%" }]} onPress={()=>navigation.navigate('personalCam',{data:data})}>
                        <View style={{ width: "60%", height: "50%", flexDirection: "row", justifyContent: "center" }}>
                            <Text style={[styles.meduimText, { color: "white", width: "auto" }]}>Scan The Plant</Text>
                        </View>
                    </TouchableOpacity>
                </ScrollView>
            </View>
        </View>
    )
}

export default CareDetails