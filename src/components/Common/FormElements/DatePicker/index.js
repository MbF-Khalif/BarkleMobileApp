import React, { Component } from 'react'
import DatePicker from 'react-native-date-picker'
import { View, StyleSheet, TouchableOpacity, Text,Image } from 'react-native';
import {config} from '../../../../theme/config';
import PropTypes from 'prop-types';

import { styles } from './style';

class Datepicker extends Component {
	constructor() {
        super();
        this.state = { 
            open: false,
        };
    }
	onOpen = () => {
		this.setState({
			open:!this.state.open
		})
	}
  	render () {
        const { dataArray,label,inputText,timepick,onDateChange,currentDate,headLabel,error } = this.props;
        // const [date, setDate] = useState(new Date())
        const {open} = this.state;
        return (
        	<View style={{marginBottom:35}}>
        		<Text style={styles.label}>{headLabel}</Text>
        		<TouchableOpacity onPress={this.onOpen}><Text style={styles.inputText}>{inputText}</Text>
                    {error && <View style={styles.errorFullWidth}>
              <Image style={{width: 27, height: 27}} source={require('../../../../assets/images/error.png')}/>
              <Text style={{color:config.errorColor,paddingLeft:10,width: '90%', fontSize:16,fontFamily: config.fontSecondory}}>{error}</Text>
            </View>}
                </TouchableOpacity>
		        	{open && timepick && <View><DatePicker
				      date={currentDate}
				      onDateChange={onDateChange}
				      mode={'time'}
				    />
                    <Text style={{color: 'white'}}>{error}</Text></View>}
				    {open && !timepick && <View><DatePicker
				      date={currentDate}
				      onDateChange={onDateChange}
				      mode={'date'}
				    /></View>}

			</View>

		)
	}
}

Datepicker.propTypes = {
    timepick: PropTypes.func,
    onDateChange: PropTypes.func,
    currentDate: PropTypes.func,
    headLabel: PropTypes.string,
    inputText: PropTypes.string,
    error: PropTypes.string,
}

export default Datepicker;