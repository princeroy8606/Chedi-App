import { View, Text, Image, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'
import { RouteProp, useNavigation } from '@react-navigation/native';
import RNFetchBlob from 'rn-fetch-blob';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import styles from '../../../styles/mainStyles';
import { useDispatch, useSelector } from 'react-redux';
import { assesHealth, identifyPlant, searchQuery } from '../../../redux/features/actions/plantActions';
import { searchPlant } from '../../../api/plantId-api';

interface RootState {
    plantReducer: {
        searchResult: Object | null;
    };
}


type RootStackParamList = {
    ImagePreview: { path: string };

};
type ImagePreviewScreenRouteProp = RouteProp<RootStackParamList, 'ImagePreview'>;

type ImagePreviewScreenNavigationProp = NativeStackNavigationProp<RootStackParamList, 'ImagePreview'>;

type Props = {
    route: ImagePreviewScreenRouteProp;
    navigation: ImagePreviewScreenNavigationProp;
};

const ImagePreview: React.FC<Props> = ({ route }) => {
    const { data } = route?.params
    const dispatch = useDispatch()
    const navigation = useNavigation()
    const [base64Image, setBase64Image] = useState(null)
    const [status, setStatus] = useState("Send Image")
    const [popUp, setPopUp] = useState({ open: false, message: null })

    const { plantIdentifiactionResult } = useSelector((state: Object) => state.plantReducer)
    const { plantHealthReslut } = useSelector((state: Object) => state.plantReducer)
    const plantDetails: Object | null = useSelector((state: RootState) => state.plantReducer.searchResult);

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
        if (data?.type === 'identification') {
            dispatch(identifyPlant({ images: [base64Image], similar_images: true, }))
        } else if (data?.type === 'disease') {
            dispatch(assesHealth({ images: [base64Image], similar_images: true, }))
        }
    }

    const findBestMatch = (plantsArray, type) => {
        let maxMatch = 0;
        console.log(plantsArray)
        plantsArray.forEach((plants: Object) => {
            if (plants?.probability > maxMatch) maxMatch = plants?.probability
        })
        console.log(maxMatch)
        if (maxMatch > 0.2) {
            const bestmatchPlant = plantsArray.filter((plant: Object) => plant?.probability === maxMatch)
            if (bestmatchPlant[0] && type === 'identification') { dispatch(searchQuery(bestmatchPlant[0].name)) } else {
                return bestmatchPlant[0]
            }
            setStatus("Found The Plant gathering More info...")
        } else {
            if (type === 'identification') setPopUp({ open: true, message: "The Image is not clear or Its not a Plant" })
            if (type === 'disease') setPopUp({ open: true, message: "The Plant Looks Healthy" })
        }
    }

    useEffect(() => {
        if (plantIdentifiactionResult) {
            findBestMatch(plantIdentifiactionResult.result.classification.suggestions, data?.type)
            setStatus('Found Similarities')
        } else if (plantHealthReslut) {
            const result = findBestMatch(plantHealthReslut?.result?.disease?.suggestions, data?.type)
            setStatus('Found Similarities')
            if (result) navigation.navigate('healthResult', { result: result,type:"detect" })
        }
    }, [plantIdentifiactionResult, plantHealthReslut])

    useEffect(() => {
        if (plantDetails) navigation.navigate('bookMarkedDetails', { data: plantDetails, bookmark: false })
    }, [plantDetails, plantHealthReslut])

    const closePopup = () => {
        if (data?.type === 'disease' && data?.plantData) {

        } else {
            navigation.navigate('scanTab')
        }
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
                    <Text style={[styles.bigMediumText, { color: "green", textAlign: "justify" }]}>{popUp.message}</Text>
                    <TouchableOpacity style={[styles.bottomBtn_Cnt, { position: "relative", marginTop: 20, backgroundColor: "#4B8364" }]} onPress={() => closePopup()} >
                        <View style={{ width: "60%", height: "50%", flexDirection: "row", justifyContent: "center" }}>
                            <Text style={[styles.meduimText, { color: "white", width: "auto" }]}>Back</Text>
                        </View>
                    </TouchableOpacity>
                </View>)
            }
        </View>
    )
}

export default ImagePreview