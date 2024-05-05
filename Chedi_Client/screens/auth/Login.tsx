import { View, Text, ImageBackground, StatusBar, Image, TextInput, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import styles from '../../styles/authStyles'
import theme from '../../assets/theme'
import { useNavigation } from '@react-navigation/native'
import { useDispatch } from 'react-redux'
import { userLogin } from '../../redux/features/actions/authentication'


interface loginInterface {
  email: String | null,
  password: String | null
}
const Login = () => {
  const navigation = useNavigation()

  const dispatch = useDispatch()

  const initialObj = {
    email: "princeroy8606@gmail.com",
    password: '123'
  }
  const [loginData, setLoginData] = useState<loginInterface>(initialObj)

  const handleLogin = () => {
    if (loginData.email && loginData.password) {
      dispatch(userLogin(loginData))
    }
  }

  return (
    <ImageBackground source={theme.images.loginImg} style={styles.loginCnt}>
      <StatusBar backgroundColor={"#D2D76A"} />
      <View style={styles.loginInput_Cnt}>
        <Text style={styles.chediText}>Chedi</Text>
        {/* <Text style={styles.authText}>Enter your <Text style={styles.greenAuthText}>email</Text> to send the <Text style={styles.redAuthText}>OTP</Text></Text> */}
        <View style={styles.inputCnt}>
          <Text style={styles.inputTitleText}>Email address</Text>
          <TextInput style={styles.input} value={loginData.email} onChangeText={(e) => setLoginData({ ...loginData, email: e })} />
        </View>
        <View style={styles.inputCnt}>
          <Text style={styles.inputTitleText}>Password</Text>
          <TextInput style={styles.input} value={loginData.password} secureTextEntry onChangeText={(e) => setLoginData({ ...loginData, password: e })} />
        </View>
        <TouchableOpacity onPress={() => navigation.navigate('frgtpassword')}><Text style={styles.authText}>Forgot Password ?</Text></TouchableOpacity>
        <TouchableOpacity style={[styles.authBtnCnt, { backgroundColor: "#82972E" }]} onPress={handleLogin}>
          <Text style={[styles.btnText]}>Sign In</Text>
        </TouchableOpacity>
        <Text style={styles.authText}>New here !<TouchableOpacity onPress={() => navigation.navigate('signup')}><Text style={{ color: "#82972E" }}> create new account</Text></TouchableOpacity></Text>
      </View>
    </ImageBackground>
  )
}

export default Login