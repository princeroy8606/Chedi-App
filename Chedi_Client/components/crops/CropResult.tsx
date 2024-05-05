import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import styles from '../../styles/mainStyles'
import theme from '../../assets/theme'
import { useNavigation } from '@react-navigation/native'

const CropResult = () => {
    const Navigation = useNavigation()
    return (
        <TouchableOpacity style={styles.cropResult_cnt} onPress={() => Navigation.navigate('bookMarkedDetails')}>
            <View style={{ width: "60%", height: "100%", paddingLeft: 10 }}>
                <Text style={styles.bigMediumText}>Corn</Text>
                <Text style={[styles.smallText, { textAlign: "justify" }]}>Maize, also known as corn in North American and Australian English, is a cereal grain first domesticated by indigenous peoples in southern Mexico about 10,000 years ago.</Text>
            </View>
            <Image source={theme.images.cropTest_1} style={{ height: "100%", width: "35%", borderTopRightRadius: 10, borderBottomRightRadius: 10 }} resizeMode='cover' />
        </TouchableOpacity>
    )
}

export default CropResult