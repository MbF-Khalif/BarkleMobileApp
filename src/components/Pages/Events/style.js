import { StyleSheet, StatusBar } from 'react-native';
import { config } from "../../../theme/config";

export const styles = StyleSheet.create({
	container:{
        flex:1,
        // marginTop: StatusBar.currentHeight || 0,      
    },
    topSafeArea: {
        backgroundColor: "#F45B56",
    },
    bodyHidden:{
        // display: 'none',

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
    p: {
       fontSize:21,
        lineHeight: 25,
        fontFamily:config.fontPrimary,
        color: config.white,
        paddingBottom: 20,
    },
    boldtext: {
        color: config.white,
        fontSize: 28,
        lineHeight: 34,
        fontFamily:config.fontPrimary,
        paddingTop: 38
    },
    eventsDetails:{
        paddingHorizontal: 25
    },
    normalText:{
        color: config.white,
        fontSize: 15,
        lineHeight: 18,
        fontFamily:config.fontSecondory,
    },
    normalTexts:{
       fontWeight:'normal', 
       paddingBottom: 40
    },
    normalTextes:{
       color:'#000'
    },
    blackText: {
        color:'#000',
        fontSize:22,
        lineHeight:26,
        fontFamily:config.fontPrimary,
        paddingBottom: 18,
    },
    events:{
        backgroundColor:'#FAF7F7',
        borderRightWidth:20,
        borderRightColor:config.white,
        borderRadius:9, 
        width: '50%',
        marginBottom: 20,
        padding: 20,
        textAlign: 'center',
        paddingTop:32,
        paddingHorizontal: 20,
        paddingBottom:22,
        display: 'flex',
        alignItems:'center'
    },
    body:{
        backgroundColor: config.white,
        paddingTop: 20,
        paddingBottom: 90,
        paddingLeft:25,
        paddingRight: 5,
    },
    blockEvent:{
        flex: 0,
        flexDirection:'row',
        paddingBottom: 20,
        flexWrap:'wrap',        
        height:'100%',
        paddingRight: 20
    },
    bG:{
        backgroundColor: "#f15b56",
        paddingBottom: 20
    },
    eventTitle:{
        fontSize:18,
        lineHeight: 20,
        color:'#525252',
        fontFamily:config.fontPrimary,
        paddingBottom: 5
    },
    eventDate:{
        color:'#525252',
        fontSize:18,
        lineHeight: 22,
        fontFamily:config.fontSecondory,
    },
    workTitle:{
        color:config.white,
        fontSize:16,
        lineHeight: 19,
        fontFamily:config.fontSecondory,
        paddingBottom: 25,
        width:'90%'
    },
    workDetails:{
        color:'#000000',
        fontSize:12,
        lineHeight: 14,
        fontFamily:config.fontSecondory,
        paddingBottom: 50
    },
    workOuts:{
        display:'flex',
        flexDirection:'row',
        flexWrap:'wrap',     
    },
    workOutsBlk:{
        backgroundColor:config.white,
        borderRightWidth:20,
        borderRightColor:'#FAF7F7', 
        width: '50%',
        marginBottom: 20,
        padding: 20,
        textAlign: 'center',
        display: 'flex',
        alignItems:'center',
        height: 80,
    },
    workOutsBg:{
        backgroundColor:'#FAF7F7',
        paddingHorizontal:40,
        paddingBottom: 58,
        paddingTop:40,
    },
    footer:{
        backgroundColor:'#F45B56',
        width:'100%',
        flex: 1,
        flexDirection:'row',
        alignItems: 'center',
        justifyContent:'space-around',
        padding: 20,
        height: 100
    },
    list: {
        display: 'flex',
        flexDirection:'column',
        alignItems: 'center'
    },
    tabs: {
        fontSize: 12,
        lineHeight: 14,
        color:config.white,
        fontFamily:config.fontPrimary,
    },
    tabSec:{
        paddingTop: 33,
        marginBottom: 20,
        flexDirection: 'row',
    },
    tabBlock:{
        backgroundColor:'#FAF7F7',
        borderRadius: 4,
        minWidth:100,
        height: 40,
        textAlign:'center',
        alignItems: 'center',
        paddingHorizontal: 15,
        paddingVertical: 10,
        marginRight: 10,
        flex: 1
    },
    tabtext:{
        fontSize: 16,
        lineHeight: 19,
        color:'#F45B56',
        fontFamily:config.fontPrimary, 
    },
    activeText:{
        color:config.white,
    },
    activeTab: {
        backgroundColor:'#F45B56',
    }
});