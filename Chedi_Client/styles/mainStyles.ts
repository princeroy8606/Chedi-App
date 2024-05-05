import { Dimensions, StyleSheet } from "react-native";

const { width, height } = Dimensions.get("screen")
const styles = StyleSheet.create({
    tabBarButton: { width: "90%", height: "100%", borderRadius: 50, backgroundColor: "black", alignItems: "center", justifyContent: "center", position: "absolute", bottom: "50%", elevation: 5 },
    homeCnt: {
        width: "100%",
        height: height,
        alignItems: "center",
        justifyContent: "space-around"
    },
    homeTop_Cnt: {
        width: "90%",
        height: "10%",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
    },
    topIcon: {
        width: "10%",
        height: "100%",
        alignItems: "center",
        justifyContent: "center"
    },
    homeSearch_Cnt: {
        position: "relative",
        width: "90%",
        height: "7%",
        flexDirection: "row",
        borderRadius: 40,
        elevation: 1,
        backgroundColor: "white",
        alignItems: "center",
        paddingRight: 15
    },
    searchInput: {
        width: "90%",
        height: "100%",
        borderRadius: 40,
        paddingLeft: 35,
        color: 'black'
    },
    searchImg: {
        width: "10%",
        height: "50%",
        alignItems: "center",
        justifyContent: "center"
    },
    plantCards_Cnt: {
        width: "90%",
        height: "28%",
        justifyContent: "space-between"
    },
    meduimText: {
        fontSize: 24,
        fontWeight: "600",
        color: "black",
        width: "60%"
    },
    plantCard: {
        width: "100%",
        height: "80%",
        borderRadius: 20,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "gray"
    },
    plants: {
        width: "90%",
        height: 150,
        backgroundColor: "white",
        borderRadius: 20,
        flexDirection: "row",
        justifyContent: "space-around",
        padding: 10,
        elevation: 5

    },
    homeWeather: {
        width: "90%",
        height: "18%",
        position: "relative",
        flexDirection: "row",
        justifyContent: "space-between"
    },
    weatherCard_Top: {
        width: "30%",
        height: "100%",
        padding: 25,
        alignItems: "center"
    },
    weatherText: {
        fontSize: 44,
        fontWeight: "400",
        color: "white"
    },
    homeBottom_Cnt: {
        width: "80%",
        height: "30%",
        alignItems: "center",
    },
    bottomHead: {
        width: "100%",
        height: "15%",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center"
    },
    linkText: {
        fontSize: 18,
        fontWeight: "500",
        color: "#61AF2B",
        textDecorationStyle: "solid",

    },
    reminderIndication_cnt: {
        width: "100%",
        height: "20%",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginTop: 5
    },
    smallMedium_Text: {
        fontSize: 14,
        fontWeight: "500",
        color: "black"
    },
    smallText: {
        fontSize: 12,
        fontWeight: "400",
        color: "#628093"
    },
    communityPage: {
        flex: 1,
        alignItems: "center"
    },
    communityScroll: {
        // width:"80%",
        // height:900,
        flexGrow: 1,
        gap: 15,

    },
    postCnt: {
        width: '100%',
        height: "auto",
        borderRadius: 10,
        alignItems: "center",
        padding: 10,
        borderWidth: 2,
        borderColor: "gray"
    },
    postTop_cnt: {
        width: "90%",
        height: 70,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",

    },
    postTop_left: {
        width: "30%",
        height: "80%",
        flexDirection: "row",
        alignItems: "center",

    },
    postTop_right: {
        width: "auto",
        padding: 5,
        height: "80%",
        justifyContent: "space-around",
        alignItems: "flex-end"
    },
    postDiscribtion: {
        width: "90%",
        height: "auto",
    },
    postImg: {
        width: "100%",
        height: 190,
        borderRadius: 30
    },
    bookMarkBtn: {
        width: "90%",
        height: 110,
        borderRadius: 20,
        backgroundColor: "#209283",
        flexDirection: "row",
        justifyContent: "space-around",
        alignItems: "center",
        elevation: 5
    },
    plantDetails_page: {
        width: "100%",
        height: "100%",
        position: "relative"
    },
    absoluteScroll: {
        width: "100%",
        height: "100%",
        position: "absolute",
        zIndex: 1,
    },
    plantsDetails_Cnt: {
        position: "relative",
        width: "100%",
        // height:"auto",
        minHeight: height - (height / 3),
        marginTop: "70%",
        backgroundColor: "white",
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        alignItems: "center",
        paddingTop: 10,
        paddingBottom: 10,
    },
    bigMediumText: {
        fontSize: 30,
        fontWeight: "500",
        color: "black"
    },
    plantFeatures_Cnt: {
        width: "80%",
        flexDirection: "row",
        justifyContent: "space-between",
        marginTop: 10
    },
    plantFeature: {
        width: "auto",
        padding: 10,
        backgroundColor: "#F0F3F6",
        borderRadius: 10
    },
    plantDiscription_Cnt: {
        width: "80%",
        height: 'auto',
        marginTop: 10,
        alignItems: "stretch",
        borderBottomWidth: 0.5,
        borderBottomColor: "gray",
        paddingBottom: 10
    },
    plantSpec_cnt: {
        width: "80%",
        flexDirection: "row",
        flexWrap: "wrap",
        height: "auto",
        gap: 20,
        marginTop: 12,
    },
    plantSpec: {
        width: "40%",
        flexDirection: "row",
        justifyContent: "space-between",
        flexGrow: 1
    },
    imgArea: {
        width: "50%",
        height: 70,
        backgroundColor: "#EEF7E8",
        borderRadius: 10,
        justifyContent: "center",
        alignItems: "center",
        padding: 5
    },
    bottomBtn_Cnt: {
        position: "absolute",
        width: "80%",
        height: 60,
        backgroundColor: "#209283",
        bottom: 0,
        borderRadius: 10,
        justifyContent: "center",
        alignItems: "center",
        marginBottom: 20
    },
    cropResult_cnt: {
        width: "100%",
        height: 150,
        flexDirection: "row",
        justifyContent: "space-between",
        borderRadius: 20,
        padding: 5,
        backgroundColor: "white",
        elevation: 1
    },
    weatherLoc_Cnt: {
        width: "80%",
        height: "5%",
        flexDirection: "row",
        justifyContent: "space-between",
        marginTop: "20%"
    },
    weatherImg_Cnt: {
        width: "80%",
        height: "15%",
        flexDirection: "row",
        justifyContent: 'space-between',
        alignItems: "center",
    },
    weatherInfo: {
        width: "50%",
        height: "100%",
        backgroundColor: "#85DFF3",
        borderRadius: 10,
        justifyContent: "space-around",
        alignItems: "center"
    },
    plantName_Cnt: {
        width: "90%",
        height: "20%",
        alignItems: "center",
        justifyContent: "space-around",
        marginTop: "10%"

    },
    steaksCnt: {
        width: "90%",
        height: "15%",
        backgroundColor: "#b57309",
        elevation: 20,
        flexDirection: "row",
        justifyContent: "space-around",
        alignItems: "center",
        borderRadius: 20,
        marginTop: "5%"
    },
    wateringCnt: {
        width: "90%",
        height: "40%",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
    },
    bottomBtn: {
        width: 80,
        height: 80,
        borderRadius: 50,
        backgroundColor: "green",
        elevation: 10,
        justifyContent: "center",
        alignItems: "center",
        position: "absolute", bottom: 20, right: 10
    },
    careDetails_Top: {
        width: "80%",
        height: 150,
        justifyContent: "space-around",
        alignItems: "center"
    },
    careDetails: {
        width: "80%",
        height: height - 150,
        flexDirection: "column",
        // flexWrap: "wrap",
        gap: 20,
    },
    requiremnts_cnt: {
        width: "100%",
        height: "auto",
        borderRadius: 10,
        backgroundColor: "#E6EAFA",
        padding: 10,
        gap: 10,
        marginBottom: 20,
        marginTop: 20,
        elevation: 1
    },
    comments_cnt: {
        position: "absolute",
        width: "100%",
        height: "80%",
        padding: 20,
        bottom: 0,
        backgroundColor: "white",
        borderTopRightRadius: 30,
        borderTopLeftRadius: 30,
        elevation: 10,
    },
    comment_cnt: {
        width: "90%",
        height: "auto",
        borderRadius: 10,
        padding: 10,
        borderWidth: .55,
        marginBottom: 15
    },
    comment_top: {
        width: "100%",
        height: 20,
        flexDirection: "row",
        justifyContent: "space-between",

    },
    comment_input_cnt: {
        position: "absolute",
        width: "100%",
        height: 80,
        padding: 10,
        bottom: 100,
        flexDirection: "row",
        justifyContent: "space-around",
        alignItems: "center"
    },
    comment_input: {
        width: "80%",
        height: "100%",
        paddingLeft: 10,
        borderRadius: 10,
        borderWidth: 1,
        borderColor: "black"
    },
    newpost_btn: {
        width: "35%",
        height: '100%',
        borderRadius: 5,
        backgroundColor: "green",
        padding: 5,
        elevation: 5,
        alignItems: "center"
    },
    newPost_Page: {
        width: width,
        height: height,
        alignItems: "center",
        justifyContent: "center"

    },
    popup_cnt: {
        position: "absolute",
        width: "100%",
        height: 300,
        borderTopRightRadius: 30,
        borderTopLeftRadius: 30,
        backgroundColor: "black",
        elevation: 25,
        bottom: 0,
        padding: 35,
        alignItems:"center",
        justifyContent:"center"
    }
})

export default styles