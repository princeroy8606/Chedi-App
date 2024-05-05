import { View, Text, ImageBackground, StatusBar, TextInput, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'
import theme from '../../assets/theme'
import styles from '../../styles/authStyles'

const ForgotPassword = () => {
  const [count, setCount] = useState(1)

  const toggleEllemts = () => {
    console.log(count)
    switch (count) {
      case 1:
        return (<View style={styles.loginInput_Cnt}>
          <Text style={styles.chediText}>Chedi</Text><Text style={styles.authText}>Enter your <Text style={styles.greenAuthText}>Email</Text> to send the <Text style={styles.redAuthText}>OTP</Text></Text>
          <View style={styles.inputCnt}>
            <Text style={styles.inputTitleText}>Email address</Text>
            <TextInput style={styles.input} />
          </View>
          <TouchableOpacity style={styles.authBtnCnt} onPress={() => setCount(2)}>
            <Text style={styles.btnText}>Send</Text>
          </TouchableOpacity>
        </View>)
      case 2:
        return (<View style={styles.loginInput_Cnt}>
          <Text style={styles.chediText}>Chedi</Text>
          <Text style={styles.authText}>Check your <Text style={styles.greenAuthText}>Email</Text> and copy the<Text style={styles.redAuthText}>OTP</Text> below</Text>
          <View style={styles.inputCnt}>
            <TextInput style={[styles.input, { letterSpacing: 80 }]} keyboardType="number-pad" />
          </View>
          <TouchableOpacity style={styles.authBtnCnt} onPress={() => setCount(3)}>
            <Text style={styles.btnText}>Send</Text>
          </TouchableOpacity>
        </View>)
      case 3:
        return (<View style={styles.loginInput_Cnt}>
          <Text style={styles.chediText}>Chedi</Text>
          <Text style={styles.authText}>Create new Password</Text>
          <View style={[styles.inputCnt]}>
            <Text style={styles.inputTitleText}>Password</Text>
            <TextInput style={styles.input} secureTextEntry />
          </View>
          <View style={[styles.inputCnt]}>
            <Text style={styles.inputTitleText}>Conform Password</Text>
            <TextInput style={styles.input} secureTextEntry />
          </View>
          <TouchableOpacity style={styles.authBtnCnt} onPress={() => setCount(3)}>
            <Text style={styles.btnText}>Send</Text>
          </TouchableOpacity>
        </View>)

    }
  }

  useEffect(() => {
    toggleEllemts()
  }, [count])
  return (
    <ImageBackground source={theme.images.passwordImg} style={styles.loginCnt}>
      <StatusBar backgroundColor={"#C9E487"} />
      {
        toggleEllemts()
      }
    </ImageBackground>
  )
}

export default ForgotPassword