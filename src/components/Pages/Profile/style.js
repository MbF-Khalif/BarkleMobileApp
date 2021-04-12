import { StyleSheet } from 'react-native';
import { config } from "../../../theme/config";

export const styles = StyleSheet.create({
  workTitle:{
    color: config.white,
    fontSize:22,
    fontFamily:config.fontSecondory,
    lineHeight: 24,
    paddingBottom: 3
  },
  container: {
    backgroundColor:'#3E67D6',
  },
  formContainer:{
    paddingBottom: 100
  },
  active:{
    backgroundColor: '#3A60C9',
    position: 'relative',
  },
  activeBox:{
    position: 'absolute',
    bottom: -13,
    left:'60%',
    // transform: [{ translateX: '25%' }],
    borderTopWidth:10,
    borderTopColor: '#3A60C9',
    borderLeftColor: 'transparent',
    borderRightColor: 'transparent',
    borderLeftWidth:10,
    borderRightWidth:10,
  },
  yearText:{
    color: config.white,
    fontSize: 15,
    fontFamily:config.fontSecondory,
    lineHeight: 16,
    paddingBottom: 3
  },
  deactiveTab:{
    backgroundColor:'#3E67D6'
  },
  boldFamily:{
    fontFamily:config.fontPrimary,
  },
  tabBlk:{
    backgroundColor: '#3A60C9',
    borderWidth: 4,
    borderColor: '#3A60C9',
    borderRadius:8,
    width: 112,
    height: 72,
    display: 'flex',
    flexDirection: 'column',
    justifyContent:'center',
    padding: 20,
  },
  topSafeArea:{
    backgroundColor: '#3E67D6'
  },
  tabBox:{
    display:'flex',
    flexDirection: 'row'
  },
 bottomSpace:{
  paddingBottom: 21
 },
  profileName:{
    color: config.white,
    fontSize:11,
    lineHeight: 24,
    textTransform: 'uppercase',
  },
  whitebG:{
    backgroundColor: config.white,
    paddingHorizontal:20,
    paddingTop: 52,
    paddingBottom: 10
  },
  rideDate:{
    fontSize:11,
    lineHeight:15,
    textTransform: 'uppercase',
  },
  listBorder:{
    paddingRight:20,
    borderBottomWidth:0.75,
    borderBottomColor:'#D3D3D3',
    width: '100%',
    marginBottom: 30,
  },
  rideDetail:{
    marginBottom:24,
    paddingRight:24,
    borderRightWidth:0.5,
    borderRightColor:'#D3D3D3',
  },
  leftSpace:{
    paddingLeft: 24
  },
  blueBg:{
    backgroundColor:'#3E67D6',
     paddingHorizontal:20,

  },
	rideTitle:{
    fontSize:16,
    lineHeight: 15,
    fontFamily:config.fontPrimary,
    paddingBottom: 5,
  },
    condentBox:{
        // marginRight: 70,
        // marginLeft:70,
        flex: 0,
        paddingBottom: 50
    },
     leftContent: {
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
        marginBottom: 53,
        paddingBottom: 32,
        paddingTop: 50,
    }, 
    spaceBox:{
      paddingRight: 8,
      paddingBottom:8,
    },
    spaceTabBox:{
      paddingRight: 16,
      paddingBottom:16,
    }, 
    text: {
       fontSize:21,
        lineHeight: 25,
        fontFamily:config.fontPrimary,
        color: config.white,
    },
    newText:{
        fontSize:18,
        lineHeight:22,
    },

     profile:{
        width:'100%',
        display:'flex',
        flexDirection:'row',
        alignItems:'flex-start',
        paddingTop: 30,
    },
    imgBlk: {
        paddingRight: 70,
        paddingTop: 10
    },
     titleBlk:{
      display: 'flex',
      flexDirection:'row',
      alignItems:'center',
      paddingBottom: 5,
      width:'100%',
      color: config.white,
      borderBottomWidth:1,
      borderBottomColor:config.white,
    },
    eventsDetails:{
       paddingBottom:27
    },
    p: {
       fontSize:21,
        lineHeight: 25,
        fontFamily:config.fontPrimary,
        color: config.white,
        paddingBottom: 20,
    },
    textareaBlk: {
    marginBottom: 30
  },
  newTextBox:{
    maxWidth: '100%',
  },
  textareaContainer: {
    height: 184,
    padding: 15,
    backgroundColor: config.white,
    borderRadius: 4
  },
  textarea: {
    textAlignVertical: 'top',  // hack android
    height: 170,
    fontSize: 14,
    color: '#333',
  },
  bottomMar:{
    paddingBottom: 33,
    marginBottom: 35,
  },
  block:{
    display:'flex',
    flexDirection:'row',
    flexWrap:'wrap',
    borderBottomWidth: 0.75,
    borderBottomColor: config.white,
  },
  underline:{
    borderBottomWidth:1,
    borderBottomColor:config.white,
    marginLeft: 'auto',
    justifyContent: 'space-around'
  },
  label:{
        backgroundColor:'transparent',
        fontFamily:config.fontSecondory,
        color:'#FDFDFD',
        lineHeight:18,
        paddingBottom: 10,
        fontSize: 15,
    },

});