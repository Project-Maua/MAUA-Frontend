import React, { useState, useEffect } from 'react';
import {View, ScrollView, Text, TouchableOpacity } from 'react-native';
import Course from '../components/Course.js';
import {customStyles} from '../assets/style';
import '../utils/i18n'
import { useTranslation } from 'react-i18next'
import Constants from '../utils/Constants.js';
const CoursePage = ({navigation}) => {

  const {t, i18n} = useTranslation()

    const handleCourses = () => {
        navigation.navigate('Courses')

    };
    const handleAbout = () => {
        navigation.navigate('About')

    };
    const handleOrganisation = () => {
        navigation.navigate('Organisation')

    };

  const [data, setData] = useState([]);
  const [isLoading, setLoading] = useState(true);


  const getActivities = async () => {
    try {
      const response = await fetch(Constants.courses_url, {
        header:{
          "Content-Type":"application/json"
        }
      });
      const json = await response.json();
      setData(json);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getActivities();
  }, []);
  return (
    <ScrollView>
    <View>
      <View style={""}>
        
        <View style={customStyles.topbar}>
            <TouchableOpacity style={customStyles.button} onPress={handleAbout} >
                <Text style={customStyles.button_text}>{t("About")}</Text>
            </TouchableOpacity>
            <TouchableOpacity style={customStyles.button_active} onPress={handleCourses}>
                <Text style={customStyles.button_active_text}>{t("Courses")}</Text>
            </TouchableOpacity>
            <TouchableOpacity style={customStyles.button} onPress={handleOrganisation}>
                <Text style={customStyles.button_text}>{t("Organisation")}</Text>
            </TouchableOpacity>
        </View>
        <Text style={customStyles.body_text}>{t("Maua courses")}</Text>
        <View style={customStyles.message_container}>
          <Text style={customStyles.message_container_title}>{t("Here you can find an overview of the courses at Maua")}</Text>
          <Text style={customStyles.message_container_text}>{t("Provided by Maua University")}</Text>
        </View>
        <Text style={customStyles.body_text}>{t("University activities")}</Text>
        <View style={customStyles.row_align_center}>
              <View style={""}>
                {courses.map((course, index) => (
                  <Course key={index} course={course} />
                ))}
              </View>
        </View>
      </View>
    </View>
  </ScrollView> 

  );
};

export default CoursePage;

const courses = [
  {
    'id': 'co-000001',
    'image': 'https://maua.br/img/upload/banner-design-1677511092.jpg',
    'name': 'Design',
    'description': 'Adentrar no universo do Design é embarcar em uma jornada de criatividade e desafios. O designer é protagonista da inovação, pronto para traduzir problemas em soluções que unem a estética, a técnica e a funcionalidade em produtos tangíveis e digitais. Inspirado pelas necessidades das pessoas e apoiado por pesquisas multifacetadas, ele se lança na criação de projetos de variadas complexidades, abraçando abordagens ágeis que se adaptam ao ritmo acelerado das transformações tecnológicas. Tudo isso é permeado pelos princípios fundamentais do tripé da inovação: desejabilidade, factibilidade e viabilidade. \nO curso de Design da Mauá é uma trilha de excelência, marcada por conquistas notáveis. Com uma taxa de empregabilidade que se aproxima de 100%, nosso programa é uma ponte para o sucesso. Unindo design, tecnologia e negócios, o curso cria um ambiente de aprendizado dinâmico, apoiado por uma infraestrutura moderna, corpo docente experiente, um currículo atualizado e centrado em projetos reais.\nSe você busca trilhar um caminho de aprendizado rico e significativo no campo do Design, a Mauá é o lugar onde suas aspirações ganham vida. Junte-se a nós para explorar um currículo arrojado e dinâmico, moldado para prepará-lo não apenas para o mercado, mas para se destacar e inovar. Faça parte da comunidade de designers Mauá e dê os primeiros passos rumo a uma carreira estimulante e repleta de possibilidades.',
    'duration': '4 anos',
    'tuition': '2718.00',
    'shift': 'Diurno'
},
{
    'id': 'co-000002',
    'image': 'https://maua.br/img/upload/banner-engenharia-civil-1677511131.jpg',
    'name': 'Engenharia Civil',
    'description': 'Descubra um universo de possibilidades com o nosso renomado curso de Engenharia Civil da Mauá. Preparamos você para enfrentar os desafios da sociedade moderna, abrangendo desde o planejamento urbano até a construção de edifícios residenciais e comerciais, pontes imponentes, rodovias e ferrovias estratégicas, aeroportos funcionais e infraestrutura vital, incluindo a elaboração de projetos desde sistemas de saneamento básico até a mobilidade para cidades inteligentes, incorporando as mais modernas tecnologias.\nAqui, incentivamos o espírito empreendedor, permitindo que você crie e gerencie sua própria empresa, embasado nas melhores práticas do setor. Se você busca uma carreira dinâmica e impactante na área de Engenharia Civil, junte-se a nós no curso da Mauá e abra portas para um futuro repleto de oportunidades.\nEm quais campos trabalhar:\nConstrução Civil - atue no projeto e em construções em geral como edifícios residenciais, industriais, comerciais, de serviços, lazer, no desenvolvimento de tecnologias, materiais de construção e gerenciamento de obras;\nEstruturas - trabalhe no desenvolvimento dos mais variados projetos aplicados à construção civil: concreto armado e protendido, estruturas metálicas e em madeira, pontes, túneis e estruturas portuárias.\nGeotecnia - atue no desenvolvimento de projetos e obras de barragens, fundações, escavações de poços, túneis e subsolos, estruturas de contenção para aterros, obras ambientais e sistemas de contenção para locais de risco\nSaneamento básico e recursos hídricos -  atue em sistemas de abastecimento de água e coleta de esgotos; estações de tratamento e na regularização de rios, canais, drenagem urbana e obras relacionadas com  hidrelétricas;\nTransportes - atue no planejamento e implementação de rodovias, ferrovias, aeroportos, navegações e sistemas de logística e transporte.',
    'duration': '5 anos',
    'tuition': '3891.00',
    'shift': 'Diurno'
},
{
    'id': 'co-000003',
    'image': 'https://maua.br/img/upload/banner-engenharia-alimentos-1677511167.jpg',
    'name': 'Engenharia de Alimentos',
    'description': 'Descubra o emocionante mundo da Engenharia de Alimentos na Mauá, onde você se tornará um especialista na produção segura e eficiente de alimentos em grande escala. Como um Engenheiro de Alimentos, você estará na vanguarda do futuro da alimentação, enfrentando desafios cruciais como o combate à fome e o aumento da produção global de alimentos.\nNossos alunos não apenas aprendem, mas vivenciam a Engenharia de Alimentos desde o início do curso. Com um foco prático inigualável, você será imerso em laboratórios didáticos, de pesquisa e de processamento, muitas vezes trabalhando em colaboração com empresas reais. Aqui, as competências essenciais são desenvolvidas de maneira dinâmica, capacitando você a enfrentar os desafios do setor de alimentos com confiança.\nO Engenheiro de Alimentos da Mauá é um profissional altamente requisitado, pronto para transformar a indústria alimentícia e contribuir para a inovação e sustentabilidade. Junte-se a nós e seja parte da solução para as necessidades globais de alimentação. Venha explorar as infinitas possibilidades que a Engenharia de Alimentos oferece em um ambiente de aprendizado único e voltado para a prática.\nQuer um curso de Engenharia de Alimentos que  ensine a você o conteúdo na prática durante toda a graduação? A Mauá oferece a melhor infraestrutura para você!\nA graduação em Engenharia de Alimentos da Mauá oferece um intenso programa prático que leva o aluno desde as primeiras séries para os laboratórios didáticos e de pesquisa e de processamento em pequena escala. O campus conta ainda com uma instalação semi-industrial capaz de simular a produção de diversos produtos, semelhante ao que fazem as indústrias de alimentos.\nA área de produção de alimentos vem-se desenvolvendo e a cada dia cresce a necessidade de profissionais especializados para atender essa demanda. O engenheiro de alimentos pode não apenas atuar nas mais diversas áreas relativas à cadeia alimentícia: Produção Industrial, Desenvolvimento de Produtos, Otimização de Processos, Industrias de Ingredientes, Embalagens, Equipamentos e instalações industriais, Garantia da Qualidade, Consultoria, Fiscalização, nas áreas Comerciais e de Marketing de produtos alimentícios, como também tornar-se um Empreendedor.',
    'duration': '5 anos',
    'tuition': '3891.00',
    'shift': 'Diurno'
},
{
    'id': 'co-000004',
    'image': 'https://maua.br/img/upload/banner-computacao-1677511213.jpg',
    'name': 'Engenharia de Computação',
    'description': 'Explore o excitante universo da tecnologia com o nosso renomado curso de Engenharia de Computação na Mauá. Aqui, moldamos engenheiros visionários, com uma visão ampla da aplicação de soluções computacionais para enfrentar os desafios da engenharia e da sociedade em geral.\nNossos alunos estão prontos para liderar a transformação digital nos setores industrial, comercial e de serviços. Eles dominam a inteligência artificial, a ciência de dados, a computação em nuvem, redes, segurança cibernética e muito mais. Ao cruzar esses conhecimentos, eles projetam soluções inovadoras que moldam o amanhã, desde a internet das coisas até softwares embarcados em hardwares.\nNo curso de Engenharia de Computação da Mauá, você adquire as habilidades necessárias para se destacar em um cenário tecnológico em constante evolução. Se você está pronto para criar soluções importantes para a sociedade e deixar sua marca no mundo da tecnologia, junte-se a nós nessa emocionante jornada.',
    'duration': '5 years',
    'tuition': '3891.00',
    'shift': 'Diurno'
},
{
    'id': 'co-000005',
    'image': 'https://maua.br/img/upload/banner-engenharia-quimica-1681151606.jpg',
    'name': 'Engenharia Química',
    'description': 'A Engenharia Química desempenha um papel crucial no processamento de matérias-primas, transformando-as em produtos que contribuem para o desenvolvimento e bem-estar da sociedade.\nO Engenheiro Químico assume um papel estratégico ao projetar processos industriais e suas estratégias de otimização e controle, garantindo operações seguras, sustentáveis e em conformidade com as regulamentações ambientais. Ele também é responsável pelo gerenciamento desses processos, visando a alta produtividade e a eficiência. Além disso, destaca-se a atuação do Engenheiro Químico no desenvolvimento de novos processos, produtos e serviços, sendo decisivo em áreas como produção de produtos de higiene, cosméticos, tintas, combustíveis, plásticos, biotecnologia e nanotecnologia.\nAo longo do curso, os alunos são imersos em uma variedade de atividades práticas e fundamentais, com acesso a laboratórios modernos em um campus que proporciona o ambiente propício para o desenvolvimento integral do aluno como engenheiro e cidadão.',
    'duration': '5 anos',
    'tuition': '3891.00',
    'shift': 'Diurno'
}
]