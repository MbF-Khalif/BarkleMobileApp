import { StyleSheet } from 'react-native';
import { config } from "../../../../theme/config";

export const styles = StyleSheet.create({
	container:{
        paddingHorizontal:20,
        paddingBottom:90,
        backgroundColor:config.bG,
    },
    formContainer: {
        paddingBottom:60,
    },
    condentBox:{
       marginLeft: 'auto',
       marginRight: 'auto',
       paddingBottom: 50
    },
    rightContent: {
        width: '55%',
        paddingLeft:30
    },
    topBox: {
        marginHorizontal:10,
        display: 'flex',
        flexDirection:'row',
        alignItems:'flex-end',
        color:config.white,
        borderBottomWidth:1,
        borderBottomColor:config.white,
        marginBottom: 53,
        paddingBottom: 32,
        paddingTop: 70,
    },   
    text: {
       fontSize:21,
        lineHeight: 25,
        fontFamily:config.fontPrimary,
        color: config.white,
    },
});