import { View, Text, Image, ScrollView, StatusBar, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'
import styles from '../../../styles/mainStyles'
import theme from '../../../assets/theme'
import { RouteProp, useNavigation } from '@react-navigation/native';
import { useDispatch, useSelector } from 'react-redux';
import { plantingDetails, updateBookmark } from '../../../redux/features/actions/plantActions';

type RootStackParamList = {
  BookMarkedDetails: { data: any };
}

type BookMarkedDetailsRouteProp = RouteProp<RootStackParamList, 'BookMarkedDetails'>;

const BookMarkedDetails: React.FC<BookMarkedDetailsRouteProp> = ({ route }) => {

  const dispatch = useDispatch()
  const navigation = useNavigation()

  let { data, bookmark } = route.params

  const { userData } = useSelector((state) => state.authReducer)
  const { bookmarkUpdate } = useSelector((state) => state.plantReducer)
  const { plantingInfo } = useSelector((state) => state.plantReducer)

  const [isBookmarked, setIsBookmarked] = useState(bookmark)
  const [isReadMore, setIsReadMore] = useState(false)

  const addtoBookMark = () => {
    dispatch(updateBookmark({ userId: userData._id, bookMarkData: data }))
    setIsBookmarked(true)
  }

  const getPlantFullInfo = () => {
    dispatch(plantingDetails(data?.name))
  }

  useEffect(() => {
    const combinedData = { ...plantingInfo, description: data?.description?.value,image:data?.image?.value }
    if (plantingInfo) navigation.navigate('careDetails', { data: combinedData })
  }, [plantingInfo])

  return (
    <View style={styles.plantDetails_page}>
      <StatusBar backgroundColor={'transparent'} translucent />
      <Image source={{ uri: data?.image?.value }} style={{ width: "100%", height: "40%" }} resizeMode='cover' />
      <ScrollView style={styles.absoluteScroll}>
        <View style={styles.plantsDetails_Cnt}>
          <Text style={styles.bigMediumText}>{data?.common_names[0]}</Text>
          <View style={styles.plantFeatures_Cnt}>
            <View style={styles.plantFeature}>
              <Text style={[styles.smallMedium_Text, { color: "#696969" }]}>{data?.propagation_methods?.length >= 1 && data?.propagation_methods[0]}</Text>
            </View>
            <View style={styles.plantFeature}>
              <Text style={[styles.smallMedium_Text, { color: "#696969" }]}>{data?.propagation_methods?.length >= 2 && data?.propagation_methods[1]}</Text>
            </View>
            <View style={styles.plantFeature}>
              <Text style={[styles.smallMedium_Text, { color: "#696969" }]}>{data?.propagation_methods?.length >= 3 && data?.propagation_methods[2]}</Text>
            </View>
          </View>
          <View style={styles.plantDiscription_Cnt}>
            <View style={{ height: 60 }}>
              <Text style={styles.meduimText}>Description</Text>
              <Text style={[styles.linkText, { color: "gray" }]}>From Wikipedia, the free encyclopedia</Text>
            </View>
            <Text style={[styles.smallMedium_Text, { width: "100%", fontWeight: "500", lineHeight: 25, color: "#515151", textAlign: "justify", flexWrap: "wrap" }]}>{!isReadMore ? data?.description?.value?.slice(0, 500) : data?.description?.value}...</Text>
            <TouchableOpacity onPress={() => setIsReadMore(!isReadMore)}>
              <Text style={[styles.linkText, { color: "black" }]}>{!isReadMore ? "Read more" : "Read less"}</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.plantSpec_cnt}>
            <View style={styles.plantSpec}>
              <View style={styles.imgArea}>
                <Image source={theme.images.Ruler} style={{ width: "70%", height: "70%" }} resizeMode='contain' />
              </View>
              <View style={{ width: 'auto', justifyContent: "space-around" }}>
                <Text style={[styles.linkText, { color: "#4B8364" }]}>Height</Text>
                <Text style={[styles.meduimText, { width: "100%" }]}>Small</Text>
              </View>
            </View>
            <View style={styles.plantSpec}>
              <View style={[styles.imgArea, { backgroundColor: "#E6EAFA" }]}>
                <Image source={theme.images.Drop} style={{ width: "70%", height: "70%" }} resizeMode='contain' />
              </View>
              <View style={{ width: 'auto', justifyContent: "space-around" }}>
                <Text style={[styles.linkText, { color: "#7C95E4" }]}>Watering</Text>
                <Text style={[styles.smallMedium_Text, { width: "100%" }]}>{data?.watering?.max}-times/day</Text>
              </View>
            </View>
            <View style={styles.plantSpec}>
              <View style={[styles.imgArea, { backgroundColor: "#FCF1E3" }]}>
                <Image source={theme.images.Sun} style={{ width: "70%", height: "70%" }} resizeMode='contain' />
              </View>
              <View style={{ width: 'auto', justifyContent: "space-around" }}>
                <Text style={[styles.linkText, { color: "#EAC069" }]}>Height</Text>
                <Text style={[styles.meduimText, { width: "100%" }]}>Small</Text>
              </View>
            </View>
            <View style={styles.plantSpec}>
              <View style={[styles.imgArea, { backgroundColor: "#F8E8F8" }]}>
                <Image source={theme.images.Temprature} style={{ width: "70%", height: "70%" }} resizeMode='contain' />
              </View>
              <View style={{ width: 'auto', justifyContent: "space-around" }}>
                <Text style={[styles.linkText, { color: "#C390E6" }]}>Height</Text>
                <Text style={[styles.meduimText, { width: "100%" }]}>Small</Text>
              </View>
            </View>
          </View>
          {
            isBookmarked ? (<TouchableOpacity style={[styles.bottomBtn_Cnt, { position: "relative", marginTop: 20 }]}>
              <View style={{ width: "60%", height: "50%", flexDirection: "row", justifyContent: "space-between" }}>
                <Image style={[styles.searchImg, { height: "100%" }]} source={theme.images.bookMarkFocused} />
                <Text style={[styles.meduimText, { color: "white", width: "auto" }]}>Saved this plant</Text>
              </View>
            </TouchableOpacity>) : (<TouchableOpacity style={[styles.bottomBtn_Cnt, { position: "relative", marginTop: 20 }]} onPress={addtoBookMark}>
              <View style={{ width: "60%", height: "50%", flexDirection: "row", justifyContent: "space-between" }}>
                <Image style={[styles.searchImg, { height: "100%" }]} source={theme.images.bookMark} />
                <Text style={[styles.meduimText, { color: "white", width: "auto" }]}>Save this plant</Text>
              </View>
            </TouchableOpacity>)
          }
          <TouchableOpacity style={[styles.bottomBtn_Cnt, { position: "relative", marginTop: 20, backgroundColor: "#4B8364" }]} onPress={getPlantFullInfo}>
            <View style={{ width: "60%", height: "50%", flexDirection: "row", justifyContent: "center" }}>
              <Text style={[styles.meduimText, { color: "white", width: "auto" }]}>Plant "{data?.common_names[0]}"</Text>
            </View>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  )
}

export default BookMarkedDetails  