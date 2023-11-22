import React, { useRef } from 'react';
import { View, StyleSheet, Dimensions, Image, Alert, ImageBackground } from 'react-native';
import ImageZoom from 'react-native-image-pan-zoom';
import Svg, { Circle, Ellipse, Polygon } from 'react-native-svg';

const CampusMaps = () => {
  const windowWidth = Dimensions.get('screen').width;
  const windowHeight = Dimensions.get('screen').height;
  
  
  // As coordenadas dos botões (ajuste conforme necessário)
  const buttonPX = 70;
  const buttonPY = 580;

  return (
    <View style={StyleSheet.absoluteFillObject}>
        
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
          resizeMode="stretch"
        />
        <Svg style={StyleSheet.absoluteFill}>
        <Polygon
          points = "301,365 294,350 322,270 328,285"
          fill="yellow"
            opacity={0.01}
            onPress={() => Alert.alert('Bloco A',"• Design Studio\n• Laboratório de Manufatura\n• Espaço Azul\n• Sala de Simulações")}
          />
          <Polygon
          points = "283,323 291,337 317,254 310,245"
          fill="yellow"
            opacity={0.01}
            onPress={() => Alert.alert('Bloco B',"• Fórmula SAE\n• Baja SAE\n• Laboratórios de Engenharia Automobilística\n• Linha de Produção de Karts\n• Mecânica dos Sólidos\n• Oficina Mecânica")}
          />
          <Polygon
          points = "268,298 293,232 299,247 275,316"
          fill="yellow"
            opacity={0.01}
            onPress={() => Alert.alert('Bloco C',"• Aerodesign\n• Eco Mauá\n• Laboratórios\n• Sanitários")}
          />
          <Polygon
          points = "280,205 288,222 265,293 257,273"
          fill="yellow"
            opacity={0.01}
            onPress={() => Alert.alert('Bloco D',"• Fab Lab\n• Sala de Pintura\n• Laboratório de Robótica - KIMAUÁNISSO\n• Laboratório de Ciência de Dados e Inteligência Artificial\n• Mauá Esports\n• Sanitários")}
          />
          <Polygon
          points="244,240 252,259 274,192 267,173"
          fill="yellow"
            opacity={0.01}
            onPress={() => Alert.alert('Bloco E',"• Criação Digital\n• Computação Avançada\n• Laboratórios de Projeto e Modelagem\n• Laboratórios de Materiais")}
          />
          <Polygon
          points="228,100 230,215 203,218 201,104"
          fill="yellow"
            opacity={0.01}
            onPress={() => Alert.alert('Bloco F',"• Salas de Aula\n• Mauá Jr\n• Mauá Finance Group\n• Concreto Mauá SAMPE\n• Laboratório de Introdução à Eng. Civil / Túnel de Vento\n• Laboratório de Hidráulica e Hidrologia\n• Laboratório de Máquinas de Fluxo\n• Laboratório de Mecânica dos Fluidos\n• Laboratório de Termodinâmica\n• Sanitários")}
          />
          <Polygon
          points= "193,116 195,221 168,224 167,120"
          fill="yellow"
            opacity={0.01}
            onPress={() => Alert.alert('Bloco G',"• Sala de Professores\n• Atendimento aos Alunos\n• Setor de Estágios\n• Academia de Talentos\n• Refeitório")}
          />
          <Polygon 
          points = "253,395 264,422 192,630 183,611 237,453 224,422 233,397 245,422"
          fill="yellow"
            opacity={0.01}
            onPress={() => Alert.alert('Bloco H',"• Serviço Médico Ocupacional\n• Salas de Aula\n• Sanitários\n• Auditório\n• Refeitório\n• Nawat Games\n• Inova Mauá\n• Enactus Mauá\n• Dev Community Mauá\n• Metaverso")}
          />
          <Polygon 
          points = "82,373 90,451 56,473 49,396"
          fill="yellow"
            opacity={0.01}
            onPress={() => Alert.alert('Bloco I',"• Planta Piloto Eng. Alimentos\n• Laboratório de Pesquisas")}
          />
          <Polygon 
          points = "85,360 40,385 35,340 80,315"
          fill="yellow"
            opacity={0.01}
            onPress={() => Alert.alert('Bloco J',"• Planta Piloto Eng. Química\n• Laboratórios de Química\n• Núcleo de Sistemas Eletrônicos Embarcados NSEE\n• NAE Mauá\n• Sanitários")}
          />
          <Polygon
          points="234,159 237,150 232,138 245,100 262,130 243,184"
          fill="yellow"
            opacity={0.01}
            onPress={() => Alert.alert('Bloco K',"• Centro Acadêmico\n• Atlética\n• Núcleo de Internacionalização\n• Student Travel Bureau\n• Papelaria e Reprografia")}
          />
          <Polygon
          points="311,209 314,202 284,122 280,132"
          fill="yellow"
            opacity={0.01}
            onPress={() => Alert.alert('Bloco L',"• Laboratório de Materiais da Construção Civil\n• Marcenaria - GMS")}
          />
          <Polygon
          points = "159,90 135,89 135,61 160,64"
          fill="yellow"
            opacity={0.01}
            onPress={() => Alert.alert('Bloco M',"• Laboratório de Motores\n• Laboratório de Emissões\n• Sanitário Acessível\n• Vestiários")}
          />
          <Polygon
          points="267,173 274,140 310,226 306,240"
          fill="yellow"
            opacity={0.01}
            onPress={() => Alert.alert('Bloco N',"• Restaurante Tech Food\n• Elétrica - GMS\n• Hidráulica - GMS\n• Pintura - GMS")}
          />

          <Polygon
          points= "205,266 213,279 181,370 176,358"
          fill = "yellow"
          opacity={0.01}
          onPress ={()=> Alert.alert("Bloco P", "• Laboratórios de Informática\n• Sanitários\n• Gerência Financeira")}
          />
          <Polygon 
          points = "172,335 159,304 172,267 185,300"
          fill = "yellow"
          opacity={0.01}
          onPress ={()=> Alert.alert("Bloco Q", "• Gerência de Tecnologia de Informação\n• Laboratórios de Informática\n• Reitoria")}
          />
          <Polygon 
          points = "63,510 90,493 96,563 70,580"
          fill = "yellow"
          opacity={0.01}
          onPress ={()=> Alert.alert("Bloco R", "• Centro de Pesquisas\n• Superintendência\n• Gerência de Recursos Humanos\n• Gerência de Manutenção e Serviços\n• Gerência de Marketing")}
          
          />
          <Polygon 
          points = "310,460 325,495 301,543 290,515"
          fill = "yellow"
          opacity={0.01}
          onPress ={()=> Alert.alert("Bloco S", "• Divisão de Motores e Veículos\n• Bancos de Prova")}
          />
          <Polygon 
          points = "222,405 210,440 221,467 210,500 187,440 210,375"
          fill = "yellow"
          opacity={0.01}
          onPress ={()=> Alert.alert("Bloco U", "• Salas de Aula\n• Estúdio de Gravações\n• Sala Chevy Pro\n• Sanitários")}
          />
          <Polygon 
          points = "196,500 179,550 153,485 172,438"
          fill = "yellow"
          opacity={0.01}
          onPress ={()=> Alert.alert("Bloco V", "• Biblioteca - Acervo\n• Sala de Estudo Individual\n• Sala de Estudo Coletivo\n• Auditórios Alpha, Beta e Gama")}
          />
          <Polygon
          points="258,360 274,397 265,422 253,395"
          fill = "yellow"
          opacity={0.01}
          onPress ={()=> Alert.alert("Bloco W", "• Laboratórios de Física\n• Laboratórios de Eletrônica Aplicada\n• Laboratório de Automação com Controladores Lógicos Programáveis\n• Laboratório de Automação e Robótica Industrial\n• Salão de Eventos")}
          />
          <Polygon
          points="90,305 90,240 30,250 30,313"
          fill="yellow"
            opacity={0.01}
            onPress={() => Alert.alert('Ginásio de Esportes',"Esse bloco contem 4 ginásios poliesportivos e também um lanchonete")}
          />
                   
          
          <Ellipse
            cx={(buttonPX / windowWidth) * windowWidth}
            cy={(buttonPY / windowHeight) * windowHeight}
            rx="1"
            ry="1"
            r={1}
            fill="red"
            opacity={1}
            onPress={() => Alert.alert('Ginásio de Esportes',"Esse bloco contem 4 ginásios poliesportivos e também um lanchonete")}
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
