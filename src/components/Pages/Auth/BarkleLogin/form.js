import React, { Component } from 'react';
import { View, TouchableOpacity, Text, Image, SafeAreaView } from 'react-native';
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';
import AsyncStorage from '@react-native-async-storage/async-storage';
import NotifyPopup from "../../../Common/GlobalError";
import validateLoginScreen from "../../../Common/Validations/barkalelogIn";
import Button from "../../../Common/FormElements/Button";
import H1 from "../../../Common/Typos/h1";
import TextInput from '../../../Common/FormElements/TextBox';
import { createBarkleLoginAction } from '../../../../actions/barkleLoginAction';
import { styles } from './style';

class LoginForm extends Component {
	constructor(props) {
		super(props);
		this.state = {
			// password:'uwr8hB3w6MwTJM3',
			// name:'me@vernondias.com',
			// password:'sami@1234',
			// email:'sami@madebyfire.com',
			password:'Sannan@123',
			email:'sannan@madebyfire.com',
			errors:{},
			isPasswordVisible: true,
			failure: false,
			errorState: false,
			errormsg:'',
			loaderStatus: false
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
		const { password, email,errors,loaderStatus } = this.state;
    if (this.isValid()) {
	      this.setState({ errors: {}, loaderStatus: true });
	      console.log('loaderStatus',loaderStatus)
			const resObj = {
			    "email": email,
			    "password": password
			}
			 setTimeout(() => {
          this.setState({
          loaderStatus: false,
          })
        }, 2000)
			this.props.createBarkleLoginAction(resObj).then(res =>{
				console.log(res,res.barkleLoginDetails.data.access_token,'res')
				AsyncStorage.setItem('bearertoken', res.barkleLoginDetails.data.access_token);
				AsyncStorage.setItem('barkleUserID', JSON.stringify(res.barkleLoginDetails.data.user.id));
				console.log(res.barkleLoginDetails.data.user.id,'barkleUserID')
				Actions.dashboard();
				 setTimeout(() => {
          this.setState({
          loaderStatus: false,
          })
        }, 2000)
			}).catch(err => {
				console.log(err,'data.error')
				console.log(err.response,'err.response');
				this.setState({
					errorState: true,
					errormsg: 'err.response.data.error',
					loaderStatus: false,
				})
				 setTimeout(() => {
          this.setState({
          errorState: false,
          loaderStatus: false,
          })
        }, 2000)
				console.log(err.response)
			});
		}
	}
	
	render() {
		const { email, password, isPasswordVisible,failure,errors,errorState,errormsg,loaderStatus } = this.state;
		return (
			<>
			<View>
				{errorState === true && <NotifyPopup content={errormsg} cancel />}
			</View>
			<View style={styles.formContainer}>
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
					<Image style={{width: 87, height: 57}} source={require('../../../../assets/images/logo.png')} />
				</View>}
				<View style={styles.contentBox}>
					<TextInput 
						label='Email' 
						name='email'
						value={email}
						keyboardType='default'
						returnType='done'
						error={errors.email}
						onChange={(e)=>this.setState({email:e})} 
					/>
					<TextInput 
						label='Password' 
						name='password'
						value={password}
						secureTextEntry={isPasswordVisible}
						error={errors.password}
						visibleIcon
						onChange={(value) => this.setState({password: value})}
						onVisibleChange={() => this.setState({isPasswordVisible: !this.state.isPasswordVisible})} 
					/>					
					<Button
      			onPress={this.handleSubmit}
            label="Let's go!"
            loader={loaderStatus}
          />
			  </View>
			</View>
			</>
		);
	}
}

export default connect(null, {createBarkleLoginAction})(LoginForm);
