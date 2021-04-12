import React, { Component } from 'react';
import { View,ScrollView,StatusBar,SafeAreaView} from 'react-native';
import Footer from "../../Common/Footer";
import Form from './Form';
import { styles } from './style';

class CreateEvent extends Component {
	render() {
		return (
			<>
				 <StatusBar backgroundColor='#3E67D6' />
		      <SafeAreaView style={styles.topSafeArea} />
				<ScrollView style={styles.container}>
					<Form />
				</ScrollView>
				<Footer style={{backgroundColor:'#3E67D6'}}/>		
			</>
		);
	}
}

export default CreateEvent;