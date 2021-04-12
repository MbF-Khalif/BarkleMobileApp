import { StyleSheet, StatusBar } from 'react-native';
import { config } from "../../../theme/config";

export const styles = StyleSheet.create({
	container:{
        backgroundColor: config.white,
        // paddingBottom: 100
    },
    eventBox:{
        backgroundColor: '#FAF7F7',
        borderRadius: 6,
        paddingTop: 28,
        paddingHorizontal: 27,
        marginBottom: 21,
    },
    leftSpace:{
        paddingLeft: 60
    },
    leftSpaces:{
        paddingLeft: 53,
        paddingBottom: 50
    },
    linkText:{
        bottom: Platform.OS === 'ios' ? -5 : -10 ,
        lineHeight: Platform.OS === 'ios' ? 26 : 38 ,
        fontFamily:config.fontPrimary,
        color: '#F45B56',
        paddingBottom: 0
    },
    borderBottom:{
        borderBottomColor:'#F45B56',
        borderBottomWidth:  1,
        marginBottom: Platform.OS === 'ios' ? -1 : -20,
        marginRight: 'auto'
    },
    bottomSpace:{
        marginBottom: 10
    },
    blkBSpace: {
        paddingBottom: 35
    },
    topSafeArea: {
        backgroundColor: "#F45B56",
    },
    menuColor: {
        backgroundColor: "#202840",
    },  
    text: {
    	color: config.white,
    	fontSize: 20,
        lineHeight: 24,
        fontFamily:config.fontPrimary,
    },
    sucessCard:{
        backgroundColor:'#E0F9FA'
    },
    boldtext: {
        color: config.white,
        fontSize: 28,
        lineHeight: 34,
        fontFamily:config.fontPrimary,
        paddingTop: 38
    },
    titleBlk:{
      flexDirection:'row',
      alignItems:'center',
      paddingBottom: 10,
      width:'100%',
      color: config.white,
    },
    imgBlk: {
        position: 'absolute',
        left: 15,
        bottom: 50,
    },
    normalText:{
        color: config.white,
        fontSize: 16,
        lineHeight: 19,
        fontFamily:config.fontPrimary,
    },
    blackText: {
        color:'#000',
        fontSize:22,
        lineHeight:26,
        fontFamily:config.fontPrimary,
        paddingBottom: 18,
    },
    body:{
        paddingTop: 55,
        paddingLeft:25,
        paddingRight: 25
    },
    blockEvent:{
        flex: 1,
        flexDirection:'row',
        marginBottom: 40,
        flexWrap:'wrap', 
        borderBottomColor:'#e9e9e9',
        borderBottomWidth:0.75,       
    },
    profile:{
        backgroundColor: "#f15b56",
    },
    eventTitle:{
        fontSize:18,
        lineHeight: 20,
        color:'#525252',
        fontFamily:config.fontPrimary,
        paddingBottom: 5
    },
    workTitle:{
        color:'#000000',
        fontSize:16,
        lineHeight: 19,
        fontFamily:config.fontPrimary,
        paddingBottom: 5,
    },
    workDetails:{
        color:'#000000',
        fontSize:12,
        lineHeight: 14,
        fontFamily:config.fontSecondory,
        paddingBottom: 50
    },
    workOuts:{
        flexDirection:'row',
        flexWrap:'wrap',     
    },
    coverBlk:{
        borderRightWidth:20,
        borderRightColor:config.white, 
        width: '50%',

    },
    workOutsBlk:{
        backgroundColor:'#FAF7F7',        
        borderRadius: 9,
        marginBottom: 20,
        padding: 20,
        textAlign: 'center',
        alignItems:'center',
        height: 80,
    },
    workOutsBg:{
        paddingLeft:20,
        paddingBottom: 58,
    },
});