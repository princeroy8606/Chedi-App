import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Landing from '../../screens/auth/Landing'
import Login from '../../screens/auth/Login'
import SignUp from '../../screens/auth/SignUp'
import ForgotPassword from '../../screens/auth/ForgotPassword'

const PublicRoutes = () => {
  const Stack = createNativeStackNavigator()
  return (
    <Stack.Navigator
      initialRouteName='landing'
      screenOptions={{
        headerShown: false
      }}
    >
      <Stack.Screen name='landing' component={Landing} />
      <Stack.Screen name='login' component={Login} />
      <Stack.Screen name='signup' component={SignUp} />
      <Stack.Screen name='frgtpassword' component={ForgotPassword} />
    </Stack.Navigator>
  )
}

export default PublicRoutes