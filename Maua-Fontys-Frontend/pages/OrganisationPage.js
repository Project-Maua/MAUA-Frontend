import React, { useState, useEffect } from 'react'
import { View, ScrollView, Text, Image, TouchableOpacity } from 'react-native'
import Course from '../components/Course.js'
import {customStyles} from '../assets/style'
import '../utils/i18n'
import { useTranslation } from 'react-i18next'
import Constants from '../utils/Constants.js'

const cardImage = require('../assets/schoolmaua.jpg')

const OrganisationPage = () => {
  const {t, i18n} = useTranslation()
  const [data, setData] = useState([])
  const [isLoading, setLoading] = useState(true)

  const getActivities = async () => {
    try {
      const response = await fetch(Constants.organisations_url, {
        header:{
          "Content-Type":"application/json"
        }
      })
      const json = await response.json()
      setData(json)
    } catch (error) {
      console.error(error)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    getActivities()
  }, [])
  
  return (
    <ScrollView>
    <View>
      <View style={""}>
        <Text style={customStyles.body_text}>{t("Maua Organisations")}</Text>
        <View style={customStyles.row_two_components}>
            <View style={customStyles.card}>
              <Image source={cardImage} style={customStyles.card_image} />
              <View style={customStyles.card_content}>
                <Text style={customStyles.card_title}>{t("Rector")}</Text>
                <Text style={customStyles.card_message}>...</Text>
                <View style={customStyles.containeritem}>            
                  <TouchableOpacity onPress={""}
                    style={customStyles.button}
                  >
                    <Text style={customStyles.button_text}>{t("More info")}</Text>
                  </TouchableOpacity> 
                </View>
              </View>
            </View>
            <View style={customStyles.card}>
              <Image source={cardImage} style={customStyles.card_image} />
              <View style={customStyles.card_content}>
                <Text style={customStyles.card_title}>{t("Vice rector")}</Text>
                <Text style={customStyles.card_message}>...</Text>
                <View style={customStyles.containeritem}>            
                  <TouchableOpacity onPress={""}
                    style={customStyles.button}
                  >
                    <Text style={customStyles.button_text}>{t("More info")}</Text>
                  </TouchableOpacity> 
                </View>
              </View>
            </View>
          </View>
        <Text style={customStyles.body_text}>{t("Internal Program")}</Text>
        <View style={customStyles.row_align_center}>
              <View style={""}>
                {organisations.map((course, index) => (
                  <Course key={index} course={course} />
                ))}
              </View>
        </View>
      </View>
    </View>
  </ScrollView> 

  )
}

export default OrganisationPage

const organisations = [
{
    'id': 'or-000001',
    'image': 'https://maua.br/img/upload/banner-nawat-games-1678304646.jpg',
    'name': 'Nawat Games',
    'description': 'A Nawat Games é o núcleo de desenvolvimento de jogos eletrônicos do Instituto Mauá de Tecnologia. Tem como objetivo desenvolver jogos indies, ajudando quem estiver disposto a aprender sobre o mundo de GameDevs e a entender como é o setor, utilizando as ferramentas de programação e arte mais utilizadas pelo mercado.\nA equipe, atualmente, está dividida em algumas áreas:\n    Programação - onde costumamos usar a linguagem C# para desenvolvimento na Unity Engine e dar vida ao nosso jogo.\n    GameArt - onde normalmente utilizamos o Aseprite como meio de criar as artes, dando um visual ao game.\n    GameSound - sendo uma especialidade que se concentra na criação e implementação do áudio, fazendo com que o player tenha uma experiência mais imersiva e envolvente.\n    Design Visual - é a área responsável por criar e dar uma nova forma à nossa entidade, como a logo, nome, design de produtos (roupas) e até mesmo todo o visual em nossas redes sociais.\nJá foram desenvolvidos diversos projetos com toda a equipe, até mesmo um jogo que foi criado para deficientes visuais, tendo como objetivo levar a experiência deste incrível universo dos games para todos, independentemente de sua condição.\nOs jogos estão publicados no itch.io, caso queira testar.\nE-mail: nucleo.games@maua.br\nItch.io: https://gamedev-maua.itch.io/'
},
{
    'id': 'or-000002',
    'image': 'https://maua.br/img/upload/bateria-maua-clube-da-manga-1681918072.jpg',
    'name': 'Bateria Mauá - Clube da Manga',
    'description': 'A Bateria Mauá - Clube da Manga foi fundada em 1996 e temos como principal ideologia espalhar o ritmo, a paixão e a integração entre nossos membros e entre todos aqueles que compõem a comunidade do Instituto Mauá de Tecnologia.\nAs atividades consistem em apresentações que podem ser realizadas em eventos do IMT, festas organizadas por outras entidades da Instituição, jogos e competições universitárias e eventos com patrocinadores. Cada um desses eventos, mesmo que diferentes, tem sua importância para nossa bateria, que está sempre aberta para mais oportunidades!\nA Bateria não realiza processo seletivo, porém a inclusão de novos ritmistas nas apresentações requer muito esforço e comprometimento. Os ensaios ocorrem aos sábados das 14h às 17h na Praça Mauá em frente ao IMT.\nInteresse em fazer parte dessa família?\nEntre em contato pelo Instagram ou pelo e-mail:  bateriamauaclubedamanga@gmail.com'
},
{
    'id': 'or-000003',
    'image': 'https://maua.br/img/upload/112017/atividade-extracurricular-enactus-07083503.png',
    'name': 'Enactus Mauá',
    'description': 'A Enactus é uma organização estudantil internacional, sem fins lucrativos, que reúne estudantes e líderes de negócios, os quais possuem o desejo de desenvolver projetos sociais por meio da ação empreendedora. Nossos projetos têm por objetivo sanar as necessidades de comunidades carentes em três pilares: Econômico (geração de renda), Social (empoderamento e desenvolvimento da comunidade) e Ambiental (não agressão ao meio ambiente). Não queremos apenas conceder uma saída para o problema, mas caminhar junto da comunidade, ensinando-a a dar seus próprios passos empreendedores, para que, assim, seus membros se capacitem, desenvolvendo suas próprias habilidades e, em consequência, melhorem suas vidas e o meio em que vivem. E a transformação acontece dos dois lados: as pessoas a que servimos e a nós mesmos, que desenvolvemos valores para nos tornarmos os verdadeiros líderes do futuro.\nENtrepreneurial(empreendedorismo) - ter a perspectiva de ver uma oportunidade e o talento de criar valor a partir dela\nACTion(ação) - a vontade de fazer algo e o comprometimento de fazê-lo\nUS(nós) - estudantes, acadêmicos e líderes de negócios que se veem conectados de alguma maneira importante.',
},
{
    'id': 'or-000004',
    'image': 'https://maua.br/img/upload/coletivo-diversidade-maua-1682515847.jpg',
    'name': 'Diversidade Mauá',
    'description': 'O Coletivo Diversidade Mauá surgiu em 2017 com o intuito de ser um espaço tanto de acolhimento para os alunos LGBTs quanto de aprendizado para toda a comunidade.\nMas em 2022, 5 anos após a sua criação expandimos nossas atividades com o intuito de abranger todas as minorias, atualmente temos projetos que focam nas mais diversas pautas, desde gênero, racial e PCDs, neuro divergentes.\nAtualmente somos divididos em uma área de projetos, e uma área administrativa (marketing e RH), sendo a de projetos por sua vez dividida em:\nPE - Projetos Externos onde focamos na interação entre instituições externas e a Mauá.\nPI - Projetos Internos que trabalha dentro dos limites da Mauá.\nPara mais informações acesse nosso Instagram',
},
{
    'id': 'or-000005',
    'image': 'https://maua.br/img/upload/inova-maua-1645726778.png',
    'name': 'InovaMauá',
    'description': 'O InovaMauá é uma organização de estudantes do Instituto Mauá de Tecnologia que desenvolve projetos, ideias e campanhas capazes de inovar e promover a sustentabilidade, buscando sempre envolver nossos pilares em nossos desafios.\nCom diversas pesquisas, muito estudos e experimentos buscamos verificar se as ideias são aplicáveis na prática. Quando obtemos sucesso nos desenvolvimentos, nosso trabalho é levado para competições acadêmicas, feiras e eventos internos e externos para divulgarmos nossas ideias e avanços.\nEm 2018 três projetos foram desenvolvidos: confecção de biopolímero a partir de amido de mandioca, tratamento de água contaminada com o uso de algas e material compósitos a base de papel reutilizado.\nDesenvolvemos campanhas para incentivar a reciclagem e a economia circular, como o uso consciente dos copos plásticos dentro do campus e o Mauá recicla.\nEm 2019 foram elaborados dois projetos: o tratamento de água contaminada com metais pesados através das fibras da casca de banana e do coco e o desenvolvimento de uma biofralda inteligente geriátrica, onde além de possuir um material sustentável a fim de substituir o plástico, também foi construído um sensor para que fosse possível alertar o cuidador e/ou responsável do idoso, através de um aplicativo para smartphones, o momento mais adequado para a troca da fralda.\nEm 2020 dois projetos foram desenvolvidos: criação de um centro comunitário sustentável e um aplicativo educacional sobre uso e descarte de resíduos.\nParticipamos de um Hackthon onde ficamos entre as 20 equipes finalistas.\nDesenvolvemos uma campanha com a Startup Trash2Money para coleta de resíduos na faculdade para posterior reciclagem.\n\nOs pilares do INOVA são:\n- Engenharia\n- Ética\n- Sustentabilidade\n- Educação\n- Originalidade\n- Pensamento crítico\n- Inovação.'
}  
]
