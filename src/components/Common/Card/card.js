import React, { Component } from 'react';
import { View, Text, Image, TouchableOpacity} from 'react-native';
import { Actions } from 'react-native-router-flux';
import PropTypes from 'prop-types';

import { styles } from './style';


class Card extends Component {

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
		// Actions.events();
	}
	
  render() {
  	const {style,headlabel,label,pickerImage,onPress,time} = this.props;	
    return (
    	<View style={styles.cardBlk}>
	    	<TouchableOpacity onPress={onPress} style={[styles.events,style]}>
	    		{pickerImage && <Image style={{width: 35, height: 30,marginBottom: 11}} source={pickerImage}/>}
	    		<Text style={styles.eventTitle}>{headlabel} </Text>
	    		<View style={{display: 'flex',flexDirection:'row'}}>
		    		<Text style={styles.eventDate}>{label}</Text>
		    		<Text style={styles.eventDate}> / {time}</Text>
		    	</View>
	        </TouchableOpacity>
	    </View>
    );
  }
}


Card.propTypes = {
    style: PropTypes.any,
    pickerImage: PropTypes.any,
    headlabel: PropTypes.string,
    label: PropTypes.string,
    time: PropTypes.string,
    onPress:PropTypes.any,
};


export default Card;