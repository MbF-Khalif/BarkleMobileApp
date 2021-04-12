import { StyleSheet} from 'react-native';
import {config} from '../../../theme/config';

export const styles = StyleSheet.create({
	footer:{
	    backgroundColor:'#F45B56',
	    width:'100%',
	    flex: 1,
	    flexDirection:'row',
	    alignItems: 'center',
	    justifyContent:'space-around',
	    padding: 20,
	    height: 74
	},
	container:{
		position:'absolute',
		bottom: 0,
		width: '100%', 
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
});