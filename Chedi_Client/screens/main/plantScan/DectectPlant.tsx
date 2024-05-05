import { View, Text, PermissionsAndroid, Alert, StyleSheet, Dimensions, TouchableOpacity, StatusBar, Image } from 'react-native'
import React, { useEffect, useRef, useState } from 'react';
import { Camera, Templates, useCameraDevice, useCameraFormat, useCameraPermission } from 'react-native-vision-camera';
import theme from '../../../assets/theme';
import styles from '../../../styles/mainStyles';
import { useNavigation } from '@react-navigation/native';
import { useDispatch } from 'react-redux';
import { clearCache } from '../../../redux/features/actions/plantActions';



const DectectPlant = ({ route }) => {
    const dispatch = useDispatch()
    const { type } = route.params
    const { hasPermission, requestPermission } = useCameraPermission()
    const { width, height } = Dimensions.get("screen")
    const navigation = useNavigation()
    const [image, setImage] = useState<String | undefined>(undefined)
    const camera = useRef<Camera>(null)
    const Thisdevice = useCameraDevice('back', {
        physicalDevices: [
            'ultra-wide-angle-camera',
            'wide-angle-camera',
            'telephoto-camera'
        ]
    })
    if (Thisdevice == null) Alert.alert("Error in Camera device")

    useEffect(() => {
        dispatch(clearCache())
        if (!hasPermission) requestPermission()
    }, [])

    const format = useCameraFormat(Thisdevice, [{ photoAspectRatio: height / width }])
    const takePhoto = async () => {
        const photo = await camera?.current?.takePhoto({
            flash: 'off' 
        })
        setImage(photo?.path)

    }
    useEffect(() => {
        if (image) {
            navigation.navigate('imagePreview', { data: { path: image, type: type } })
        }
    }, [image])

    const openGalary = () => {
        const options = {
            title: 'Select Image',
            storageOptions: {
                skipBackup: true,
                path: 'images',
            },
        };

        //   ImagePicker.showImagePicker(options, response => {
        //     if (response.didCancel) {
        //       console.log('User cancelled image picker');
        //     } else if (response.error) {
        //       console.log('ImagePicker Error:', response.error);
        //     } else if (response.customButton) {
        //       console.log('User tapped custom button:', response.customButton);
        //     } else {
        //       const source = { uri: response.uri };
        //       setImageSource(source);
        //     }
        //   });
    }

    return (
        <View style={{ flex: 1 }}>
            <StatusBar backgroundColor={"transparent"} translucent />
            <Camera
                ref={camera}
                style={{ width: width, height: "80%" }}
                // style={StyleSheet.absoluteFill}
                device={Thisdevice}
                isActive={true}
                photo={true}
                enableHighQualityPhotos={true}
                resizeMode="cover"
                format={format}
                focusable
            />
            <View style={{ width: "100%", height: "20%", backgroundColor: "black", elevation: 0, flexDirection: "row", justifyContent: "space-around", alignItems: "center" }}>
                <TouchableOpacity onPress={openGalary}>
                    <Image style={{ width: 40, height: 30 }} source={theme.images.photoIcon} resizeMode='contain' />
                </TouchableOpacity>
                <TouchableOpacity onPress={takePhoto} style={[{ width: 80, height: 80, backgroundColor: "#209283", borderRadius: 50, justifyContent: "center", alignItems: "center" }]}>
                    <Image style={{ width: '70%', height: '70%' }} source={theme.images.scanIcon} resizeMode='contain' />
                </TouchableOpacity>
                <View>
                </View>
            </View>
        </View>
    )
}

export default DectectPlant