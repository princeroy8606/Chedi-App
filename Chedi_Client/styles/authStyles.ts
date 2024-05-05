import { Dimensions, StyleSheet } from "react-native";
import theme from "../assets/theme";

const { width, height } = Dimensions.get('window')

const styles = StyleSheet.create({
    landingCnt:{
        width:width,
        height:height,
        alignItems:"center"
    },
    landingText_Cnt:{
        width:"90%",
        height:"25%",
        borderRadius:25,
        backgroundColor:theme.colors.landingCnt,
        marginTop:"20%",
        elevation:10,
        justifyContent:"space-around"
    },
    landingText:{
        fontSize:40,
        fontWeight:"600",
        fontFamily:"inra Sans",
        color:"black",
        padding:10
    },
    landingBtn_Text:{
        fontSize:25,
        fontFamily:"inra Sans",
        marginLeft:20,
        color:theme.colors.landingText,
        textDecorationStyle:"solid",
        textDecorationLine:"underline"
    },
    loginCnt:{
        width:width,
        height:height,
        flexDirection:"column",
        justifyContent:"flex-end"
    },
    loginInput_Cnt:{
        position:"relative",
        width:"100%",
        height:"60%",
        borderTopRightRadius:30,
        borderTopLeftRadius:30,
        backgroundColor:"rgba(255, 255, 255, 0.44)",
        justifyContent:"space-around",
        alignItems:"center"
    },
    chediText:{
        fontSize:54,
        fontWeight:"600",
        color:"#25300E",
        fontFamily:"BrushScriptStd"
    },
    authText:{
        fontSize:16,
        fontFamily:"Poppins-Medium",
        color:"black",
        alignItems:"center"
    },
    greenAuthText:{
       color:"#559705" 
    },
    redAuthText:{
        color:"#863407" 
    },
    inputCnt:{
        width:"80%",
        height:"25%",
    },
    inputTitleText:{
        fontSize:24,
        fontWeight:"600",
        color:"#3C5A28"
    },
    input:{
        width:"100%",
        height:"40%",
        borderBottomWidth:2,
        borderBottomColor:"black",
        fontSize:24,
        color:"black"
    },
    authBtnCnt:{
        width:"80%",
        height:"12%",
        alignItems:"center",
        justifyContent:"center",
        borderRadius:20,
        backgroundColor:"#788F5E",
        elevation:5
    },
    btnText:{
        fontSize:36,
        fontWeight:"500",
        fontFamily:"Poppins-Medium",

    }
})

export default styles