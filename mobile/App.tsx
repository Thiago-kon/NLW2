import { StatusBar } from 'expo-status-bar'
import React from 'react'
import AppStack from './src/Routes/AppStack'
import { AppLoading } from 'expo'
import { Archivo_400Regular, Archivo_700Bold, useFonts } from '@expo-google-fonts/archivo'
import { Poppins_400Regular, Poppins_600SemiBold } from '@expo-google-fonts/poppins'

export default function App() {
  let [fonstLoaded] = useFonts({
    Archivo_400Regular,
     Archivo_700Bold,
     Poppins_400Regular,
     Poppins_600SemiBold
  })

  if(!fonstLoaded){
    return <AppLoading />
  }else{
    return (
      <>
        <AppStack />
        <StatusBar style="light" />
      </>
    )

  }
}
