import { View, Text, Image, TouchableOpacity, ScrollView, TextInput } from 'react-native'
import React, { useEffect, useState } from 'react'
import styles from '../../../styles/mainStyles'
import theme from '../../../assets/theme'
import CommunityPosts from '../../../components/community/CommunityPosts'
import { useNavigation } from '@react-navigation/native'
import { useDispatch, useSelector } from 'react-redux'
import { getPosts } from '../../../redux/features/actions/plantActions'

const Community = () => {
  const navigation = useNavigation()
  const dispatch = useDispatch()

  const { allPosts } = useSelector((state) => state.plantReducer)
  const [isCommentOpen, setIsCommentOpen] = useState(false)

  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      dispatch(getPosts())
  });
  return unsubscribe
  }, [navigation])

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
      <View style={{ width: "80%", flexDirection: "row", justifyContent: "space-between" }}>
        <Text style={[styles.meduimText, { width: "auto" }]}>Community Page</Text>
        <TouchableOpacity style={styles.newpost_btn} onPress={() => navigation.navigate('personalCam', { data: { for: "post" } })}>
          <Text style={[styles.smallMedium_Text, { width: "auto" }]}>New Post</Text>
        </TouchableOpacity>
      </View>

      <ScrollView style={{ width: "90%", height: "50%", marginTop: 15 }} contentContainerStyle={styles.communityScroll}>
        {
          allPosts && allPosts.map((post: Object) => (
            <CommunityPosts openComments={() => setIsCommentOpen(!isCommentOpen)} key={post._id} data={post} />
          ))
        }
      </ScrollView>
      {
        isCommentOpen && <ScrollView style={styles.comments_cnt}>
          <View style={styles.comment_cnt}>
            <View style={styles.comment_top}>
              <Text style={styles.smallMedium_Text}>Name</Text>
              <Text style={styles.smallMedium_Text}>12/02/2024</Text>
            </View>
            <Text style={styles.smallText}>hhdkhadkhkjhdakhkajhkjahkdkjhkdshkahakshdkdkjakdaskhakjdhkjahdk</Text>
          </View>
          <View style={styles.comment_cnt}>
            <View style={styles.comment_top}>
              <Text style={styles.smallMedium_Text}>Name</Text>
              <Text style={styles.smallMedium_Text}>12/02/2024</Text>
            </View>
            <Text style={styles.smallText}>hhdkhadkhkjhdakhkajhkjahkdkjhkdshkahakshdkdkjakdaskhakjdhkjahdk</Text>
          </View>
          <View style={styles.comment_cnt}>
            <View style={styles.comment_top}>
              <Text style={styles.smallMedium_Text}>Name</Text>
              <Text style={styles.smallMedium_Text}>12/02/2024</Text>
            </View>
            <Text style={styles.smallText}>hhdkhadkhkjhdakhkajhkjahkdkjhkdshkahakshdkdkjakdaskhakjdhkjahdk</Text>
          </View>

        </ScrollView>
      }
      {
        isCommentOpen && <View style={styles.comment_input_cnt}>
          <TextInput style={styles.comment_input} autoFocus />
          <TouchableOpacity onPress={() => setIsCommentOpen(false)}>
            <Text style={styles.linkText}>Sent</Text>
          </TouchableOpacity>
        </View>
      }
    </View>
  )
}

export default Community