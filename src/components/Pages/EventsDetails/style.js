import { StyleSheet, StatusBar } from 'react-native';
import { config } from "../../../theme/config";

export const styles = StyleSheet.create({
	container:{
        flex:1,
    },
    topSafeArea: {
        backgroundColor: "#F45B56",
    }, 
    active: {
        color: "#DB413C"
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
    activeColor:{
        backgroundColor: config.white,
        height: 48,
    },
    eventWidth:{
        paddingHorizontal: 25,
        width: '50%',
        justifyContent: 'center'
    },
    goingEvent:{
        backgroundColor:'#F45B56',
        borderWidth: 2,
        borderRadius: 6,
        borderColor: config.white,
        height: 48,
        marginBottom:39,
        // justifyContent: 'space-around',
        width: 279,
        marginLeft: 25,
    },
    rightCondent:{
        width: '60%'
    },
    borderRight:{
        borderRightWidth:2,
        height: '100%',
        borderRightColor:config.white,
    },
    leftSpace:{
        paddingLeft: 50
    },
    textBorder:{
        borderBottomWidth:1,
        borderBottomColor:config.white,
        paddingBottom:0,
        marginRight: 'auto',
        marginBottom: 60,
    },
    profileTitle:{
        fontSize:11,
        lineHeight: 15,
        textTransform:'uppercase',
        fontFamily:config.fontSecondory,
        color: '#525252',
        paddingBottom: 3, 
    },
    border:{
        borderTopWidth:1,
        borderTopColor:config.white,
        marginHorizontal:25,
        paddingVertical: 30,
        justifyContent:'space-around'
    },
    profileName:{
        color:'#F45B56',
        paddingBottom: 36
    },
    tabicon:{
        color: config.white,
        fontSize: 12,
        lineHeight: 14,
        textTransform:'uppercase',
        fontFamily:config.fontPrimary,
    },
    activeTabText:{
        color: '#F45B56',
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
    boldColor:{
        color:'#525252'
    },
    bottomArea:{
        paddingBottom: 15
    },
    boldtext: {
        color: config.white,
        fontSize: 28,
        lineHeight: 34,
        fontFamily:config.fontPrimary,
        paddingTop: 38
    },
     textareaContainer: {
    height: 184,
    padding: 15,
    backgroundColor: '#DB413C',
    borderRadius: 4,
    marginBottom:20,
  },
  rideTitle:{
    color: '#525252',
    fontSize: 18,
    lineHeight: 24,
    fontFamily:config.fontPrimary,
  },
  rideDate:{
    color: '#525252',
    fontSize: 14,
    lineHeight: 28,
    fontFamily:config.fontSecondory,
    paddingBottom: 30,
  },
  textarea: {
    textAlignVertical: 'top',  // hack android
    height: 170,
    fontSize: 14,
    color: config.white,
  },
  spaceArea:{
    paddingHorizontal: 25,
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
    body:{
        backgroundColor: config.white,
        paddingBottom: 40,
        paddingHorizontal: 25
    },
    blockEvent:{
        flex: 1,
        flexDirection:'row',
        flexWrap:'wrap',        
    },
    eventTitle:{
        fontSize:20,
        lineHeight: 20,
        color:'#525252',
        fontFamily:config.fontPrimary,
        paddingBottom: 5
    },
    spaceBlk:{
        paddingTop: 20
    },
    eventDate:{
        color:'#525252',
        fontSize:11,
        lineHeight: 15,
        textTransform: 'uppercase',
        fontFamily:config.fontSecondory,
    },    
    borders: {
        borderBottomColor:'#D3D3D3',
        borderBottomWidth:0.5,
        borderTopColor:'#D3D3D3',
        borderTopWidth:0.5,
        paddingBottom: 30,
        paddingTop: 30
    },
    workTitle:{
        color:config.white,
        fontSize:16,
        lineHeight: 19,
        fontFamily:config.fontSecondory,
        width:'90%'
    },
    bottomSpace:{
        paddingBottom: 25,
        alignItems:'flex-end'
    },
    editBlock:{
        position: 'absolute',
        top: 0,
        right: 25,
        zIndex: 999
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
        marginBottom: 32,
        display: 'flex',
        flexDirection: 'row'
    },
    tabBlock:{
        backgroundColor:'#FAF7F7',
        borderRadius: 24,
        width:'50%',
        height: 40,
        textAlign:'center',
        flex: 1,
        alignItems: 'center',
        paddingHorizontal: 5,
        paddingVertical: 12,
        marginRight: 20
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
    },
    listBorder:{
        borderTopColor:'#D3D3D3',
        borderTopWidth:0.5,
        width:'100%',
        paddingTop:22,
        paddingBottom:14
    },
    listRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingVertical: 20,
        borderBottomWidth: 1,
        borderColor: '#d3d3d3'
    },
    listIndex: {
        backgroundColor: '#f45b56',
        width: 30,
        height: 30,
        borderRadius: 25,
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 15
    },
    listIndexText: {
        color: '#fff',
        fontSize: 16,
        fontFamily: config.fontPrimary,
        lineHeight: 30,
    },
    listPelName: {
        color: '#525252',
        fontSize: 16,
        fontFamily: config.fontPrimary,
    },
    listName: {
        color: '#525252',
        fontSize: 14,
        fontFamily: config.fontSecondory,
    },
    listRank: {
        color: '#525252',
        fontSize: 18,
        fontFamily: config.fontPrimary,
    },
    borderBottom: {
        borderBottomWidth: 1,
        borderColor: '#d3d3d3',
        paddingBottom: 5
    }
});