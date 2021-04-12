import React, { Component } from 'react';
import { SafeAreaView, View, StatusBar,ScrollView } from 'react-native';
import LoginForm from './form';
import { styles } from './style';
 
class BarkleLogin extends Component {
	
	render() {
		return (
			<>
				<StatusBar backgroundColor='#F45B56' />
				<SafeAreaView style={styles.container}>
					<LoginForm />
				</SafeAreaView>
			</>
		);
	}
}

export default BarkleLogin;