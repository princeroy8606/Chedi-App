import { View, Text, Image } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Home from '../../screens/main/home/Home'
import Community from '../../screens/main/community/Community'
import theme from '../../assets/theme'
import PlantScan from '../../screens/main/plantScan/PlantScan'
import BookMarks from '../../screens/main/bookmarks/BookMarks'
import CropPrediction from '../../screens/main/crop/CropPrediction'
import styles from '../../styles/mainStyles'

const TabBar = () => {
    const TabBar = createBottomTabNavigator()
    return (
        <TabBar.Navigator
            initialRouteName='homeTab'
            screenOptions={{
                headerShown: false,
                tabBarHideOnKeyboard:true,
                tabBarStyle: {
                    backgroundColor: theme.colors.primaryBlue, height: 75, borderRadius: 40, width: "85%", position: "absolute", left: 35,
                    bottom: 20
                },
            }}
        >
            <TabBar.Screen name='homeTab' component={Home} options={{ tabBarLabel: '', tabBarIcon: ({ focused }) => (<Image resizeMode='contain' source={focused ? theme.images.homeFocused : theme.images.home} style={{ height: "50%", width: 50 }} />) }} />
            <TabBar.Screen name='communityTab' component={Community} options={{ tabBarLabel: '', tabBarIcon: ({ focused }) => (<Image resizeMode='contain' source={focused ? theme.images.communityFocused : theme.images.community} style={{ height: "50%", width: 50 }} />) }} />
            <TabBar.Screen name='scanTab' component={PlantScan} options={{ tabBarLabel: '', 
            tabBarIcon: () => (
            <View style={styles.tabBarButton}>
                <Image resizeMode='contain' source={theme.images.scanIcon} 
                style={{ height: "70%", width: "70%" }}  />
            </View>
            ) }} />
            <TabBar.Screen name='bookMarkTab' component={BookMarks} options={{ tabBarLabel: '', tabBarIcon: ({ focused }) => (<Image resizeMode='contain' source={focused ? theme.images.bookMarkFocused : theme.images.bookMark} style={{ height: "50%", width: 50 }} />) }} />
            <TabBar.Screen name='cropTab' component={CropPrediction} options={{ tabBarLabel: '', tabBarIcon: ({ focused }) => (<Image resizeMode='contain' source={focused ? theme.images.cropFocused : theme.images.crop} style={{ height: "50%", width: 50 }} />) }} />
        </TabBar.Navigator>
    )
}

export default TabBar