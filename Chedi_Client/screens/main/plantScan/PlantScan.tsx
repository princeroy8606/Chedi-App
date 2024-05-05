import { View, Text, TouchableOpacity, Image, ScrollView } from 'react-native'
import React from 'react'
import styles from '../../../styles/mainStyles'
import theme from '../../../assets/theme'
import DectectPlant from './DectectPlant'
import { useNavigation } from '@react-navigation/native'
import { useDispatch } from 'react-redux'
import { clearCache } from '../../../redux/features/actions/plantActions'

const PlantScan = () => {
  const dispatch = useDispatch()

  const navigation = useNavigation()
  return (
    <View style={styles.communityPage}>
      <View style={styles.homeTop_Cnt}>
        <TouchableOpacity style={styles.topIcon}>
          <Image source={theme.images.menuIcon} style={{ width: "100%", height: "20%" }} resizeMode='contain' />
        </TouchableOpacity>
        <TouchableOpacity style={styles.topIcon}>
          <Image source={theme.images.profileIcon} style={{ width: "100%", height: "80%" }} resizeMode="contain" />
        </TouchableOpacity>
      </View>
      <Text style={[styles.meduimText, { width: "auto" }]}>Scan Options</Text>
      <ScrollView style={{ width: "90%", height: "50%", marginTop: 15 }} contentContainerStyle={[styles.communityScroll, { alignItems: "center" }]}>
        <TouchableOpacity style={styles.bookMarkBtn} onPress={() => { navigation.navigate('plantCam',{type:"identification"}), dispatch(clearCache()) }}>
          <Text style={[styles.meduimText, { width: "50%", color: "white" }]}>
            Plant identification
          </Text>
          <Image source={theme.images.chedi_1} style={{ width: "30%", height: "100%" }} resizeMode='contain' />
        </TouchableOpacity>
        <TouchableOpacity style={styles.bookMarkBtn} onPress={() => navigation.navigate('plantCam',{type:"disease"})}>
          <Text style={[styles.meduimText, { width: "50%", color: "white" }]}>
            Disease Identification
          </Text>
          <Image source={theme.images.chedi_1} style={{ width: "30%", height: "100%" }} resizeMode='contain' />
        </TouchableOpacity>
        {/* <TouchableOpacity style={styles.bookMarkBtn} onPress={() => navigation.navigate('plantCam')}>
          <Text style={[styles.meduimText, { width: "50%", color: "white" }]}>
            Crop Detection
          </Text>
          <Image source={theme.images.chedi_1} style={{ width: "30%", height: "100%" }} resizeMode='contain' />
        </TouchableOpacity> */}
      </ScrollView>
    </View>
  )
}

export default PlantScan