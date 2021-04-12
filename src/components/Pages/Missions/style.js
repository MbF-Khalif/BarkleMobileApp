import { StyleSheet, StatusBar } from 'react-native';
import { config } from "../../../theme/config";

export const styles = StyleSheet.create({
    container:{
        flex:1,
        // marginTop: StatusBar.currentHeight || 0,  
        backgroundColor: config.white, 
    },
    rightCondent:{
        width: '100%'
    },
    topSafeArea: {
        backgroundColor: "#44C0C6",
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
    titleBlk:{
      display: 'flex',
      flexDirection:'row',
      alignItems:'center',
      paddingBottom: 10,
      width:'100%',
      color: config.white,
      borderBottomWidth:1,
      borderBottomColor:config.white,
    },
    eventsDetails:{
        paddingHorizontal: 25
    },
    imgBlk: {
        paddingRight: 70,
        paddingLeft: 30,
        paddingTop: 20
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
    bodySpace:{
        paddingRight: 20,
        paddingLeft: 24,
    },
    body:{
        backgroundColor:config.white,
        paddingTop: 20,
        paddingBottom: 90,
        paddingLeft:25,
        paddingRight: 25
    },
    blockEvent:{
        flex: 0,
        flexDirection:'row',
        paddingBottom: 20,
        flexWrap:'wrap',        
    },
    profile:{
        width:'100%',
        display:'flex',
        flexDirection:'row',
        alignItems:'flex-start',
        paddingTop: 30,
    },
    bG:{
        backgroundColor: "#44C0C6",
        marginBottom: 23
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
    menuColor: {
        backgroundColor: "#202840",
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
        backgroundColor:'#44C0C6',
        width:'100%',
        flexDirection:'row',
        alignItems: 'center',
        justifyContent:'space-around',
        padding: 20,
        height: 100
    },
    list: {
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
        color:'#44c0c6',
        fontFamily:config.fontPrimary, 
    },
    activeText:{
        color:config.white,
    },
    activeTab: {
        backgroundColor:'#44c0c6',
    },
    sectionTitle: {
        fontFamily:config.fontPrimary, 
        fontSize: 22,
        lineHeight: 26,
        color: '#000',
        paddingBottom: 20,        
    },
    Textborder:{
        borderBottomColor: '#D3D3D3',
        borderBottomWidth: 0.5,
    },
    sectionText: {
        fontFamily:config.fontPrimary, 
        fontSize: 15,
        lineHeight: 20,
        color: '#44c0c6'
    },
    sectionBorder: {
        borderBottomColor: '#D3D3D3',
        borderBottomWidth: 0.5,
    },
    item: {
        paddingVertical: 28,
        paddingRight: 10,
        borderBottomColor: '#D3D3D3',
        borderBottomWidth: 0.5,
        flexDirection: 'row',
    },
    borderTop:{
        borderTopColor: '#D3D3D3',
        borderTopWidth: 0.5,
    },
    activity:{
        paddingBottom: 32,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    arrowBox:{
        borderColor:'#44C0C6',
        borderWidth:1,
        width: 24,
        height: 24
    },
    textAlign:{
        textAlign: 'right',
        paddingRight: 8
    },
    arrowText:{
        color: '#44C0C6',
        paddingLeft: 8,
        width: 80
    },
    singleLine:{
        flexDirection: 'row',
        alignItems:'center',
        paddingTop: 32

    },
    noborder:{
        borderBottomWidth: 0,
        paddingVertical: 13,
        marginBottom: 15,
    },
  title: {
    fontSize: 18,
    fontFamily:config.fontPrimary,
    lineHeight: 16,
    color: '#44C0C6',
    paddingBottom: 3
  },
  name: {
    fontSize: 11,
    fontFamily:config.fontSecondory,
    lineHeight: 16,
    color: '#525252',
    textTransform:'uppercase',
  },
  speedText: {
    fontSize: 16,
    fontFamily:config.fontPrimary,
    lineHeight: 15,
    color: '#525252',
  },
  smallText: {
    fontSize: 12,
    fontFamily:config.fontPrimary,
    lineHeight: 15,
    color: '#525252',
  },
  textColor:{
    color:'#525252'
  },
  info: {
    fontSize: 18,
    fontFamily:config.fontPrimary,
    lineHeight: 16,
    color: '#525252'
  },
  count: {
    fontSize: 14,
    fontFamily:config.fontPrimary,
    lineHeight: 16,
    color: '#FFFFFF'
  },
  lead: {
    fontSize: 11,
    fontFamily:config.fontSecondory,
    lineHeight: 16,
    color: '#525252',
    textAlign:'right'
  },
  roundBlk:{
    backgroundColor: '#44C0C6',
    borderRadius: 100,
    alignItems: 'center',
    justifyContent: 'center',
    minWidth: 31,
    height: 32,
    marginRight: 10
  },
   roundBlks:{
        alignItems:'center',
        justifyContent:'center',
        backgroundColor:config.white,
        borderRadius:100,
        display: 'flex',
        height: 82,
        marginRight: 20,
        width: 82,
    },
    block:{
       display: 'flex',
       flexDirection:'row',
       alignItems: 'center'
    },
    textBottomspace:{
        marginBottom:29,
    },
    bottomSpace:{
        paddingBottom: 25,
        alignItems:'flex-end'
    },
    spaceArea:{
        paddingHorizontal: 25,
    },
    eventWidth:{
        width: '50%',
    },
    rightCondent:{
        width: '60%'
    },
    editBlock:{
        position: 'absolute',
        top: 0,
        right: 25,
        zIndex: 999
    },
    imgArea: {
        width: 32, 
        height: 32,
        marginRight: 16,
        opacity: 0
    },
});