import React, { Component } from "react";
import { View, Alert,Text,Image,TouchableOpacity } from "react-native";
import PropTypes from "prop-types";
import AsyncStorage from "@react-native-async-storage/async-storage";
import ImagePicker from 'react-native-image-crop-picker';
import { Actions } from "react-native-router-flux";
import moment from 'moment';
import { connect } from "react-redux";
import Textarea from 'react-native-textarea';
import validatePostADistance from "../../Common/Validations/postDistance";
import { validMobileNumber } from '../../Common/Validations/rules';
import NotifyPopup from "../../Common/GlobalError";  
import TextInput from "../../Common/FormElements/TextBox";
import DatePicker from "../../Common/FormElements/DatePicker";
// import Picker from "../../Common/FormElements/DropDown";
import { postADistanceAction } from '../../../actions/postADistance';
import { isEmpty } from "lodash";

import Button from "../../Common/FormElements/Button";
import Header from "../../Common/Header";
import H1 from "../../Common/Typos/h1";
import H4 from "../../Common/Typos/h4";

import { config } from "../../../theme/config";

import { styles } from "./style";

class Form extends Component {

  constructor(props) {
    super(props);
    this.state = {
      time: "",
      activity:'',
      activityTime:'',
      currentDate: new Date(),
      eventdate: "",
      event: "",
      activityImg: "",
      event: "",
      loaderStatus: false,
      errors: {},
      loader: false,
      errorState:false,
      errorMsg:'',
      isPasswordVisible:true,
      path:'',
      missionDes:'',
      close:'',
      imageSource:{},
      uploaded: false,
      gender:'Walking (Outdoor)'
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
    if (this.isValid()) {
    const {errors,bearerAccess,userId,activityImg,missionDes} = this.state;
   const headers = {
      Authorization: "Bearer " + bearerAccess,
      'Content-Type': 'multipart/form-data;'
    };
    console.log(headers,'headers')
    const {selectedMission} = this.props;
    const missionID = selectedMission.mission_id;
    const reqObj = {
      "workout_type":'Walking',
      "workout_val": '25',
      "workout_time": '2021-03-04',
      "workout_desc": missionDes,
      "mission_id": missionID,
      "user_id": userId,
      "workout_img": activityImg,
    }
    
      alert('dfsfd')
   
      this.setState({ errors: {}, loaderStatus: !this.state.loaderStatus });
        // Actions.dashboard();
      this.props.postADistanceAction(reqObj,headers).then(res =>{
        this.setState({
          loaderStatus:true
        });
      console.log(res,'respostADistance')
      }).catch(err => {
      console.log(err.response,err,'error')
        this.setState({
          loaderStatus:false
        });
      });
      console.log(errors)
    }
  };
  isValid() {
    const { errors, isValid } = validatePostADistance(this.state);
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
          activityImg:img,
          uploaded: true
        })
    });
  }
  onBack = () => {
    Actions.events();
  }
  onClose = () => {
    this.setState({
      activityImg:'',
      uploaded: false
    })
  }
  onChangeDes = (value) => {
    this.setState({
      missionDes: value
    })
  }
  onTimeChange = (date) => {
    const pickTime = moment(date).format('LT')
    this.setState({ time: pickTime,currentDate: date});
  }
  render() {
    const genderList = ['Walking (Outdoor)','Walking (Indoor)'];
    const {selectedMission} = this.props;
    const missionID = selectedMission.mission_id;
    console.log(selectedMission,missionID)
    const {
      time,
      activity,
      activityTime,
      eventdate,
      event,
      activityImg,
      missionDes,
      errors,
      errorState,
      close,
      uploaded,
      currentDate
    } = this.state;
    console.log(activity,"activity")
    return (
      <View style={styles.formContainer}>
        {errorState === true && <NotifyPopup content={MEMBER_EXIST} cancel />}
          <Header back/>
          <H4 style={{color: 'white'}}>Post an activity</H4>
          <View style={styles.condentBox}>  
            {/*<Picker 
              name='gender'
              label='Choose your activity'
              value={this.state.gender}
              data={genderList}
              selectedValue={this.state.gender}
              onValueChange={(e)=>this.setState({gender:e})}
              // error={errors.gender}
              errorLabel='Select an option'
            />*/}
            <TextInput 
              label='Choose your activity' 
              name='activity'
              value={activity}
              style={styles.newTextBox}
              error={errors.activity}
              fullWidth
              onChange={(value) => this.setState({activity: value})}
            />
            <TextInput
              label="How many miles did you do?"
              name="activityTime"
              style={{width:96}}
              value={activityTime}
              // error={errors.activityTime}
              keyboardType="phone-pad"
              returnType="done"
              onChange={(value) => this.setState({ activityTime: validMobileNumber(value) })}
            />
            
             <DatePicker
              headLabel= "When did you do this activity?"
              inputText= {time}
              timepick
              onDateChange={this.onTimeChange}
              currentDate={currentDate}
              error={errors.time}
            />
            <View style={styles.textareaBlk}>
              <Text 
            style={[styles.label, {fontSize:15,color:'#FDFDFD',lineHeight:18}]}>
            Do you have any notes for this activity? - Optional 
          </Text>
              <Textarea
                containerStyle={styles.textareaContainer}
                style={styles.textarea}
                onChangeText={this.onChangeDes}
                defaultValue={missionDes}
                // maxLength={120}
                // placeholder={'Enter the details of your event here.'}
                // placeholderTextColor={'#c7c7c7'}
                underlineColorAndroid={'transparent'}
              />
            </View>
            <View style={styles.block}>
              <TextInput 
                label='Upload activityImg of this activity         ' 
                style={{width: '100%'}} 
                name='activity'
                value={activityImg}
                style={{paddingLeft: 20}}
                error={errors.time}
                close={uploaded}
                onPress ={this.onClose}
                onChange={(value) => this.setState({activityImg: value})}
              />
              <TouchableOpacity onPress= {this.uploadImage} style={styles.underline}><Text style={[styles.text,styles.newText]}>Browse</Text></TouchableOpacity>
            </View>
            <Button
              onPress={this.handleSubmit}
              width="100%"
              // bgColor='#44C0C6'
              secondary
              label="Save"
              loader={this.state.loaderStatus}
            />
          </View>
        </View>
    );
  }
}

function mapStateToProps(state) {
  console.log(state,'state')
  return {
    selectedMission: state.selectedMissions.missions,
  }
}

export default connect(mapStateToProps, {postADistanceAction})(Form);
