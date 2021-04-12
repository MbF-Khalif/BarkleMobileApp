import { StyleSheet} from 'react-native';
import {config} from '../../../theme/config';

export const styles = StyleSheet.create({
	listBorder:{
        borderTopColor:'#e9e9e9',
        borderTopWidth:0.75,
        width:'100%',
        paddingTop:24,
        paddingBottom:20
    },
    borderBottom:{
        borderBottomColor:'#e9e9e9',
        borderBottomWidth:0.75,
        paddingBottom:10
    },
    block:{
       display: 'flex',
       flexDirection:'row',
       alignItems: 'center'
    },
    eventDate:{
        color:'#525252',
        fontSize:14,
        lineHeight: 18,
        textTransform: 'uppercase',
        fontFamily:config.fontSecondory,
    },
    eventTitle:{
        fontSize:22,
        lineHeight: 26,
        color:'#525252',
        fontFamily:config.fontPrimary,
        paddingBottom: 5
    },
    titleOnly: {
        paddingBottom: 0,
    }
});