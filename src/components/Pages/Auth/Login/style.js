import { StyleSheet, StatusBar } from 'react-native';
import { config } from "../../../../theme/config";

export const styles = StyleSheet.create({
	container:{
    // flex: 1,
    // paddingTop: StatusBar.currentHeight || 0,
    backgroundColor:'#F45B56',
  },
  formContainer: {
    marginTop: 'auto',
    marginBottom: 'auto',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column'
  },
  rightContent: {
    width: '55%',
    paddingLeft:30
  },
  boldfont:{
    fontFamily:config.fontPrimary,
    paddingBottom:0
  },
  topBox: {
    flexDirection:'row',
    alignItems:'flex-end',
    color:config.white,
    borderBottomWidth:1,
    borderBottomColor:config.white,
    marginBottom: 53,
    paddingBottom: 32,
  },   
  text: {
    color: config.white,
    fontSize: 21,
    lineHeight: 25,
    paddingBottom: 10,
    fontFamily:config.fontPrimary,
  },
  texts: {
    color: config.white,
    fontSize: 16,
    lineHeight: 19,
    paddingBottom: 15,
    fontFamily:config.fontSecondory,
  },
  titleBlk:{
    paddingTop: 100,
    flexDirection:'row',
    width:'100%',
    alignItems:'baseline',
    color: config.white,
    borderBottomWidth:1,
    borderBottomColor:config.white,
    marginBottom: 40,
    marginLeft: '43%',
  },
  button: {
    backgroundColor: "#DDDDDD",
    color: "#fff",
  },
  block:{
    width:'55%',
    color: config.white,
    paddingTop: 34,
  },
  link:{
    color: config.white,
    fontFamily:config.fontPrimary,
    lineHeight: Platform.OS === 'ios' ? 0 : 38 ,
    fontSize:16,
    // position: 'absolute',
    bottom: Platform.OS === 'ios' ? 0 : -10 ,
    zIndex: 9,
  },
  border:{
     zIndex: 999,
    borderBottomWidth:1,
    borderBottomColor:config.white,
    marginRight:Platform.OS === 'ios' ? -8 : -10,
    marginLeft:5,
    marginBottom: Platform.OS === 'ios' ? -1 : -20,  
  },
  borders:{
     zIndex: 999,
    borderBottomWidth:1,
    borderBottomColor:config.white,
    marginRight: 'auto',
    marginBottom: 37,  
  },
  borderTop:{
    borderTopWidth:1,
    borderTopColor:config.white,
    width: '100%',
    alignItems:'flex-end',
    marginLeft: '43%',
  },
  contentBox: {
    paddingBottom: 20,
  }
});