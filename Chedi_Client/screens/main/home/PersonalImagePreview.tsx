import { View, Text, TouchableOpacity, Image } from 'react-native'
import React, { useEffect, useState } from 'react'
import styles from '../../../styles/mainStyles'
import { assesHealth } from '../../../redux/features/actions/plantActions'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigation } from '@react-navigation/native'
import RNFetchBlob from 'rn-fetch-blob'

const PersonalImagePreview = ({ route }) => {
    const { data } = route?.params
    const dispatch = useDispatch()
    const navigation = useNavigation()
    const [base64Image, setBase64Image] = useState(null)
    const [status, setStatus] = useState("Send Image")
    const [popUp, setPopUp] = useState({ open: false, message: null })

    const { plantHealthReslut } = useSelector((state: Object) => state?.plantReducer)

    const plantDetails: Object | null = useSelector((state: Object) => state?.plantReducer?.searchResult);

    const ImageToBase64 = async (path: string) => {
        try {
            const response = await RNFetchBlob.fs.readFile(path, 'base64');
            setBase64Image(`data:image/jpeg;base64,${response}`)
        } catch (error) {
            console.error('Error converting image to base64:', error);
            return null;
        }
    }

    useEffect(() => {
        if (data?.path) ImageToBase64(`file://${data?.path}`)
    }, [])


    const handleSubmit = () => {
        setStatus("Searching ...")
        dispatch(assesHealth({ images: [base64Image], similar_images: true, }))
    }

    const findBestMatch = (plantsArray) => {
        let maxMatch = 0;
        console.log(plantsArray)
        plantsArray.forEach((plants: Object) => {
            if (plants?.probability > maxMatch) maxMatch = plants?.probability
        })
        console.log(maxMatch)
        if (maxMatch > 0.2) {
            const bestmatchPlant = plantsArray.filter((plant: Object) => plant?.probability === maxMatch)
            setStatus("Found The Plant gathering More info...")
            return bestmatchPlant[0]
        } else {
            setPopUp({ open: true, message: "The Plant Looks Healthy" })
        }
    }

    useEffect(() => {
        if (plantHealthReslut) {
            const result = findBestMatch(plantHealthReslut?.result?.disease?.suggestions, data?.type)
            setStatus('Found Similarities')
            if (result) navigation.navigate('healthResult', { result: { result: result, plantDetails: { ...data?.plantData, health: result },type:"planting"} })
        }
    }, [plantHealthReslut])

    useEffect(() => {
        if (plantDetails) navigation.navigate('bookMarkedDetails', { data: plantDetails, bookmark: false })
    }, [plantDetails, plantHealthReslut])

    const closePopup = () => {

    }
    return (
        <View style={{ flex: 1, justifyContent: "center", alignItems: "center", backgroundColor: "white" }}>
            <Image source={{ uri: `file://${data?.path}` }} style={{ width: "80%", height: "80%", borderRadius: 20 }} resizeMode='contain' />
            <TouchableOpacity style={[styles.bottomBtn_Cnt, { position: "relative", marginTop: 20, backgroundColor: "#4B8364" }]} onPress={handleSubmit} >
                <View style={{ width: "60%", height: "50%", flexDirection: "row", justifyContent: "center" }}>
                    <Text style={[styles.meduimText, { color: "white", width: "auto" }]}>{status}</Text>
                </View>
            </TouchableOpacity>
            {
                popUp.open && (<View style={styles.popup_cnt}>
                    <Text style={[styles.bigMediumText, { color: "green" }]}>{popUp.message}</Text>
                    <TouchableOpacity style={[styles.bottomBtn_Cnt, { position: "relative", marginTop: 20, backgroundColor: "#4B8364" }]} onPress={closePopup} >
                        <View style={{ width: "60%", height: "50%", flexDirection: "row", justifyContent: "center" }}>
                            <Text style={[styles.meduimText, { color: "white", width: "auto" }]}>Back</Text>
                        </View>
                    </TouchableOpacity>
                </View>)
            }
        </View>
    )
}
export default PersonalImagePreview