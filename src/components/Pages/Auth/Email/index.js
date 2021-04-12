import React, { Component } from 'react';
import { View, Text, Image, TouchableOpacity, StatusBar, SafeAreaView, ScrollView,Linking } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Button from "../../../Common/FormElements/Button";
import Header from "../../../Common/Header";  
import P from "../../../Common/Typos/p";
import { Actions } from 'react-native-router-flux';
import { isEmpty } from "lodash";
import { styles } from './style';
 
class Login extends Component {
	constructor(){
		super();
		this.state = {
	    name: "",
	    gender: "",
	    age: "",
	    location: "",
	    userName: "",
	    image: ""
		}
	}   

	componentDidMount(){
	 this.getData();
	}

  async getData() {
    const userData = await AsyncStorage.getItem("userData");
    const age = await AsyncStorage.getItem("age");
    const parsedData = JSON.parse(userData);
    console.log(parsedData,'parsedData')
    this.setState({
    	name: parsedData.name,
    	gender: parsedData.gender,
    	age: JSON.parse(age),
    	location: parsedData.location,
    	userName: parsedData.username,
    	image: parsedData.image_url,
    });
	}

	handleSubmit = () =>{
		Actions.signup();
		// Actions.dashboard();
	}
	onGoing = () =>{
		// Linking.openURL('https://bulldogs.barkle.io/go/reset-password/5VzwIYI6cmTk84Or31St1h4cVcTDMgdqwnmzKSLt77o');
		Actions.changePassword();
	}

	render() {
		const { name, gender, age, location, userName, image } = this.state;
		return (
			<>
				<StatusBar backgroundColor='#F45B56' />
				<SafeAreaView style={styles.container}>
					<ScrollView style={styles.scrollView}>
						<View style={styles.header}>
							<Header/>
						</View>
						<View style={styles.body}>
						<P style={{color:'#525252'}}>You have been sent this email to verify your email address and create a new password for your account.</P>
						<P style={{color:'#525252'}}> Select the link below, or copy it into your browser’s address bar, to verify your email address and create a new password for your Barkle account.</P>
						<TouchableOpacity onPress={this.onGoing}><P style={{color:'#3A60C9'}}> https://bulldogs.barkle.io/go/reset-password/5VzwIYI6cmTk84Or31St1h4cVcTDMgdqwnmzKSLt77o </P></TouchableOpacity>
						<P style={{color:'#525252'}}>The link can only be used once, and within 24 hours or you will have to restart that entire process again.</P>
						<P style={{color:'#525252'}}> If you did not request this email please ignore it. This email was sent from a notification-only email address which cannot accept incoming mail. Please do not reply directly to this message.</P>
						</View>
					</ScrollView>
				</SafeAreaView>
			</>
		);
	}
}

export default Login;