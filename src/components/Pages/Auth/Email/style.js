import { StyleSheet, StatusBar } from 'react-native';
import { config } from "../../../../theme/config";

export const styles = StyleSheet.create({
	container:{
    flex: 1,
    justifyContent:'center',
    backgroundColor: config.bG,
  },
  header:{
    paddingLeft:130,
    backgroundColor: config.bG,
    marginBottom: 36
  },
  scrollView:{
    backgroundColor: config.white,
  },
  body:{
    paddingHorizontal:23
  }
});