import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View, Text, Image,KeyboardAvoidingView, TouchableOpacity, StatusBar, SafeAreaView, ScrollView } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import validateEmail from "../../../Common/Validations/emailValid";
import NotifyPopup from "../../../Common/GlobalError";
import { forgotPasswordAction } from '../../../../actions/forgotPassword';
import TextInput from '../../../Common/FormElements/TextBox';
import Button from "../../../Common/FormElements/Button";
import { Actions } from 'react-native-router-flux';
import { isEmpty } from "lodash";
import { styles } from './style';
 
class ForgotPassword extends Component {
	constructor(){
		super();
		this.state = {
	    email:'',
	    errors:{},
	    errorMsg:'',
	    errorState: false,
	    loaderStatus:false
		}
	}   


	handleSubmit = () =>{		
		const { email } = this.state;
		if (this.isValid()) {
    const reqObj = {
     email: email
    }
    console.log(reqObj,'reqObj')
    this.props.forgotPasswordAction(reqObj).then(res =>{
    	const userId = JSON.stringify(res.forgotPassword.data.message.id);
    	console.log(userId,'newuserId')
    	Actions.changePassword();
    	AsyncStorage.setItem('userId', userId);
      console.log(res,'res')
    }).catch(err => {
      console.log(err,'error')
				console.log(err.response)
				this.setState({
					errorMsg: err.response.data.message,
					errorState: true,
					loaderStatus:true
				});
					setTimeout(() => {
						this.setState({
						errorState: false,
						loaderStatus:false
						})
					}, 2000)
    });
		}
	}
	isValid() {
	    const { errors, isValid } = validateEmail(this.state);
	    console.log(errors,'errors')
	    if (!isValid) {
	      this.setState({ errors });
	    }
	    return isValid;
	  }
	render() {
		const { email,errors,errorMsg,errorState } = this.state;
		return (
			<View style={styles.bG}>
				<StatusBar backgroundColor='#F45B56' />
				<SafeAreaView style={styles.container}>
					<ScrollView backgroundColor='#F45B56'>
					<View style={{paddTop: 60}}>
					{errorState === true && <NotifyPopup content={errorMsg} />}
					</View>
					<View style={styles.scrollView}>
						<View style={styles.topBox}>
							<Image style={{width: 123, height: 119}} source={require('../../../../assets/images/group.png')}/>
							<View style={styles.rightContent}>
								<Text style={styles.text}>Awoooo!!</Text>
								<Text style={styles.texts}>Enter your email address below, and I’ll have you back into your account in a jiffy.</Text>
							</View>
						</View>
						<KeyboardAvoidingView>
						<View style={{marginLeft: 'auto',marginRight:'auto'}}>
							<TextInput 
								label='Email' 
								name='email'
								value={email}
								keyboardType='default'
								returnType='done'
								error={errors.email}
								onChange={(e)=>this.setState({email:e})} 
							/>
					    <Button
		            onPress={this.handleSubmit}
		            label="Proceed to next step"
		            loader={this.state.loaderStatus}
		          />
						</View>
						</KeyboardAvoidingView>
					</View>
					</ScrollView>
				</SafeAreaView>
			</View>
		);
	}
}

export default connect(null, {forgotPasswordAction})(ForgotPassword);