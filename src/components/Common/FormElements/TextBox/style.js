import { StyleSheet} from 'react-native';
import {config} from '../../../../theme/config';

export const styles = StyleSheet.create({
    input:{
        marginBottom:35,
    },
    inputText:{
        borderRadius: 4,
        height: 47,
        padding:Platform.OS === 'ios' ? 15 : 0,
        fontSize: 18, 
        lineHeight:20,
        fontFamily:config.fontSecondory,
        color: "black", 
        backgroundColor:'#fff',
        width: '100%',
        maxWidth:230,
        paddingLeft: 10,

    },
    lastchild:{
        marginBottom:0,
    },
    label:{
        backgroundColor:'transparent',
        fontFamily:config.fontSecondory,
        color:'#FDFDFD',
        lineHeight:18,
        paddingBottom: 12,
        fontSize: 15,
    },
    errorFullWidth: {
      paddingTop:20,display:'flex',flexDirection:'row', backgroundColor: '#F7C1BF',maxWidth:230,paddingVertical:20,paddingHorizontal:10,alignItems:'center',lineHeight:19,
    },
    fullWidth: {
      width: '100%',
      maxWidth: '100%',
    },
});