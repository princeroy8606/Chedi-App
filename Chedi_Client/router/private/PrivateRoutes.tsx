import { View, Text } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import TabBar from './TabBar'
import BookMarkedDetails from '../../screens/main/bookmarks/BookMarkedDetails'
import Weather from '../../screens/main/home/Weather'
import PlantDetails from '../../screens/main/home/PlantDetails'
import PlantScan from '../../screens/main/plantScan/PlantScan'
import DectectPlant from '../../screens/main/plantScan/DectectPlant'
import ImagePreview from '../../screens/main/plantScan/ImagePreview'
import CareDetails from '../../screens/main/home/CareDetails'
import DiseaseIdentified from '../../screens/main/plantScan/DiseaseIdentified'
import NewPost from '../../screens/main/community/NewPost'
import PersonalPlantScaner from '../../screens/main/home/PersonalPlantScaner'
import PersonalImagePreview from '../../screens/main/home/PersonalImagePreview'

const PrivateRoutes: React.FC = () => {
  const Stack = createNativeStackNavigator()

  return (
    <Stack.Navigator
    initialRouteName='home'
    screenOptions={{
      headerShown: false
  }}
    >
      <Stack.Screen name='home' component={TabBar} />
      <Stack.Screen name='bookMarkedDetails' component={BookMarkedDetails} />
      <Stack.Screen name='weather' component={Weather} />
      <Stack.Screen name='plantDetails' component={PlantDetails} />
      <Stack.Screen name='plantCam' component={DectectPlant} />
      <Stack.Screen name='personalCam' component={PersonalPlantScaner} />
      <Stack.Screen name='imagePreview' component={ImagePreview} />
      <Stack.Screen name='personalImagePreview' component={PersonalImagePreview} />
      <Stack.Screen name='careDetails' component={CareDetails} />
      <Stack.Screen name='healthResult' component={DiseaseIdentified} />
      <Stack.Screen name='newpost' component={NewPost} />
    </Stack.Navigator>
  )
}

export default PrivateRoutes