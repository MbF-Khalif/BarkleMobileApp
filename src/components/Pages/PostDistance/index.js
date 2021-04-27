import React, { Component } from 'react';
import { View,ScrollView,StatusBar,SafeAreaView} from 'react-native';
import Form from './Form';
// import Logo from '../../../Common/Logo';
import { styles } from './style';

class Postdistance extends Component {
	render() {
		return (
			<ScrollView scrollEnabled={true} showsVerticalScrollIndicator={false} style={styles.container}>
			<StatusBar backgroundColor='#44C0C6' />
				<SafeAreaView style={styles.topSafeArea} />
				<Form />
			</ScrollView>
		);
	}
}

export default Postdistance;