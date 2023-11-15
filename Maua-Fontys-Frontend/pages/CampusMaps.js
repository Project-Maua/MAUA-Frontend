import React from 'react';
import { View, StyleSheet, Dimensions, Image, Alert } from 'react-native';
import ImageZoom from 'react-native-image-pan-zoom';
import Svg, { Circle } from 'react-native-svg';

const CampusMaps = () => {
  const windowWidth = Dimensions.get('window').width;
  const windowHeight = Dimensions.get('window').height;

  // As coordenadas dos botões (ajuste conforme necessário)
  const button1X = 100;
  const button1Y = 326;
  const button2X = 220;
  const button2Y = 300;

  return (
    <View style={styles.container}>
        
      <ImageZoom
        cropWidth={windowWidth}
        cropHeight={windowHeight}
        imageWidth={windowWidth}
        imageHeight={windowHeight}
        minScale={1}
      >
        <Image
          source={require('../assets/campusMaps/mapCampus.jpg')}
          style={{ width: windowWidth, height: windowHeight }}
          resizeMode="contain"
        />
        <Svg style={StyleSheet.absoluteFill}>
          <Circle
            cx={(button1X / windowWidth) * windowWidth}
            cy={(button1Y / windowHeight) * windowHeight}
            r={10}
            fill="yellow"
            opacity={0.1}
            onPress={() => Alert.alert('Ginásio de Esportes',"Esse bloco contem 4 ginásios poliesportivos e também um lanchonete")}
            
          />
          <Circle                                                                                                                                       
            cx={(button2X / windowWidth) * windowWidth}
            cy={(button2Y / windowHeight) * windowHeight}
            r={10}
            fill="yellow"
            opacity={0.1}
            onPress={() => Alert.alert('Bloco F',"Esse bloco contem a secretaria para os alunos e também a sala dos professores")}
            
          />
        </Svg>
        
      </ImageZoom>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default CampusMaps;
