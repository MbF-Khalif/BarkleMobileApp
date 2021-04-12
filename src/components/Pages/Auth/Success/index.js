import React, { Component } from 'react';
import { View, Text, Image, TouchableOpacity, StatusBar, SafeAreaView, ScrollView } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Button from "../../../Common/FormElements/Button";
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

	render() {
		const { name, gender, age, location, userName, image } = this.state;
		return (
			<>
				<StatusBar backgroundColor='#F45B56' />
				<SafeAreaView style={styles.container}>
					<ScrollView style={styles.scrollView}>
						<View style={styles.topBox}>
							<Image style={{width: 123, height: 119}} source={require('../../../../assets/images/group.png')}/>
							<View style={styles.rightContent}>
								<Text style={styles.text}>Success!</Text>
								<Text style={styles.texts}>Your Barkle account is now conneted to your Peloton account.</Text>
								<Text style={[styles.texts,styles.boldfont]}>Woof! Woof!</Text>
							</View>
						</View>
						<View style={styles.condentBox}>
							<Text style={[styles.text,styles.hed]}>#MadeByFire</Text>
							<View style={{paddingBottom: 20}}>
						 		<Image style={{width: 124, height: 124}} source={require('../../../../assets/images/profile.png')}/>
						  	</View>
						    <Text style={[styles.text,styles.heds]}>Vernon Dias</Text>
						    <Text style={styles.normalTest}>40 / M / London</Text>
						    <Button
					            onPress={this.handleSubmit}
					            label="Proceed to next step"
					            loader={this.state.loaderStatus}
					          />
						</View>
					</ScrollView>
				</SafeAreaView>
			</>
		);
	}
}

export default Login;