import {StyleSheet} from 'react-native'

export const customStyles = StyleSheet.create({
  // Container-Center
    container_center: {
      flex: 1,
      flexDirection: 'column',
      textAlign: 'center',
    },
  //Header_login
    header_login: {
        width: 0,
        height: 0,
        backgroundColor: 'transparent',
        borderStyle: 'solid',
        borderRightWidth: 800,
        borderTopWidth: 120,
        borderLeftColor: 'transparent',
        borderRightColor: 'transparent',
        borderTopColor: '#095DAC',
    },
  //Body 
    body: {
      flex: 1,
      flexDirection: 'row',
      justifyContent: 'space-between',
      padding: 10,  
    },
    body_text: {
      fontSize: 20,
      fontWeight: 'bold',
      marginBottom: 10,
      marginLeft: 15,
    },
    body_background_agendapage:{
      backgroundColor: '#095dac',
      flex: 1
    },
  //Row
    row:{
      flex: 1,
      flexDirection: 'row',
    },
    row_align_center:{
      flex: 1, 
      margin: 10,
    },
    row_two_components: {
      flexDirection: 'row',
      justifyContent: 'space-between',
    },
    row_socials:{
      flex: 1,
      flexDirection: 'row',
      marginTop: 30,
      marginBottom: 'auto',
    },
  //Image Overlays:
  overlay_gray: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(60, 60, 60, 0.2)', 
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    width: '100%',
  },
  //Collumn_Login  
    logo_login: {
      width: 220, 
      height: 100,
      margin: 30, 
    },
    column_login: {
      flex: 1,
      margin: 5,
      justifyContent: 'center',
      textAlign: 'left',
      alignItems: 'center',
    },   
    columntext_login:{
      ///flex: 1,
      justifyContent: 'left',
      textAlign: 'left',
      alignItems: 'left',
      marginRight: 100,
      marginTop: 15,
    },
    title_login:{
      fontSize: 30,
      color: '#095DAC',
      fontWeight: 'bold',
      textAlign: 'left', 
    },
    smalltext_login:{
      fontSize: 14,
      textAlign: 'left', 
    },
    //Input
    icon_login: {
      marginRight: 10,
    },
    input_login: {
      width: '80%',
      flex: 1,
      paddingLeft: 10,
    },
    underscore_login: {
      flexDirection: 'row',
      alignItems: 'center',
      borderBottomWidth: 1,
      borderColor: '#095DAC',
      paddingVertical: 10,
      width: '80%',
    },
    //Button
    button: {
      backgroundColor: '#095DAC',
      color: '#095DAC',
      height: 40,
      width: 100,
      borderRadius: 20,
      marginTop: 20,
    },
    button_text:{
      color: 'white',
      textAlign: 'center',
      marginTop: 'auto',
      marginBottom: 'auto',
      fontSize: 16,
      fontWeight: 'bold',
    },
    button_active:{
      backgroundColor: 'white',
      color: '#095DAC',
      height: 40,
      width: 100,
      borderRadius: 20,
      marginTop: 20,
    },
    button_active_text:{
      color: '#095DAC',
      textAlign: 'center',
      marginTop: 'auto',
      marginBottom: 'auto',
      fontSize: 16,
      fontWeight: 'bold',
    },
    //Topbar button
    topbar:{
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginBottom: 10,
      marginTop: 10,
      marginLeft: 5,
      marginRight: 5,
    },
    //Remember me Checkbox
    checkboxContainer_login: {
      flexDirection: 'row',
      alignItems: 'center',
      marginBottom: 20,
      marginTop: 20,
    },
    checkbox_login: {
      width: 20,
      height: 20,
      borderColor: 'gray',
      borderWidth: 1,
      justifyContent: 'center',
      alignItems: 'center',
      marginRight: 5,
      borderRadius: 5,
    },
    checkboxText_login: {
      fontSize: 16,
    },
    //Forgot Password
    forgotPassword_login: {
      marginLeft: 70,
    },
  //Image header
  header_container: {
    position: 'relative',
    height: 170,
    marginBottom: 10, 
  },
  header_image: {
    width: '97%',
    height: 170,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    resizeMode: 'cover',
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  header_text: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
  },
  //Social media button
  socialmedia_button:{
    backgroundColor: '#095DAC',
    borderRadius: 30,
    width: 50,
    height: 50,
    margin: 5,
  },
  socialmedia_text: {
    color: 'white',
    fontWeight: 'bold',
  },
  socialmedia_icon:{
    marginTop: 'auto',
    marginBottom: 'auto',
    marginLeft: 'auto',
    marginRight: 'auto',
    color: 'white',
  },
  //Settingsbutton
  button_settings: {
    backgroundColor: '#095DAC',
    padding: 10,
    margin: 10,
    borderRadius: 5,
    width: '95%',
    flexDirection: 'row',
    alignItems: 'center',
    display:'flex'
  },
  button_settings_text: {
    color: 'white',
    fontWeight: 'bold',
  },
  button_settings_icon: {
    position: 'absolute',
    right: '5%',
    color: "white",
    fontSize: 25
  },
  //Button grid
  grid_container:{
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 15,
    marginLeft: 15,
    marginRight: 15,
  },
  grid_button:{
    backgroundColor: 'grey',
    width: '30%',
    height: 100,
    borderRadius: 10,
  },
  grid_button_image: {
    resizeMode: 'cover',
    height: 100,
    width: 'auto',
    opacity: 0.8,
    borderRadius: 10
  },
  grid_button_icon:{

  },
  //Message container
  message_container_text: {
    color: 'white',
    textAlign: 'left',
    marginLeft: 15,
    fontSize: 16,
    marginTop: 15,
  },
  message_container_title: {
    color: 'white',
    textAlign: 'left',
    marginLeft: 15,
    marginTop: 15,
    fontWeight: 'bold',
    fontSize: 18,
  },
  message_container: {
    backgroundColor: '#095DAC',
    height: 120,
    width: '97%',
    borderRadius: 10,
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  //Cards
  card: {
    width: "47%",
    backgroundColor: 'lightgrey',
    borderRadius: 10,
    margin: 5,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  card_image: {
    width: '100%',
    height: 120,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    resizeMode: 'cover',
  },
  card_content: {
    padding: 10,
  },
  card_title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  card_message: {
    fontSize: 16,
    marginBottom: 20
  },
  //Activity card
  activity_card: {
    width: "97%",
    backgroundColor: 'lightgrey',
    borderRadius: 10,
    margin: 5,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  //Description card
  description_header_container: {
    position: 'relative',
    height: 170,
    marginBottom: 10, 
  },
  description_header_image: {
    width: '100%',
    height: 170,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    resizeMode: 'cover',
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  description_header_text: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
  },
  description_card_image: {
    width: '100%',
    height: 140,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    resizeMode: 'cover',
  },
  description_card_content: {
    padding: 10,
  },
  description_card_title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  description_card_subtitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  description_card_message: {
    fontSize: 16,
    marginBottom: 10
  },
  //Agenda container
  agenda_container: {
    backgroundColor: '#095dac',
    padding: 40,
    paddingVertical: 10
  },
  agenda: {
    borderRadius: 20,
    padding: 10
  },
  agenda_activity_container:{
    paddingVertical: 20,
    paddingHorizontal: '10%',
    borderRadius: 20,
    backgroundColor: '#fff'
  },
  })