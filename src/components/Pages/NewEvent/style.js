import { StyleSheet } from 'react-native';
import { config } from "../../../theme/config";

export const styles = StyleSheet.create({
	container:{
        // flex:1,
        // justifyContent:'center',
        // alignItems: 'center',
        paddingTop:20,
        backgroundColor:config.bG,
    },
   
    topSafeArea: {
        backgroundColor: "#F45B56",
    },
    menuColor: {
        backgroundColor: "#202840",
    },
    condentBox:{
        // marginRight: 70,
        // marginLeft:70,
        flex: 0,
        paddingBottom: 50,
        paddingHorizontal:20,

    },
    topSafeArea: {
        backgroundColor: "#F45B56",
    }, 
     leftContent: {
    },
    rightContent: {
        width: '55%',
        paddingLeft:30
    },
    errorFullWidth: {
        bottom: 35,
        position:'relative',
      paddingTop:20,display:'flex',flexDirection:'row', backgroundColor: '#F7C1BF',maxWidth:230,paddingVertical:20,paddingHorizontal:10,alignItems:'center',lineHeight:19,
    },
    topBox: {
        marginHorizontal:10,
        display: 'flex',
        flexDirection:'row',
        alignItems:'flex-end',
        color:config.white,
        borderBottomWidth:1,
        marginBottom: 53,
        paddingBottom: 32,
        paddingTop: 50,
    },   
    text: {
       fontSize:21,
        lineHeight: 25,
        fontFamily:config.fontPrimary,
        color: config.white,
    },
    newText:{
        fontSize:18,
        lineHeight:22,
    },
    eventsDetails:{
        paddingTop: 40,
        paddingRight: 25
    },
    p: {
       fontSize:21,
        lineHeight: 25,
        fontFamily:config.fontPrimary,
        color: config.white,
        paddingBottom: 20,
    },
    workTitle:{
        color:config.white,
        fontSize:16,
        lineHeight: 19,
        fontFamily:config.fontSecondory,
        paddingBottom: 25,
        width:'90%'
    },


    textareaBlk: {
    
    marginBottom: 30
  },
  newTextBox:{
    maxWidth: '100%',
  },
  textareaContainer: {
    height: 184,
    padding: 15,
    backgroundColor: config.white,
    borderRadius: 4
  },
  textarea: {
    textAlignVertical: 'top',  // hack android
    height: 170,
    fontSize: 14,
    color: '#333',
  },
  block:{
    display: 'flex',
    flexDirection: 'row',
    alignItems:'center'
  },
  underline:{
    borderBottomWidth:1,
    borderBottomColor:config.white,
    marginLeft: 'auto',
    justifyContent: 'space-around'
  },
  label:{
        backgroundColor:'transparent',
        fontFamily:config.fontSecondory,
        color:'#FDFDFD',
        lineHeight:18,
        paddingBottom: 10,
        fontSize: 15,
    },

});