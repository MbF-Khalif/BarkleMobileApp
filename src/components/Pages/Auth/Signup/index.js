import React, { Component } from 'react';
import { View,ScrollView} from 'react-native';
import SignupForm from './SignupForm';
// import Logo from '../../../Common/Logo';
import { styles } from './style';

class SignupScreen extends Component {
	render() {
		return (
			<ScrollView style={styles.container}>
				<SignupForm />
			</ScrollView>
		);
	}
}

export default SignupScreen;