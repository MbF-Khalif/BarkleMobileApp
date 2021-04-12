import { StyleSheet } from 'react-native';
import {config} from '../../../../theme/config';

export const styles = StyleSheet.create({
      dateInput:{
      	borderColor:'transparent',
      },
      label:{
        backgroundColor:'transparent',
        fontFamily:config.fontSecondory,
        color:'#FDFDFD',
        lineHeight:18,
        paddingBottom: 12,
        fontSize: 15,
    },
      dateIcon:{
      	width:10,
      	height:10,
      },
      datePicker:{
            position: 'absolute',
            width: 200,
      },
      tranLabel:{
            position:'absolute',
            backgroundColor:'transparent',
            color:config.grayColor,
            fontFamily: config.fontPrimary,
            lineHeight:config.fsRegular,
      },
      inputText:{
        borderRadius: 4,
        height: 47,
        paddingVertical: 13,
        fontSize: 18, 
        lineHeight:22,
        fontFamily:config.fontSecondory,
        color: "black", 
        backgroundColor:'#fff',
        width: '100%',
        maxWidth:230,
        paddingLeft: 10,
    },
    errorFullWidth: {
      paddingTop:20,display:'flex',flexDirection:'row', backgroundColor: '#F7C1BF',maxWidth:230,paddingVertical:20,paddingHorizontal:10,alignItems:'center',lineHeight:19,
    },
});