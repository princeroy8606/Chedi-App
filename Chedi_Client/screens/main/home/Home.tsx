import { View, Text, StatusBar, TouchableOpacity, Image, TextInput, ImageBackground, ScrollView } from 'react-native'
import React, { useEffect, useState } from 'react'
import styles from '../../../styles/mainStyles'
import theme from '../../../assets/theme'
import { Directions, Gesture, GestureDetector, GestureHandlerRootView } from 'react-native-gesture-handler'
import { useNavigation } from '@react-navigation/native'
import { useDispatch, useSelector } from 'react-redux'
import { getMyPlants, searchQuery } from '../../../redux/features/actions/plantActions'
import { userSignUp } from '../../../redux/features/actions/authentication'


interface RootState {
    plantReducer: {
        searchResult: Object | null;
    };
}

const Home = () => {
    // const activeIndex = useSharedValue(0)
    const [query, setQuery] = useState(null)
    const [MyPlnants, setMyPlants] = useState(null)

    const plantDetails: Object | null = useSelector((state: RootState) => state.plantReducer.searchResult);
    const { userData } = useSelector((state) => state.authReducer)
    const { allPlants } = useSelector((state) => state.plantReducer)

    useEffect(() => {
        if (plantDetails) navigation.navigate('bookMarkedDetails', { data: plantDetails, bookmark: false })
    }, [plantDetails])


    const navigation = useNavigation()
    const dispatch = useDispatch()

    const flinngUp = Gesture.Fling().direction(Directions.UP).onStart(() => {
        console.log("flingUp")
    })


    const handleSearch = () => {
        dispatch(searchQuery(query.toLowerCase()))
    }

    useEffect(() => {
        setMyPlants(allPlants)
    }, [allPlants])

    useEffect(() => {
        const unsubscribe = navigation.addListener('focus', () => {
            dispatch(getMyPlants(userData?._id))
        });
        return unsubscribe
    }, [navigation])

    return (
        // <View style={styles.homeCnt}>
        <GestureHandlerRootView style={styles.homeCnt}>
            <View style={styles.homeTop_Cnt}>
                <TouchableOpacity style={styles.topIcon}>
                    <Image source={theme.images.menuIcon} style={{ width: "100%", height: "20%" }} resizeMode='contain' />
                </TouchableOpacity>
                <TouchableOpacity style={styles.topIcon}>
                    <Image source={theme.images.profileIcon} style={{ width: "100%", height: "80%" }} resizeMode="contain" />
                </TouchableOpacity>
            </View>
            <View style={styles.homeSearch_Cnt}>
                <TextInput style={styles.searchInput} placeholder='Search here...' placeholderTextColor="black" onChangeText={(e: String) => setQuery(e)} />
                <TouchableOpacity style={styles.searchImg} onPress={handleSearch}>
                    <Image source={theme.images.searchIcon} style={{ width: "100%", height: "90%" }} resizeMode="contain" />
                </TouchableOpacity>
            </View>
            <View style={styles.plantCards_Cnt}>
                <Text style={styles.meduimText}>My plants</Text>
                <GestureDetector gesture={Gesture.Exclusive(flinngUp)}>
                    <View>
                        {
                            MyPlnants && <TouchableOpacity style={styles.plantCard} onPress={() => navigation.navigate('plantDetails', { data: MyPlnants[MyPlnants?.length - 1] })} key={MyPlnants[MyPlnants?.length - 1]._id} activeOpacity={0.9}>
                                <View style={styles.plants} >
                                    <View style={{ width: "70%", height: "90%", paddingLeft: 10 }}>
                                        <Text style={[styles.meduimText, { width: "100%" }]}>{MyPlnants[MyPlnants?.length - 1]?.name.toUpperCase()}</Text>
                                        <Text style={[styles.smallText, { width: "100%", textAlign: "justify" }]}>{MyPlnants[MyPlnants?.length - 1]?.description.slice(0, 200)}</Text>
                                    </View>
                                    <Image source={theme.images.chedi_1} style={{ width: "40%", height: "100%" }} resizeMode="contain" />
                                </View>
                            </TouchableOpacity>
                        }

                    </View>
                </GestureDetector>
            </View>
            <TouchableOpacity style={styles.homeWeather} onPress={() => navigation.navigate('weather')} >
                <Image source={theme.images.weatherBg} resizeMode="cover" style={{ width: "100%", height: "100%", position: "absolute", zIndex: -1 }} />
                <View style={styles.weatherCard_Top} >
                    <Image source={theme.images.cloudIcon} style={{ width: "100%", height: "30%" }} resizeMode='contain' />
                    <Text style={{ color: "white" }}>Weather</Text>
                </View>
                <View style={[styles.weatherCard_Top, { width: "60%", justifyContent: "center" }]}>
                    <Text style={styles.weatherText}>29°C</Text>
                </View>
            </TouchableOpacity>
            <View style={styles.homeBottom_Cnt}>
                <View style={styles.bottomHead}>
                    <Text style={[styles.linkText, { color: "black" }]}>Alerts for today</Text>
                    <TouchableOpacity>
                        <Text style={styles.linkText}>view all</Text>
                    </TouchableOpacity>
                </View>
                <TouchableOpacity style={styles.reminderIndication_cnt}>
                    <Image source={theme.images.chedi_1} style={{ width: "20%", height: "100%" }} resizeMode="contain" />
                    <View style={{ width: "70%", height: "100%", justifyContent: "space-around" }}>
                        <Text style={styles.smallMedium_Text}>Water your peperomia houseplant today </Text>
                        <Text style={styles.smallText}>It’s 2 weeks old, you have to water it twice </Text>
                    </View>
                    <Image source={theme.images.moreIcon} style={{ width: "10%", height: "100%" }} resizeMode="contain" />
                </TouchableOpacity>
                <TouchableOpacity style={styles.reminderIndication_cnt}>
                    <Image source={theme.images.chedi_1} style={{ width: "20%", height: "100%" }} resizeMode="contain" />
                    <View style={{ width: "70%", height: "100%", justifyContent: "space-around" }}>
                        <Text style={styles.smallMedium_Text}>Water your peperomia houseplant today </Text>
                        <Text style={styles.smallText}>It’s 2 weeks old, you have to water it twice </Text>
                    </View>
                    <Image source={theme.images.moreIcon} style={{ width: "10%", height: "100%" }} resizeMode="contain" />
                </TouchableOpacity>
            </View>
        </GestureHandlerRootView>
        // </View>
    )
}

export default Home