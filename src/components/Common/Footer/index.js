import React, { Component } from 'react';
import { View, Text, Image, TouchableOpacity} from 'react-native';
import { Actions } from 'react-native-router-flux';
import PropTypes from 'prop-types';

import { styles } from './style';


class Footer extends Component {

	onDashboard = () => {
		Actions.dashboard();
	}
	onEvents = () => {
		Actions.events();
	}
	onMissions = () => {
		Actions.missions();
	}
	onSettings = () => {
		Actions.barklelogin();
	}
	
  render() {
  	const {style} = this.props;	
    return (
    	<View style={styles.container}>
	      	<View style={[styles.footer,style]}>
		    	<TouchableOpacity onPress={this.onDashboard} style={styles.list}>
		    		<Image style={{width: 18, height: 18,marginBottom:5}} source={require('../../../assets/images/location.png')}/>
		    		<Text style={styles.tabs}>Dashboard</Text>
		    	</TouchableOpacity>
		    	<TouchableOpacity onPress={this.onEvents} style={styles.list}>
		    		<Image style={{width: 12, height: 18,marginBottom:5}} source={require('../../../assets/images/dashboard.png')}/>
		    		<Text style={styles.tabs}>Events</Text>
		    	</TouchableOpacity>
		    	<TouchableOpacity onPress={this.onMissions} style={styles.list}>
		    		<Image style={{width: 14, height: 18,marginBottom:5}} source={require('../../../assets/images/flag2.png')}/>
		    		<Text style={styles.tabs}>Missions</Text>
		    	</TouchableOpacity>
		    	<TouchableOpacity onPress={this.onSettings} style={styles.list}>
		    		<Image style={{width: 16, height: 18,marginBottom:5}} source={require('../../../assets/images/setting.png')}/>
		    		<Text style={styles.tabs}>Settings</Text>
		    	</TouchableOpacity>
		    </View>
		</View>
    );
  }
}


Footer.propTypes = {
    style: PropTypes.any,
};


export default Footer;