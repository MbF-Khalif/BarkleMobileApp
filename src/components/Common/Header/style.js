import { StyleSheet} from 'react-native';
import {config} from '../../../theme/config';

export const styles = StyleSheet.create({
  
  profile:{
        width:'100%',
        display:'flex',
        flexDirection:'row',
        alignItems:'flex-start',
        paddingTop:29,
        paddingBottom:50,
        zIndex: 9999
    },
    topColor:{
      backgroundColor: '#202840'
    },
    imgBlk: {
        paddingRight: 70,
        paddingLeft: 25,
        paddingTop: 20
    },
    titleBlk:{
      display: 'flex',
      position:'relative',
      flexDirection:'row',
      alignItems:'center',
      paddingBottom: 10,
      width:'100%',
      color: config.white,
      borderBottomWidth:1,
      borderBottomColor:config.white,
    },
    blockEvent:{
       borderBottomWidth:0,
       paddingTop: 5
    },  
    title:{
      fontSize: 21,
      lineHeight: 25,
      fontFamily:config.fontPrimary,
      color: config.white,
      paddingTop: 20,
    },
    container: {
        // position: 'relative',
        // top: 0,
        // bottom: 0,
        // left: 0,
        // right: 0,
        // zIndex: 9999,
        // width: '100%',
        // flexDirection: 'row',
    },
    menuBody:{
        backgroundColor: '#202840',
    },
    newColor: {
        color: '#FFC1C1',
    },
    head :{
      backgroundColor: '#1C2439',
      height: 88,
      flex: 1,
      flexDirection: 'row',
      justifyContent:'space-around',
      alignItems: 'center',
      paddingLeft: 32,
      paddingRight: 23,
      marginTop: 60,
    },
    menuSec:{
      flex: 1,
      flexDirection: 'row',
      paddingBottom: 50
    },
    iconSec:{
      marginRight: 15,
    },
    bodyMenu:{
      paddingLeft: 32,
      paddingRight: 23,
      paddingTop: 52,
      width: '70%'
    },
});