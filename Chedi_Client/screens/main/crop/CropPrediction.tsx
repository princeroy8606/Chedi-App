import { View, Text, TouchableOpacity, Image, TextInput, ScrollView } from 'react-native'
import React from 'react'
import styles from '../../../styles/mainStyles'
import theme from '../../../assets/theme'
import CropResult from '../../../components/crops/CropResult'

const CropPrediction = () => {
  return (
    <View style={styles.homeCnt}>
      <View style={styles.homeTop_Cnt}>
        <TouchableOpacity style={styles.topIcon}>
          <Image source={theme.images.menuIcon} style={{ width: "100%", height: "20%" }} resizeMode='contain' />
        </TouchableOpacity>
        <TouchableOpacity style={styles.topIcon}>
          <Image source={theme.images.profileIcon} style={{ width: "100%", height: "80%" }} resizeMode="contain" />
        </TouchableOpacity>
      </View>
      <Text style={[styles.meduimText, { width: "auto", marginBottom: 20 }]}>Location based crops</Text>
      <View style={[styles.homeSearch_Cnt, { justifyContent: "space-around" }]}>
        <TouchableOpacity style={[styles.searchImg, { width: "15%" }]}  >
          <Image source={theme.images.location} style={{ width: "100%", height: "90%", paddingLeft: 10 }} resizeMode="contain" />
        </TouchableOpacity>
        <TextInput style={[styles.searchInput, { width: "80%", color: "black" }]} placeholder='Search here...' placeholderTextColor="black" />
        <TouchableOpacity style={styles.searchImg}  >
          <Image source={theme.images.searchIcon} style={{ width: "100%", height: "90%" }} resizeMode="contain" />
        </TouchableOpacity>
      </View>
      <ScrollView style={{ width: "90%", height: "50%", marginTop: 15 }} contentContainerStyle={styles.communityScroll}>
        <CropResult />
      </ScrollView>
    </View>
  )
}

export default CropPrediction