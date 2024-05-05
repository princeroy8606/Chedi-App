import { View, Text, TouchableOpacity, Image, StatusBar, ScrollView } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigation } from '@react-navigation/native'
import styles from '../../../styles/mainStyles'
import theme from '../../../assets/theme'
import { plantNewPlant } from '../../../redux/features/actions/plantActions'

const DiseaseIdentified = ({ route }) => {
    let data;
    const { result } = route.params
    if (result?.type === 'planting') { data = result?.result } else { data = result }
    const dispatch = useDispatch()
    const navigation = useNavigation()
    const { userData } = useSelector((state) => state.authReducer)
    const { plantedResponse } = useSelector((state) => state.plantReducer)


    const [isReadMore, setIsReadMore] = useState(false)
    const [popUp, setPopUp] = useState(false)


    const sendnewPlant = () => {
        const uploadData = {
            userId: userData?._id,
            Name: data?.plantDetails?.data[0].common_name,
            Description: data?.plantDetails.description,
            Age: 4,
            Image: data.plantDetails.image,
            Health: data?.result?.details
        }
        dispatch(plantNewPlant(uploadData))
    }

    const updatePlantHealth = () => {

    }

    useEffect(() => {
        console.log(plantedResponse)
        if (plantedResponse) setPopUp(true)
    }, [plantedResponse])

    console.log(data)
    return (
        <View style={styles.plantDetails_page}>
            <StatusBar backgroundColor={'transparent'} translucent />
            <Image source={{ uri: data?.similar_images[0]?.url }} style={{ width: "100%", height: "40%" }} resizeMode='cover' />
            <ScrollView style={styles.absoluteScroll}>
                <View style={styles.plantsDetails_Cnt}>
                    <View style={[styles.plantFeatures_Cnt, { justifyContent: "flex-start" }]}>
                        <Text style={[styles.smallMedium_Text, { color: "green" }]}>Hurray, we identified the disease!</Text>
                    </View>
                    <Text style={[styles.bigMediumText, { color: "red", width: "80%", marginTop: 10, fontSize: 35 }]}>{data?.details?.local_name.toUpperCase()}</Text>
                    <View style={styles.plantDiscription_Cnt}>
                        <View style={{ height: 60 }}>
                            <Text style={styles.meduimText}>Description</Text>
                            <Text style={[styles.linkText, { color: "gray" }]}>From Wikipedia, the free encyclopedia</Text>
                        </View>
                        <Text style={[styles.smallMedium_Text, { width: "100%", fontWeight: "500", lineHeight: 25, color: "#515151", textAlign: "justify", flexWrap: "wrap" }]}>{!isReadMore ? data?.details?.description?.slice(0, 500) : data?.details?.description}...</Text>
                        <TouchableOpacity onPress={() => setIsReadMore(!isReadMore)}>
                            <Text style={[styles.linkText, { color: "black" }]}>{!isReadMore ? "Read more" : "Read less"}</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.plantDiscription_Cnt}>
                        <View style={{ height: 60 }}>
                            <Text style={styles.meduimText}>Treatement</Text>
                            <Text style={[styles.linkText, { color: "green", marginTop: 10, textDecorationLine: "underline" }]}>Biological Treatement</Text>
                        </View>
                        {
                            data?.details?.treatment?.biological?.map((measure: String) =>
                                <Text style={[styles.smallMedium_Text, { width: "100%", fontWeight: "600", lineHeight: 25, color: "#2e452d", flexWrap: "wrap", marginTop: 10 }]}>🧬  {measure}</Text>
                            )
                        }
                        <Text style={[styles.linkText, { color: "red", marginTop: 10, textDecorationLine: "underline" }]}>Chemical Treatement</Text>
                        {
                            data?.details?.treatment?.chemical?.map((measure: String) =>
                                <Text style={[styles.smallMedium_Text, { width: "100%", fontWeight: "600", lineHeight: 25, color: "#5e392d", flexWrap: "wrap", marginTop: 10 }]}>🧪   {measure}</Text>
                            )
                        }
                        <Text style={[styles.linkText, { color: "blue", marginTop: 10, textDecorationLine: "underline" }]}>Prevention Measures</Text>
                        {
                            data?.details?.treatment?.prevention?.map((measure: String) =>
                                <Text style={[styles.smallMedium_Text, { width: "100%", fontWeight: "600", lineHeight: 25, color: "#515151", flexWrap: "wrap", marginTop: 10 }]}>🪴  {measure}</Text>
                            )
                        }
                    </View>
                    {
                        result?.plantDetails ? (<TouchableOpacity style={[styles.bottomBtn_Cnt, { position: "relative", marginTop: 20, backgroundColor: "#4B8364" }]} onPress={() => sendnewPlant()}>
                            <View style={{ width: "60%", height: "50%", flexDirection: "row", justifyContent: "center" }}>
                                <Text style={[styles.meduimText, { color: "white", width: "auto" }]}>Conform Planting</Text>
                            </View>
                        </TouchableOpacity>) : (<TouchableOpacity style={[styles.bottomBtn_Cnt, { position: "relative", marginTop: 20, backgroundColor: "#4B8364" }]} onPress={() => navigation.navigate('scanTab')}>
                            <View style={{ width: "60%", height: "50%", flexDirection: "row", justifyContent: "center" }}>
                                <Text style={[styles.meduimText, { color: "white", width: "auto" }]}>Close</Text>
                            </View>
                        </TouchableOpacity>)
                    }
                </View>
                {
                    popUp && (<View style={styles.popup_cnt}>
                        <Image source={theme.images.Planted_Gif} style={{ width: "50%", height: "50%" }} resizeMode='contain' />
                        <Text style={[styles.bigMediumText, { color: "white" }]}>Planted 🪴 </Text>
                        <TouchableOpacity style={[styles.bottomBtn_Cnt, { position: "relative", marginTop: 20, backgroundColor: "#4B8364" }]} onPress={() => navigation.navigate('home')}>
                            <View style={{ width: "60%", height: "50%", flexDirection: "row", justifyContent: "center" }}>
                                <Text style={[styles.meduimText, { color: "white", width: "auto" }]}>Home</Text>
                            </View>
                        </TouchableOpacity>
                    </View>)
                }
            </ScrollView>
        </View>
    )
}

export default DiseaseIdentified