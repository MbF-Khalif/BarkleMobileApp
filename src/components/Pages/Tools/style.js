import { StyleSheet, StatusBar } from 'react-native';
import { config } from "../../../theme/config";

export const styles = StyleSheet.create({
  menuColor: {
    backgroundColor: "#202840",
  },
  topSafeArea: {
	  backgroundColor: "#F45B56",
	},
	workTitle:{
	  color:config.white,
	  fontSize:16,
	  lineHeight: 19,
	  fontFamily:config.fontSecondory,
	  paddingBottom: 25,
	  width:'90%'
	},
	p: {
	  fontSize:21,
	  lineHeight: 25,
	  fontFamily:config.fontPrimary,
	  color: config.white,
	  paddingBottom: 20,
	},
	eventsDetails:{
	  paddingHorizontal: 25
	},
	bG:{
	  backgroundColor: "#f15b56",
	  paddingBottom: 20
	},
	body:{
	  backgroundColor: config.white,
	  paddingTop: 20,
	  paddingBottom: 90,
	  paddingHorizontal: 25
	},
});