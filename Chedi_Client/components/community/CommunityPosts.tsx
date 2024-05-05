import { View, Text, Image, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import styles from '../../styles/mainStyles'
import theme from '../../assets/theme'

const CommunityPosts = ({ openComments, data }) => {
    return (
        <View style={styles.postCnt}>
            <View style={styles.postTop_cnt}>
                <View style={styles.postTop_left}>
                    <Image source={theme.images.profileIcon} style={{ width: "50%", height: "100%" }} resizeMode='contain' />
                    <Text style={[styles.linkText, { color: "#224B7A", fontSize: 15 }]} >Elvis</Text>
                </View>
                <View style={styles.postTop_right}>
                    <Text style={[styles.linkText, { color: "gray", fontSize: 15 }]}>14/11/2023</Text>
                    <Text style={[styles.linkText, { color: "gray", fontSize: 15 }]}>Just Now</Text>
                </View>
            </View>
            <View style={styles.postDiscribtion}>
                <Text style={[styles.linkText, { color: "black", fontSize: 15 }]} >
                    {data?.description}
                </Text>
            </View>

            <Image source={{uri:`http://192.168.43.165:8000/${data?.image}`}} style={styles.postImg} resizeMode='contain' />
            <View style={styles.postTop_cnt}>
                <TouchableOpacity style={styles.postTop_right}>
                    <Text style={[styles.linkText, { color: "#224B7A", fontSize: 15 }]}>Like</Text>
                    <Text style={[styles.linkText, { color: "gray", fontSize: 15 }]}>203</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.postTop_right} onPress={openComments}>
                    <Text style={[styles.linkText, { color: "#224B7A", fontSize: 15 }]} >Comments</Text>
                    <Text style={[styles.linkText, { color: "gray", fontSize: 15 }]}>20</Text>
                </TouchableOpacity>

            </View>

        </View>
    )
}

export default CommunityPosts