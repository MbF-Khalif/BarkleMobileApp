import { StyleSheet } from 'react-native';
import { config } from "../../../theme/config";

export const styles = StyleSheet.create({
	container:{
        // flex:1,
        // justifyContent:'center',
        // alignItems: 'center',
        backgroundColor:'#44C0C6',
    },
    menuColor: {
        backgroundColor: "#202840",
    },
   topSafeArea: {
        backgroundColor: "#44C0C6",
    },
    miles:{
      fontFamily:config.fontSecondory,
      position:'absolute',
      left: 145,
    },
    condentBox:{
        paddingHorizontal:20,
        flex: 0,
        paddingBottom: 50
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
        fontFamily:config.fontPrimary,
        color: config.white,
    },
  textareaBlk: {
    marginBottom: 35
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
    alignItems:'center',
    justifyContent:'flex-start'
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