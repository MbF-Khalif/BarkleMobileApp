import { StyleSheet} from 'react-native';
import {config} from '../../../theme/config';

export const styles = StyleSheet.create({
	events:{
        backgroundColor:'#FAF7F7',        
        borderRadius:10, 
        marginBottom: 20,
        textAlign: 'center',
        paddingTop:32,
        paddingHorizontal: 20,
        paddingBottom:22,
        alignItems:'center',
        flex: 1,
        height: 'auto',
    },
    cardBlk:{
        borderRightWidth:20,
        borderRightColor:config.white,
        width: '50%',  
        flexDirection:'row'
    },
    eventTitle:{
        fontSize:18,
        lineHeight: 20,
        textAlign: 'center',
        color:'#525252',
        fontFamily:config.fontPrimary,
        paddingBottom: 5
    },
    eventDate:{
        color:'#525252',
        fontSize:11,
        lineHeight: 25,
        textTransform:'uppercase',
        fontFamily:config.fontSecondory,
    },
});