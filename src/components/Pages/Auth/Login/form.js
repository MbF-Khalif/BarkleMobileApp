import React, { Component } from 'react';
import { View, TouchableOpacity, Text, Image, SafeAreaView } from 'react-native';
import { connect } from 'react-redux';
// import PushNotification from "react-native-push-notification";
import { Actions } from 'react-native-router-flux';
import AsyncStorage from '@react-native-async-storage/async-storage';
import NotifyPopup from "../../../Common/GlobalError";
import validateLoginScreen from "../../../Common/Validations/logIn";
import Button from "../../../Common/FormElements/Button";
import H1 from "../../../Common/Typos/h1";
import P from "../../../Common/Typos/p";
import TextInput from '../../../Common/FormElements/TextBox';
import { createLoginAction } from '../../../../actions/loginAction';
import { styles } from './style';

class LoginForm extends Component {
	constructor(props) {
		super(props);
		this.state = {
			password:'uwr8hB3w6MwTJM3',
			name:'me@vernondias.com',
			// password:'',
			// name:'',
			errors:{},
			isPasswordVisible: true,
			failure: false,
			errorMsg:'',
			errorState: false
		};
	}
	
	isValid() {
    const { errors, isValid } = validateLoginScreen(this.state);
    console.log(errors,'errors')
    if (!isValid) {
      this.setState({ errors });
    }
    return isValid;
  }

	  
	
	handleSubmit = () =>{
		const { password, name,errors } = this.state;
    if (this.isValid()) {
      this.setState({ errors: {}, loaderStatus: !this.state.loaderStatus });
			const resObj = {
			    "username_or_email": name,
			    "password": password
			}
			this.setState({
				// failure: true
			})
			this.props.createLoginAction(resObj).then(res =>{
				console.log(res,res.loginDetails.data.user_data.workout_counts,'res')
				if(res.loginDetails.status === 200) {
					const sessionId = JSON.stringify(res.loginDetails.data.session_id);
					const workouts = JSON.stringify(res.loginDetails.data.user_data.workout_counts);
					const userId = JSON.stringify(res.loginDetails.data.user_id);
					const username = JSON.stringify(res.loginDetails.data.user_data.username);
					const age = new Date().getFullYear() - new Date(res.loginDetails.data.user_data.birthday).getFullYear();
					console.log(username,'userId')
					AsyncStorage.setItem('sessionId', sessionId);
					AsyncStorage.setItem('workouts', workouts);
					AsyncStorage.setItem('userId', userId);
					AsyncStorage.setItem('age', JSON.stringify(age));
					AsyncStorage.setItem('userData', JSON.stringify(res.loginDetails.data.user_data));
					AsyncStorage.setItem('username', username);
					Actions.success();
				}
			}).catch(err => {
				console.log(err,'error')
				console.log(err.response)
				this.setState({
					errorMsg: err.response.data.message,
					errorState: true,
					loaderStatus:false
				});
					setTimeout(() => {
						this.setState({
						errorState: false,
						loader:false,
						})
					}, 2000)
			});
		}
	}
	onGoing = () => {
		Actions.barklelogin();
	}
	onForgot = () => {
		Actions.retrievePassword();
	}
	
	render() {
		const { errorState,errorMsg, name, password, isPasswordVisible,failure,errors } = this.state;
		console.log(errorMsg,'errorMsg')
		return (
			<View style={styles.formContainer}>
			{errorState === true && <NotifyPopup content={errorMsg} />}
				{failure === true?<View style={styles.topBox}>
					<View style={styles.leftContent}>
					 <Image style={{width: 123, height: 119}} source={require('../../../../assets/images/group.png')}/>
					</View>
					<View style={styles.rightContent}>
						<Text style={styles.text}>Oh no!!</Text>
						<Text style={styles.texts}>We couldn’t find your account. Check your details and retry.</Text>
						<Text style={[styles.texts,styles.boldfont]}>Woof! Woof!</Text>
					</View>
				</View>:
				<View style={styles.titleBlk}>
					<H1 style={{ paddingBottom:10, paddingRight: 5, fontSize: 48, lineHeight: 58}} >barkle</H1>
					<Image style={{width: 87, height: 57,position:'absolute',bottom:25,left:145}} source={require('../../../../assets/images/logo.png')} />
				</View>}
				
				<View style={styles.contentBox}>
				<View style={{width:224}}>
				<P>Let’s sign you up. We’ll start by validating your Peloton details and then proceed to create your Barkle account.</P>
				</View>
					<TextInput 
						label='Peloton LB Name' 
						name='name'
						value={name}
						keyboardType='default'
						returnType='done'
						error={errors.name}
						onChange={(e)=>this.setState({name:e})} 
					/>
					<TextInput 
						label='Peloton password' 
						name='password'
						value={password}
						secureTextEntry={isPasswordVisible}
						error={errors.password}
						visibleIcon
						onChange={(value) => this.setState({password: value})}
						onVisibleChange={() => this.setState({isPasswordVisible: !this.state.isPasswordVisible})} 
					/>
					<TouchableOpacity style={styles.borders} onPress={this.onForgot} ><Text style={styles.link}>Forgot your password?</Text></TouchableOpacity>
					<Button
      			onPress={this.handleSubmit}
            label="Let's go!"
            loader={this.state.loaderStatus}
          />
			  </View>
			  <View style={styles.borderTop}></View>
			  <View style={styles.block}>
          <P style={styles.singleLine}>If you already have a Barkle account then please &nbsp;
          	     <TouchableOpacity onPress={this.onGoing}  style={styles.border} ><Text style={styles.link} >sign in.</Text></TouchableOpacity></P>
          </View>
			</View>
		);
	}
}

export default connect(null, {createLoginAction})(LoginForm);
