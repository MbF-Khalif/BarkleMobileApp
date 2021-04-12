import { StyleSheet} from 'react-native';
import {config} from '../../../theme/config';

export const styles = StyleSheet.create({
	roundBlk:{
        alignItems:'center',
        justifyContent:'center',
        backgroundColor:config.white,
        borderRadius:100,
        display: 'flex',
        height: 82,
        marginRight: 20,
        width: 82,
    },
    imgArea: {
        width: 32, 
        height: 32,
        marginRight: 16,
    },
     block:{
       display: 'flex',
       flexDirection:'row',
       alignItems: 'center',
    },
    p: {
        fontSize:21,
        lineHeight: 25,
        fontFamily:config.fontPrimary,
        color: config.white,
        paddingBottom: 5,  
    },
    workTitle:{
        color:config.white,
        fontSize:16,
        lineHeight: 19,
        fontFamily:config.fontSecondory,
    },
    editBlock:{
        position: 'absolute',
        top: 0,
        right: 25,
        zIndex: 999
    },
    bottomSpace:{
        paddingBottom: 25,
        alignItems:'flex-end',
        paddingLeft: 25
    },
    rightCondent: {
        width: '65%',
        paddingRight: 20,
    }
});