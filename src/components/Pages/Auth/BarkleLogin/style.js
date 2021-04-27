import { StyleSheet, StatusBar } from 'react-native';
import { config } from "../../../../theme/config";

export const styles = StyleSheet.create({
	container:{
    flex: 1,
    // marginTop: StatusBar.currentHeight || 0,
    backgroundColor:'#F45B56',
  },
  formContainer: {
    marginTop: 'auto',
    marginBottom: 'auto',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    position: 'relative'
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
    flexDirection:'row',
    width:'100%',
    alignItems:'baseline',
    color: config.white,
    marginBottom: 40,
    marginLeft: Platform.OS === 'ios' ?'43%' : '30%',
  },
});