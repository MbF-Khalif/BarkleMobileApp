import React, { Component } from 'react';
import { SafeAreaView, View, StatusBar,ScrollView } from 'react-native';
import LoginForm from './form';
import { styles } from './style';
 
class Login extends Component {
	
	render() {
		return (
			<>
				<StatusBar backgroundColor='#F45B56' />
				<SafeAreaView style={styles.container}/>
				<ScrollView backgroundColor='#F45B56'>
						<LoginForm />
				</ScrollView>
			</>
		);
	}
}

export default Login;