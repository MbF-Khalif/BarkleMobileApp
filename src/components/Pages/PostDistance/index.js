import React, { Component } from 'react';
import { View,ScrollView} from 'react-native';
import Form from './Form';
// import Logo from '../../../Common/Logo';
import { styles } from './style';

class Postdistance extends Component {
	render() {
		return (
			<ScrollView showsVerticalScrollIndicator={false} style={styles.container}>
				<Form />
			</ScrollView>
		);
	}
}

export default Postdistance;