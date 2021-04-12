import { StyleSheet, StatusBar } from 'react-native';
import { config } from "../../../../theme/config";

export const styles = StyleSheet.create({
	container:{
    flex: 1,
    // marginTop: StatusBar.currentHeight || 0,
    backgroundColor: config.bG,
    justifyContent:'center',
  },
  scrollView:{
    paddingVertical:80,
    paddingHorizontal:33,
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
  boldfont:{
   fontFamily:config.fontPrimary,
   paddingBottom:0
  },
  hed: {
    fontSize: 35,
    lineHeight: 42,
    fontFamily:config.fontPrimary,
    paddingBottom: 8
  },
  rightContent: {
    paddingLeft:30,
    width: '60%'
  },
  normalTest:{        
    fontSize: 15,
    lineHeight:18,
    fontFamily:config.fontSecondory,
    paddingBottom: 53,
    color: config.white,
  },
  topBox: {
    flexDirection:'row',
    color:config.white,
    borderBottomWidth:1,
    borderBottomColor:config.white,
    marginBottom: 53,
    paddingBottom: 32
  },
  heds: {
    fontSize:21,
    lineHeight: 25,
    fontFamily:config.fontPrimary,
  
  },
  condentBox: {
    paddingHorizontal:'15%',
    paddingBottom: 150,
    alignItems:'center'
  }
});