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
    flexDirection: 'column',
  },
  formContainers: {
    width: 224,
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
    paddingTop: 20
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
    flexDirection:'row',
    width:224,
    // width:'100%',
    alignItems:'center',
    // color: config.white,
    // marginLeft: Platform.OS === 'ios' ?'43%' : '30%',
  },
  button: {
    backgroundColor: "#DDDDDD",
    color: "#fff",
  },
  block:{
    width:224,
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
   position: 'relative',
  },
  borderTops:{
    borderTopWidth:1,
    borderTopColor:config.white,
    position: 'absolute',
    left: 0,
    right: -100,
  },
  
  contentBox: {
    paddingBottom: 20,
  }
});