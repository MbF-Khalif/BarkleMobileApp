import React, { Component } from "react";
import { View, Alert,Text,Image } from "react-native";
import PropTypes from "prop-types";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Actions } from "react-native-router-flux";
import { connect } from "react-redux";

import validateSignup from "../../../Common/Validations/signUp";
import { validMobileNumber } from '../../../Common/Validations/rules';
import NotifyPopup from "../../../Common/GlobalError";
import { config } from "../../../../theme/config";
import TextInput from "../../../Common/FormElements/TextBox";
import Button from "../../../Common/FormElements/Button";
import H1 from "../../../Common/Typos/h1";
import { createSignUpAction } from '../../../../actions/signUpAction';

import { styles } from "./style";

class SignUp extends Component {

  constructor(props) {
    super(props);
    this.state = {
      email: "",
      mobile: "",
      password: "",
      loaderStatus: false,
      errors: {},
      loader: false,
      errorState: false,
      errorMsg:'',
      isPasswordVisible:true
    };
  }
  handleSubmit = () => {
    const {errors, email,mobile,password} = this.state;
    if (this.isValid()) {
      const resObj = {
        "email": email,
        "password": password,
        "phone_no": mobile,
        "pelot_username": 'madebyfire',
        "pelot_password": 'uwr8hB3w6MwTJM3',
      }
      this.props.createSignUpAction(resObj).then(res =>{
        Actions.barklelogin();
      }).catch(err => {
        console.log(err,'err')
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
          }, 2500)
        this.props.getErrorStatus();
    });
      this.setState({ errors: {}, loaderStatus: !this.state.loaderStatus });
       
      console.log(errors)
    }
  };
  isValid() {
    const { errors, isValid } = validateSignup(this.state);
    console.log(errors,'errors')
    if (!isValid) {
      this.setState({ errors });
    }
    return isValid;
  }

  render() {
    const {
      email,
      mobile,
      password,
      errors,
      errorState,
      isPasswordVisible,
      errorMsg
    } = this.state;

    return (
      <View style={styles.formContainer}>
        {errorState === true && <NotifyPopup content={errorMsg}  />}
          <View style={styles.topBox}>
            <Image style={{width: 124, height: 119,resizeMode: 'contain'}} source={require('../../../../assets/images/group.png')}/>
            <View style={styles.rightContent}>
              <Text style={styles.text}>Create your Barkle account </Text>
            </View>
          </View>
          <View style={styles.condentBox}>
            <TextInput 
              label='Enter a password' 
              name='password'
              value={password}
              secureTextEntry={isPasswordVisible}
              error={errors.password}
              visibleIcon
              onChange={(value) => this.setState({password: value})}
              onVisibleChange={() => this.setState({isPasswordVisible: !this.state.isPasswordVisible})} 
              isPasswordVisible
            />
            <TextInput
              label="What's your email address?"
              name="email"
              value={email}
              error={errors.email}
              returnType="done"
              onChange={(value) => this.setState({ email: value })}
            />
            <TextInput
              label="And, your mobile number?"
              name="mobile"
              value={mobile}
              error={errors.mobile}
              keyboardType="phone-pad"
              returnType="done"
              maxLength={10}
              onChange={(value) => this.setState({ mobile: validMobileNumber(value) })}
            />
            <Button
              onPress={this.handleSubmit}
              uppercase
              width="100%"
              label="Proceed to next step"
              loader={this.state.loaderStatus}
            />
          </View>
        </View>
    );
  }
}

function mapStateToProps(state) {
  console.log(state)
    return {
        state:state,
    }
}

export default connect(mapStateToProps, {createSignUpAction})(SignUp);
