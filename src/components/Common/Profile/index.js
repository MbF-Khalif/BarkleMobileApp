import React, { Component } from 'react';
import { View, Text, Image, TouchableOpacity} from 'react-native';
import { Actions } from 'react-native-router-flux';
import PropTypes from 'prop-types';
import H2 from "../Typos/h2";

import { styles } from './style';


class Profile extends Component {

  render() {
  	const {style,back,title,mail,weeks,edit,value,suptitle,profile,challenge,endDate,startDate,onPress} = this.props;	
    return (
    	<View style={[styles.block,styles.bottomSpace,styles.spaceArea]}>
				<View style ={styles.roundBlk}>
					<Image style={{width: 49, height: 42,resizeMode: 'cover' }} source={require('../../../assets/images/default.png')} />
				</View>
	    	<View style={styles.rightCondent}>
		    	{profile && <View>
		    	<Text style={styles.p}>{title}</Text>
		    	<Text style={styles.workTitle}> {suptitle}</Text>
		    	<Text style={styles.workTitle}>Started on {startDate}</Text>
		    	<Text style={styles.workTitle}>Ends on {endDate}</Text>
		    	</View>}
		    	{challenge && <View>
		    	<Text style={styles.p}>{title}</Text>
		    	<Text style={styles.workTitle}>{mail} TEAMS / RIDERS {value}</Text>
		    	<Text style={styles.workTitle}>{startDate} TO {endDate}</Text>
		    	<Text style={styles.workTitle}>{weeks} WEEKS</Text>
                
                </View>}
	 		</View>
	 			{edit && <TouchableOpacity onPress={onPress} style ={styles.editBlock}>
	    			<Image style={{width: 25, height: 25, }} source={require('../../../assets/images/edit.png')} />
	    		</TouchableOpacity>}
			</View>
    );
  }
}


Profile.propTypes = {
    style: PropTypes.any,
    back: PropTypes.any,
    title: PropTypes.string,
    suptitle: PropTypes.string,
    startDate: PropTypes.string,
    endDate: PropTypes.string,
    weeks: PropTypes.string,
    mail: PropTypes.string,
    value: PropTypes.string,
    onPress:PropTypes.any,
    profile:PropTypes.any,
    profile:PropTypes.any,
    challenge:PropTypes.any,
    edit:PropTypes.any,
};


export default Profile;