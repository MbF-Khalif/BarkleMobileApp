import { StyleSheet, Platform } from 'react-native';
import {config} from '../../../../theme/config';

export const styles = StyleSheet.create({
    buttonRow: {
        flexDirection: 'row',
        borderRadius:30,
    },
    buttonWrapper:{
        marginBottom:20,
        marginTop:5,
    },
    button: {
        textAlign:'center',
        fontFamily:config.fontPrimary,
        color: config.white,
        fontSize:config.fsMedium,
        lineHeight: 22,
        paddingHorizontal: 5,
        borderRadius: 25,
        width: 230,
        height: 47,
        paddingVertical: 12,
        borderWidth: 1,
        borderColor: '#db413c',
        backgroundColor:'#db413c',
        overflow:'hidden'
    },
    loaderButton: {
        backgroundColor:'transparent',
        borderColor: '#db413c',
        textAlign:'center',
        fontFamily:config.fontPrimary,
        color: '#db413c',
    },
    secondaryButton: {
       backgroundColor:'#30ACB2',
       borderColor: '#30ACB2',
    },
    shadowButton: {
        shadowColor: config.buttonColor,
        shadowOffset: {
            width: 0,
            height: 9
        },
        shadowRadius: 10,
        shadowOpacity: 0.3
    },
    smallButton:{
        paddingVertical: 0,
        marginVertical:0,
    },
    noMargin:{
        marginBottom:0,
    },
    noBg:{
        borderBottomColor:'transparent',
        borderBottomWidth:0,
    },
    flatButton:{
        color: config.buttonColor,
        fontSize:config.fsSmall,
        // fontFamily:config.fontPrimary,
        borderWidth:1,
        borderRadius:30,
        borderColor:config.Chenin,
        width:'100%',
        paddingBottom: Platform.OS==='ios'?10:20
    },
    flatText:{
        borderBottomWidth:0,
        marginBottom:0,
        marginTop:20,
        alignItems:'center',
        justifyContent: 'center',
    },
    loader: {
        backgroundColor:'transparent'
    }
});