import { StyleSheet } from 'react-native';
import {config} from '../../../theme/config';

export const styles = StyleSheet.create({
    title: {
        backgroundColor:'transparent',
        color: config.white,
        fontSize: config.fsXXL,
        fontFamily: config.fontPrimary,
        lineHeight: 58,
        paddingBottom: 0,
    },
    titleBorder:{
        backgroundColor:config.white,
        marginTop:5,
        height:1,
        width:'100%',
        color: config.white,
    },
    topBorder:{
        backgroundColor:config.linkColor,
        marginVertical:5,
        height:3,
        width:25,
    },
    titleTwo: {
        backgroundColor:'transparent',
        color: config.white,
        fontSize: config.fsXL,
        fontFamily: config.fontPrimary,
        lineHeight: 30,
        paddingBottom: 0,
    },
    titleThree: {
        backgroundColor:'transparent',
        fontSize:20,
        lineHeight: 24,
        fontFamily:config.fontPrimary,
        color: config.white,
        paddingBottom: 0,
    },
    titleFour: {
        backgroundColor:'transparent',
        fontSize:22,
        lineHeight: 26,
        fontFamily:config.fontPrimary,
        color:"#f45b56",
        paddingBottom: 20,
    },
    paragraph: {
        color: config.white,
        fontFamily:config.fontSecondory,
        fontSize:16,
        lineHeight:20,
        paddingBottom:27,
    },
    grayText:{
        fontSize:11,
        // fontFamily:config.latoBold,
        color:config.grayColor,
        flexWrap: 'wrap',
    },
    boldText:{
        // fontFamily:config.fontPrimary,
        fontSize:16,
        flexWrap: 'wrap',
        color: config.shadow
        // fontWeight: Platform.OS === 'ios'?'600':'900',
    },
    border:{
        color:config.white,
        borderBottomWidth:1,
        borderBottomColor:config.Chenin,
    }
});