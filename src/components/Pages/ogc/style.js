import { StyleSheet, StatusBar } from 'react-native';
import { config } from "../../../theme/config";

export const styles = StyleSheet.create({
    centerBlk:{
        flex: 1,
        alignItems:'center',
        paddingHorizontal: 32
    },
    normalText: {
        color: config.white,
        fontSize: 20,
        lineHeight: 24,
        fontFamily:config.fontSecondory,
    },
    input:{
        backgroundColor: '#E54D49',
        borderRadius: 6,
        color: config.white,
        fontFamily:config.fontPrimary,
        paddingHorizontal: 10,
        paddingVertical: 5,
        textAlign: 'center',
        fontSize: 40,
        width: 112,
        height: 56,
        paddingBottom: 0,
        marginBottom: 0,
        lineHeight:0,

    },
    container:{
        flex:1,
        // marginTop: StatusBar.currentHeight || 0,  
        backgroundColor: "#F45B56", 
    },
    rightCondent:{
        width: '100%'
    },
    topSafeArea: {
        backgroundColor: "#F45B56",
    },
    borderText:{
        borderBottomColor: config.white,
        borderBottomWidth: 1,
    },
    borderTop:{
        borderTopColor: config.white,
        borderTopWidth: 0.5,
    },
    linkText: {
        color: config.white,
        fontSize: 20,
        lineHeight: 24,
        fontFamily:config.fontSecondory,
    },
    largeFont:{
        color: config.white,
        fontSize: 48,
        lineHeight: 64,
        fontFamily:config.fontPrimary,
        textAlign: 'center',
    },
    menuColor: {
        backgroundColor: "#202840",
    },
    textPlace:{
        paddingBottom: 0,
        paddingHorizontal: 5,
        lineHeight: 64,
        marginTop: 0,
        marginBottom:0,
        paddingBottom: 0,
    },
    spaceBar: {
        paddingTop: 50
    },
    spaceTag:{
        lineHeight: 50
    }
});