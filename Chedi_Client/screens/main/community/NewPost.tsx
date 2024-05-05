import { View, Text, TextInput, Image, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'
import styles from '../../../styles/mainStyles'
import DocumentPicker from 'react-native-document-picker'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigation } from '@react-navigation/native'
import { postNew } from '../../../redux/features/actions/plantActions'

const NewPost = ({ route }) => {
    const { data } = route.params
    const [caption, setCaption] = useState(null)
    const { userData } = useSelector((state) => state.authReducer)
    const { newPostResponse } = useSelector((state) => state.plantReducer)

    const dispatch = useDispatch()
    const navigation = useNavigation()

    const handlePost = () => {
        const postData = new FormData()
        if (data?.path) { // Make sure data?.path is not undefined or null
            postData.append("image", {
                uri: data.path,
                type: "image/jpeg",
                name: data.path
            });
        }
        postData.append('caption', JSON.stringify(caption))
        postData.append('userId', JSON.stringify(userData?._id))
        if (postData) dispatch(postNew(postData))
    }

   useEffect(()=>{
    if(newPostResponse) navigation.navigate('communityTab')
   },[newPostResponse])

    return (
        <View style={styles.newPost_Page}>
            <Text style={[styles.meduimText, { width: "auto", margin: 40 }]}>NewPost</Text>
            <View style={{ width: "90%", height: "80%", }}>
                <TextInput style={[styles.smallMedium_Text, { width: "100%", minHeight: "10%", padding: 15, backgroundColor: "#c7c3c3", marginBottom: 20, borderRadius: 10 }]} multiline autoFocus textAlign="left" textAlignVertical='top' value={caption} onChangeText={(e) => setCaption(e)} />
                <Image style={{ width: "100%", height: "50%", borderRadius: 20, }} source={{ uri: data?.path }} />
            </View>
            <TouchableOpacity style={[styles.bottomBtn_Cnt, { position: "relative", marginTop: 20, backgroundColor: "#4B8364" }]} onPress={() => handlePost()}  >
                <View style={{ width: "60%", height: "50%", flexDirection: "row", justifyContent: "center" }}>
                    <Text style={[styles.meduimText, { color: "white", width: "auto" }]}>Post</Text>
                </View>
            </TouchableOpacity>
        </View>
    )
}

export default NewPost