import { StyleSheet} from 'react-native';
import {config} from '../../../../theme/config';

export const styles = StyleSheet.create({
    input:{
        marginBottom:35,
    },
    // lastchild:{
    //     marginBottom:10,
    // },
    inputText:{
        borderRadius: 4,
        height: 47,
        padding:0,
        fontSize: 18, 
        lineHeight:20,
        fontFamily:config.fontSecondory,
        color: "black", 
        backgroundColor:'#fff',
        width: '100%',
        maxWidth:240,
        paddingLeft: 10,

    },
    label:{
        backgroundColor:'transparent',
        fontFamily:config.fontSecondory,
        color:'#FDFDFD',
        lineHeight:18,
        paddingBottom: 12,
        fontSize: 15,
    },
});