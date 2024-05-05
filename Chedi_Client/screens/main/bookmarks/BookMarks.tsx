import { View, Text, Image, TouchableOpacity, ScrollView } from 'react-native'
import React, { useEffect } from 'react'
import styles from '../../../styles/mainStyles'
import theme from '../../../assets/theme'
import { useDispatch, useSelector } from 'react-redux'
import { getAllBookmarks } from '../../../redux/features/actions/plantActions'
import { useNavigation } from '@react-navigation/native'

const BookMarks = () => {
  const dispatch = useDispatch()
  const navigation = useNavigation()


  const { userData } = useSelector((state) => state.authReducer)
  const { allBookMarks } = useSelector((state) => state.plantReducer)

  useEffect(() => {
    dispatch(getAllBookmarks(userData?._id))
  },[])

  const handleNavigation = (plantDetails: Object) => {
    navigation.navigate('bookMarkedDetails', { data: plantDetails, bookmark: true })
  }
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
      <Text style={[styles.meduimText, { width: "auto" }]}>Book Marks</Text>
      <ScrollView style={{ width: "90%", height: "50%", marginTop: 15 }} contentContainerStyle={[styles.communityScroll, { alignItems: "center" }]}>
        <TouchableOpacity style={styles.bookMarkBtn}>
          <Text style={[styles.meduimText, { width: "50%", color: "white" }]}>
            Papaver Somniferum
          </Text>
          <Image source={theme.images.chedi_1} style={{ width: "30%", height: "100%" }} resizeMode='contain' />
        </TouchableOpacity>
        {
          allBookMarks && allBookMarks.map((bookmark: Object) => (
            <TouchableOpacity style={styles.bookMarkBtn} key={bookmark._id} onPress={() => handleNavigation(bookmark)}>
              <Text style={[styles.meduimText, { width: "50%", color: "white" }]}>
                {bookmark.name}
              </Text>
              <Image source={theme.images.chedi_1} style={{ width: "30%", height: "100%" }} resizeMode='contain' />
            </TouchableOpacity>
          ))
        }
      </ScrollView>
    </View>
  )
}

export default BookMarks