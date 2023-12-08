import React from 'react'
import { StyleSheet, Dimensions} from 'react-native'
import { WebView } from 'react-native-webview';

const CampusMaps = () => {
  
  const windowWidth = Dimensions.get('screen').width
  const windowHeight = Dimensions.get('screen').height
  
  // As coordenadas dos botões (ajuste conforme necessário)
  return (<WebView source={{uri:"https://www.google.com/maps/d/u/0/embed?mid=1CP__veshxzogZjpnvNUNtickPbHS6I8&ehbc=2E312F&noprof=1&z=17"}} width={windowWidth} height={windowHeight}/>
    
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
})

export default CampusMaps
