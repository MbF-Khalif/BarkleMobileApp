import React, { Component } from 'react';
import { View, Text, Image, TouchableOpacity, StatusBar, SafeAreaView, ScrollView } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { connect } from 'react-redux';
import Button from "../../../Common/FormElements/Button";
import validateReset from '../../../Common/Validations/resetPassword';
import NotifyPopup from "../../../Common/GlobalError";
import P from "../../../Common/Typos/p";
import TextInput from '../../../Common/FormElements/TextBox';
import { changePasswordAction } from '../../../../actions/changePassword';
import { Actions } from 'react-native-router-flux';
import { isEmpty } from "lodash";
import { styles } from './style';
 
class ChangePassword extends Component {
	constructor(){
		super();
		this.state = {
	    isPasswordVisible: true,
	    newUser: "",
	    errorMsg:'',
	    errorState: false,
	    loaderStatus:false,
	    errors:{},
	    newpassword:'',
	    confirmpassword:'',
		}
	}   

	componentDidMount(){
	 this.getData();
	}

  async getData() {
    const newuserId = await AsyncStorage.getItem("userId");
    this.setState({
    	newUser:newuserId
    });
	}
	isValid() {
    const { errors, isValid } = validateReset(this.state);
    console.log(errors,'errors')
    if (!isValid) {
      this.setState({ errors });
    }
    return isValid;
  }

	handleSubmit = () =>{
		const { newpassword,confirmpassword,newUser } = this.state;
		if (this.isValid()) {
    const reqObj = {
     new_password: newpassword,
     confirm_password: confirmpassword,
     user_id:newUser
    }
    console.log(reqObj,'reqObj')
    this.props.changePasswordAction(reqObj).then(res =>{
    	Actions.barklelogin();
    }).catch(err => {
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
					}, 2500)
    });
	}
	}

	render() {
		const { errorMsg, errorState, errors, isPasswordVisible,password,newpassword,confirmpassword } = this.state;
		return (
			<>
				<StatusBar backgroundColor='#F45B56' />
				<SafeAreaView style={styles.container}>
					<View style={{paddTop: 60}}>
					{errorState === true && <NotifyPopup content={errorMsg} />}
					</View>
					<ScrollView style={styles.scrollView}>
						<View style={styles.topBox}>
							<Image style={{width: 123, height: 119}} source={require('../../../../assets/images/group.png')}/>
							<View style={styles.rightContent}>
								<Text style={styles.text}>You are one cute pupper!!</Text>
								<P>Reset your password below and don’t forget to save it in your browser.</P>	
							</View>
						</View>
						<View style={{textAlign:'center',marginLeft:'auto',marginRight:'auto',paddingBottom: 100}}>
							<TextInput 
								label='Enter your new password' 
								name='newpassword'
								value={newpassword}
								secureTextEntry={true}
								error={errors.newpassword}
								onChange={(value) => this.setState({newpassword: value})} />
							<TextInput 
								label='Confirm your new password' 
								name='confirmpassword'
								value={confirmpassword}
								secureTextEntry={true}
								error={errors.confirmpassword}
								onChange={(value) => this.setState({confirmpassword: value})} /> 
							
					    <Button
		            onPress={this.handleSubmit}
		            label="Let’s go"
		            loader={this.state.loaderStatus}
		          />
						</View>
					</ScrollView>
				</SafeAreaView>
			</>
		);
	}
}

export default connect(null, {changePasswordAction})(ChangePassword);