import { View, Text, ImageBackground, StatusBar, TextInput, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import styles from '../../styles/authStyles'
import theme from '../../assets/theme'
import { useNavigation } from '@react-navigation/native'
import { useDispatch } from 'react-redux'
import { userSignUp } from '../../redux/features/actions/authentication'

interface regDataInterface {
  Name: String | null,
  Email: String | null,
  Phone: Number | null,
  Password: String | null
}

const SignUp = () => {
  const navigation = useNavigation()
  const dispatch = useDispatch()

  const initialObj = {
    Name: "Prince",
    Email: "princeroy8606@gmail.com",
    Phone: 8606340493,
    Password: '123'
  }
  const [regData, setRegData] = useState<regDataInterface>(initialObj)

  const handleRegister = () => {
    if (regData.Email && regData.Phone && regData.Password) {
      dispatch(userSignUp(regData))
    }
  }
  return (
    <ImageBackground source={theme.images.registerImg} style={styles.loginCnt}>
      <StatusBar backgroundColor={"#5C8A40"} />
      <View style={[styles.loginInput_Cnt, { height: "80%" }]}>
        <Text style={styles.chediText}>Chedi</Text>
        {/* <Text style={styles.authText}>Enter your <Text style={styles.greenAuthText}>Email</Text> to send the <Text style={styles.redAuthText}>OTP</Text></Text> */}
        <View style={[styles.inputCnt, { height: "15%" }]}>
          <Text style={styles.inputTitleText}>Name</Text>
          <TextInput style={styles.input} value={regData.Name} onChangeText={(e) => setRegData({ ...regData, Email: e })} />
        </View>
        <View style={[styles.inputCnt, { height: "15%" }]}>
          <Text style={styles.inputTitleText}>Email address</Text>
          <TextInput style={styles.input} value={regData.Email} onChangeText={(e) => setRegData({ ...regData, Email: e })} />
        </View>
        <View style={[styles.inputCnt, { height: "15%" }]}>
          <Text style={styles.inputTitleText}>Phone</Text>
          <TextInput style={styles.input} value={regData.Phone?.toString()} onChangeText={(e) => setRegData({ ...regData, Phone: e })} keyboardType="number-pad" />
        </View>
        <View style={[styles.inputCnt, { height: "15%" }]}>
          <Text style={styles.inputTitleText}>Password</Text>
          <TextInput style={styles.input} secureTextEntry value={regData.Password} onChangeText={(e) => setRegData({ ...regData, Password: e })} />
        </View>
        <View style={[styles.inputCnt, { height: "15%" }]}>
          <Text style={styles.inputTitleText}>Conform Password</Text>
          <TextInput style={styles.input} secureTextEntry />
        </View>
        <TouchableOpacity style={[styles.authBtnCnt, { backgroundColor: "#82972E", height: "8%" }]} onPress={handleRegister}>
          <Text style={[styles.btnText]}>Sign In</Text>
        </TouchableOpacity>
        <Text style={styles.authText}>Already have an account ? <TouchableOpacity onPress={() => navigation.navigate('login')}><Text style={{ color: "#82972E" }}> Login</Text></TouchableOpacity></Text>
      </View>
    </ImageBackground>
  )
}

export default SignUp