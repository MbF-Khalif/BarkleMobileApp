import React, { Component } from "react";
import { View, Alert,Text,Image,TouchableOpacity,ScrollView,StatusBar,SafeAreaView } from "react-native";
import PropTypes from "prop-types";
import moment from 'moment';
import AsyncStorage from "@react-native-async-storage/async-storage";
import ImagePicker from 'react-native-image-crop-picker';
import { Actions } from "react-native-router-flux";
import { connect } from "react-redux";
import Textarea from 'react-native-textarea';

import validateCreateMissions from "../../Common/Validations/createMissions";
import NotifyPopup from "../../Common/GlobalError";  
import Header from "../../Common/Header";
import TextInput from "../../Common/FormElements/TextBox";
import CheckBox from "../../Common/FormElements/Checkbox";
import DatePicker from "../../Common/FormElements/DatePicker";
import { validMobileNumber } from '../../Common/Validations/rules';
import Button from "../../Common/FormElements/Button";
import H1 from "../../Common/Typos/h1";
import H2 from "../../Common/Typos/h2";

import { createMissionsAction } from '../../../actions/createMissions';
import { config } from "../../../theme/config";

import { styles } from "./style";

class Form extends Component {

  constructor(props) {
    super(props);
    this.state = {
      endDate: "",
      currentDate: new Date(),
      eventdate: "",
      name: "",
      password: "",
      badge:'',
      event: "",
      loaderStatus: false,
      errors: {},
      loader: false,
      errorState:false,
      errorMsg:'',
      isPasswordVisible:true,
      bodyScroll:true,
      path:'',
      imageSource:{},
      uploaded: false,
      bearerAccess: '',
      userId: '',
      missionValue:'',
      missionDetails:''

    };
  }
  componentDidMount() {
    this.getData();
  }
  async getData() {
    const tocken = await AsyncStorage.getItem("bearertoken");
    const userId = await AsyncStorage.getItem("barkleUserID");
    console.log(userId,'userId')
    this.setState({
      bearerAccess: tocken,
      userId: userId
    })
  }
  handleSubmit = () => {
    const {errors,userId,bearerAccess,badge,missionValue,missionDetails,name} = this.state;
    const headers = {
      Authorization: "Bearer " + bearerAccess,
      'Content-Type': 'multipart/form-data;'
    };
    console.log(headers,'headers')
    console.log(errors)
    const reqObj = {
      "mission_name": name,
      "mission_startdate": '2021-03-10',
      "mission_enddate": '2021-03-30',
      "mission_details": missionDetails,
      "mission_value": missionValue,
      "mission_type_val": 'miles',
      "mission_type": "individual",
      "mission_icon": badge,
      "user_id": userId,
    }
    this.props.createMissionsAction(reqObj,headers).then(res =>{
      console.log(res,'res')
    }).catch(err => {
      console.log(err.response,err,'error')
    });
    if (this.isValid()) {
      this.setState({ errors: {}, loaderStatus: !this.state.loaderStatus });
        // Actions.dashboard();
      console.log(errors)
    }
  };
  isValid() {
    const { errors, isValid } = validateCreateMissions(this.state);
    console.log(errors,'errors')
    if (!isValid) {
      this.setState({ errors });
    }
    return isValid;
  }
  uploadImage =()=>{
       ImagePicker.openPicker({
      width: 300,
      height: 400,
      cropping: true
    }).then(image => {
       const img = image.filename;
        this.setState({
          badge:img,
          uploaded: true
        })
    });

  }
  onDateChange = (date) => {
    const pickDate = moment(date).format('DD/M/YYYY');
    this.setState({ eventdate: pickDate,currentDate: date});
  }
  onEndDateChange = (date) => {
    const pickDate = moment(date).format('DD/M/YYYY');
    this.setState({ endDate: pickDate,currentDate: date});
  }
  onBack = () => {
    Actions.missions();
  }
  onChangeText = (value) => {
    this.setState({
      missionDetails: value
    })
  }
  onClose = () => {
    this.setState({
      badge:'',
      uploaded: false
    })
  }
  passStateValue = (el) => {
    this.setState({
      bodyScroll:el
    })
  }
  render() {
    const {
      endDate,
      eventdate,
      name,
      password,
      missionValue,
      badge,
      email,
      errors,
      errorState,
      currentDate,
      uploaded,
      missionDetails,
      bodyScroll
    } = this.state;
    console.log(missionDetails,'missionDetails')
    return (
      <ScrollView scrollEnabled={true} showsVerticalScrollIndicator={false} style={[bodyScroll === true ?styles.topSafeArea: styles.menuColor]}>
      <StatusBar backgroundColor='#F45B56' />
        <SafeAreaView style={styles.topSafeArea} />
        {errorState === true && <NotifyPopup content={MEMBER_EXIST} cancel />}
            <Header hamburger back passStateValue={this.passStateValue} style={{paddingBottom:18}}/>
          <View style={styles.condentBox}>          
            <TextInput 
              label='What’s the name of your mission5345345?' 
              name='name'
              value={name}
              style={styles.newTextBox}
              error={errors.name}
              onChange={(value) => this.setState({name: value})}
              fullWidth
            />
            <DatePicker
              headLabel= "When do you want to start this mission?"
              inputText= {eventdate}
              onDateChange={this.onDateChange}
              currentDate={currentDate}
              error={errors.eventdate}
            />
            <DatePicker
              headLabel= "When do you want to end this mission?"
              inputText= {endDate}
              onDateChange={this.onEndDateChange}
              currentDate={currentDate}
              error={errors.endDate}
            />
            <Text style={[styles.label, {fontSize:15,color:'#FDFDFD',lineHeight:18}]}>What goal would you like to set for this mission?.</Text>
            <View style={styles.block}>
              <TextInput 
                // label='What is the target mileage for this mission?' 
                name='missionValue'
                style={{width:124}}
                keyboardType="phone-pad"
                returnType="done"
                value={missionValue}
                // error={errors.missionValue}
                onChange={(value) => this.setState({missionValue: validMobileNumber(value)})}
              />
              <View style={{marginLeft: 10}}>
                <TextInput 
                  // label='What is the target mileage for this mission?' 
                  name='password'
                  style={{width:124}}
                  keyboardType="phone-pad"
                  returnType="done"
                  value={password}
                  onChange={(value) => this.setState({password: value})}
                />
              </View>
            </View>
            <View style={styles.textareaBlk}>
              <Text style={[styles.label, {fontSize:15,color:'#FDFDFD',lineHeight:18}]}>Enter the details of your mission here.
              </Text>
              <Textarea
                containerStyle={styles.textareaContainer}
                style={styles.textarea}
                onChangeText={this.onChangeText}
                defaultValue={missionDetails}
                // maxLength={120}
                // placeholder={'Enter the details of your event here.'}
                // placeholderTextColor={'#c7c7c7'}
                underlineColorAndroid={'transparent'}
              />
            </View>
            {/*<View style={{marginBottom:12}}>
              <Text style={[styles.label, {fontSize:15,color:'#FDFDFD',lineHeight:18}]}>What type of mission is this? </Text>
              <CheckBox
                checkedOpt={this.checkedOpt}
                // checkedIndex={checkedIndex}
                // dataArray={genderItems}
                label='Individual'
                style={{ paddingBottom: 23 }}
              />
              <CheckBox
                // checkedOpt={this.checkedOpt}
                // checkedIndex={checkedIndex}
                // dataArray={genderItems}
                label='Teams'
                style={{ paddingBottom: 23}}
              />
            </View>*/}
            <View style={styles.block}>
              <TextInput 
                label='Upload an mission icon (100 x 100px) - Optional' 
                name='badge'
                value={badge}
                style={{paddingLeft: 20}}
                onPress ={this.onClose}
                close={uploaded}
                onChange={(value) => this.setState({badge: value})}
              />
              <TouchableOpacity onPress= {this.uploadImage} style={styles.underline}><Text style={[styles.text,styles.newText]}>Browse</Text></TouchableOpacity>
            </View>
            
            <Button
              onPress={this.handleSubmit}
              uppercase
              width="100%"
              secondary
              label="Set it up!"
              loader={this.state.loaderStatus}
            />
          </View>
        </ScrollView>
    );
  }
}

export default connect(null, {createMissionsAction})(Form);
