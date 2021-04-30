import React, { Component } from "react";
import { View, Alert,Text,Image,TouchableOpacity,ScrollView,StatusBar,SafeAreaView  } from "react-native";
import PropTypes from "prop-types";
import moment from 'moment';
import AsyncStorage from "@react-native-async-storage/async-storage";
import ImagePicker from 'react-native-image-crop-picker';
import { Actions } from "react-native-router-flux";
import { connect } from "react-redux";
import Textarea from 'react-native-textarea';
import ModalSelector from 'react-native-modal-selector'
import validateCreateEvent from "../../Common/Validations/newEvent";
import NotifyPopup from "../../Common/GlobalError";  
import Header from "../../Common/Header";  
import TextInput from "../../Common/FormElements/TextBox";
import DatePicker from "../../Common/FormElements/DatePicker";
import ImageDownloader from "../../Common/ImageDownloader";
import Button from "../../Common/FormElements/Button";
import H1 from "../../Common/Typos/h1";
import H2 from "../../Common/Typos/h2";
import { eventByIdAction } from '../../../actions/getEventById';
import { createEventAction, editEventAction } from '../../../actions/createEvent';

import { config } from "../../../theme/config";

import { styles } from "./style";

class NewEventForm extends Component {

  constructor(props) {
    super(props);
    this.state = {
      time: "",
      currentDate: new Date(),
      eventdate: "",
      name: "",
      eventIcon: "",
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
      badge:'',
      uploaded: false,
      uploadedEvent: false,
      uploadedcon: false,
      eventText:'',
      eventDes:'',
      userId:'',
      iconSize: false,
      errmsg:'dsdsd',
      eventSize: false,
      classType: '',
      instructor: '',
      classDate: '',
    };
  }
  componentDidMount() {
    this.getData();
  }
  async getData() {
    const tocken = await AsyncStorage.getItem("bearertoken");
    const userId = await AsyncStorage.getItem("barkleUserID");
    const headers = {
      Authorization: "Bearer " + tocken,
    };
    if(Actions.currentParams.id !== undefined) {
      this.props.eventByIdAction(Actions.currentParams.id).then(res => {
        const eventData = res.event.data.message[0];
        this.setState({
          name: eventData.eventname,
          eventDes: eventData.eventdesc,
          classType: eventData.type_class==="is_live"?"Live":eventData.type_class==="is_encore"?"Encore":"Studio",
          instructor: eventData.inst_val
        })
      }).catch(err => {
        console.log(err.response)
      })
    }
    this.setState({
      bearerAccess: tocken,
      userId: userId
    })
  }
  handleSubmit = () => {
    const { errors, time, eventdate, name, eventDes, badge, eventIcon, event, bearerAccess, userId, classType, instructor} = this.state;
    const routeName = Actions.currentParams.routeName;
    if (this.isValid()) {
      this.setState({ errors: {}, loaderStatus: !this.state.loaderStatus });
        Actions.pop();
    }
    const headers = {
      Authorization: "Bearer " + bearerAccess,
    };
    const reqObj = {
      "eventname": name,
      "eventtime": time,
      "eventdate": eventdate,
      "eventdesc": eventDes,
      "event_icon": eventIcon,
      "event_img": "1.png",
      "ride_img": badge,
      "ride_id": "ea2b20658764401ab4dde2ded855ce5awe2",
      "user_id": userId,
      "type_class": classType==="Live"?"is_live":classType==="Encore"?"is_encore":"is_studio",
      "inst_val": instructor,
      "event_status": "completed",
      "partc_ranking": {"24":130898.6,"30":129076.56,"32":233930.75,"31":154108.58,"35":190781.23,"37":202232.68,"38":130255.16,"39":49660.04,"40":170134.64,"43":126474.47},
    }
    if(Actions.currentParams.id !== undefined) reqObj["id"] = Actions.currentParams.id;
    if(routeName === 'createEvent') {
      this.props.createEventAction(reqObj, headers).then(res =>{
        console.log(res,'res')
      }).catch(err => {
        console.log(err.response,err,'error')
      });
    }else {
      this.props.editEventAction(reqObj, headers).then(res =>{
        console.log(res,'res')
      }).catch(err => {
        console.log(err.response,err,'editError')
      });
    }
  };
 
  isValid() {
    const { errors, isValid } = validateCreateEvent(this.state);
    if (!isValid) {
      this.setState({ errors });
    }
    return isValid;
  }
  onTimeChange = (date) => {
    const pickTime = moment(date).format('LT')
    this.setState({ time: pickTime,currentDate: date});
  }
  onDateChange = (date) => {
    const pickDate = moment(date).format('DD/M/YYYY');
    this.setState({ eventdate: pickDate,currentDate: date});
  }
uploadImage =()=>{
   ImagePicker.openPicker({
    width: 300,
    height: 400,
    cropping: true
  }).then(image => {
    const img = Platform.OS === 'ios' ? image.filename : image.path;
    this.setState({
      badge:img,
      uploaded: true
    })
  });
  }

  uploadEventImage =()=>{
    ImagePicker.openPicker({
      width: 300,
      height: 400,
      cropping: true
    }).then(image => {
      if(image.size <= 421875) {
        const img = Platform.OS === 'ios' ? image.filename : image.path;
        this.setState({
          event:img,
          uploadedEvent: true,
          eventSize: false
        })
      } else {
        this.setState({
          event:'',
          uploadedEvent: false,
          eventSize: true
        })
      }
    });
  }
  uploadIconImage =()=>{
    ImagePicker.openPicker({
      width: 300,
      height: 400,
      cropping: true
    }).then(image => {
      if(image.size <= 30000) {
        const img = Platform.OS === 'ios' ? image.filename : image.path;
        this.setState({
          eventIcon:img,
          uploadedIcon: true,
          iconSize: false
        })
      }else {
       this.setState({
        iconSize: true,
        uploadedIcon: false,
        eventIcon: ''
       })
      }
    });
  }
  onClose = () => {
    this.setState({
      badge:'',
      uploaded: false
    })
  }
  onCloseIcon = () => {
    this.setState({
      eventIcon:'',
      uploadedIcon: false
    })
  }
  onCloseEvent = () => {
    this.setState({
      event:'',
      uploadedEvent: false
    })
  }
  onBack = () => {
    Actions.events();
  }
  onChange = (value) => {
    this.setState({
      eventDes: value
    })
  }
  passStateValue = (el) => {
    this.setState({
      bodyScroll:el
    })
  }
  render() {
    const {
      time,
      currentDate,
      eventdate,
      name,
      eventIcon,
      event,
      badge,
      errors,
      errorState,
      uploaded,
      uploadedEvent,
      uploadedIcon,
      eventDes,
      iconSize,
      eventSize,
      errmsg,
      bodyScroll,
      classType
    } = this.state;
    const { classTime, instructors, pelotonClass } = this.props;
    const liveTime = classTime.filter(el => el.is_live === true);
    const encoreTime = classTime.filter(el => el.is_encore === true);
    const studioTime = classTime.filter(el => el.is_studio === true);
    let instructorData = [],
        classData = [],
        classTimeData = [];
    const instructorList = Object.values(instructors);
    const classList = Object.values(pelotonClass);
    if(classType === 'Live') {
      liveTime.map((el, i) => {
        classTimeData.push({key: i, label: moment(el.scheduled_start_time).format('LLL')})
      })
    }else if(classType === 'Encore') {
      encoreTime.map((el, i) => {
        classTimeData.push({key: i, label: moment(el.scheduled_start_time).format('LLL')})
      })
    }else {
      studioTime.map((el, i) => {
        classTimeData.push({key: i, label: moment(el.scheduled_start_time).format('LLL')})
      })
    }
    instructorList.map((el, i) => {
      instructorData.push({ key: i, label: el });
    });
    classList.map((el, i) => {
      classData.push({ key: i, label: el });
    });
    return (
      <ScrollView scrollEnabled={true} showsVerticalScrollIndicator={false} style={[bodyScroll === true ?styles.topSafeArea: styles.menuColor]}>
      <StatusBar backgroundColor='#F45B56' />
        <SafeAreaView style={[bodyScroll === true ?styles.topSafeArea: styles.menuColor]} />
        {errorState === true && <NotifyPopup content={MEMBER_EXIST} cancel />}
          <Header hamburger back passStateValue={this.passStateValue} style={{paddingBottom:40}}/> 
          {bodyScroll && <View style={styles.condentBox}>       
            <TextInput 
              label='What’s the name of your event?' 
              name='name'
              value={name}
              style={styles.newTextBox}
              error={errors.name}
              fullWidth
              onChange={(value) => this.setState({name: value})}
            />
            <DatePicker
              headLabel= "What’s the date of this event?"
              inputText= {eventdate}
              onDateChange={this.onDateChange}
              currentDate={currentDate}
              error={errors.eventdate}
            />
            <DatePicker
              headLabel= "And, the time?"
              inputText= {time}
              timepick
              onDateChange={this.onTimeChange}
              currentDate={currentDate}
              error={errors.time}
            />
            <View style={styles.textareaBlk}>
              <Text 
                style={[styles.label, {fontSize:15,color:'#FDFDFD',lineHeight:18}]}>
                Enter the details of your event here.
              </Text>
              <Textarea
                containerStyle={styles.textareaContainer}
                style={styles.textarea}
                onChangeText={this.onChange}
                defaultValue={eventDes}
                // maxLength={120}
                // placeholder={'Enter the details of your event here.'}
                // placeholderTextColor={'#c7c7c7'}
                underlineColorAndroid={'transparent'}
              />
            </View>
            <View style={styles.classBlock}>
              <ModalSelector
                data={classData}
                initValue="What kind of Peloton class is it?"
                supportedOrientations={['portrait']}
                accessible={true}
                scrollViewAccessibilityLabel={'Scrollable options'}
                cancelButtonAccessibilityLabel={'Cancel Button'}
                onChange={(option)=>{ this.setState({classType:option.label})}}>
                <TextInput 
                  label='What kind of Peloton class is it?' 
                  name='name'
                  editable={false}
                  value={this.state.classType}
                  style={styles.newTextBox}
                  fullWidth
                />
              </ModalSelector>
              <ModalSelector
                data={instructorData}
                initValue="What's the name of the instructor?"
                supportedOrientations={['portrait']}
                accessible={true}
                scrollViewAccessibilityLabel={'Scrollable options'}
                cancelButtonAccessibilityLabel={'Cancel Button'}
                onChange={(option)=>{ this.setState({instructor:option.label})}}>
                <TextInput 
                  label="What's the name of the instructor?" 
                  name='name'
                  editable={false}
                  value={this.state.instructor}
                  style={styles.newTextBox}
                  fullWidth
                />
              </ModalSelector>
              <ModalSelector
                data={classTimeData}
                initValue="And, the date and time for the class?"
                supportedOrientations={['portrait']}
                accessible={true}
                scrollViewAccessibilityLabel={'Scrollable options'}
                cancelButtonAccessibilityLabel={'Cancel Button'}
                onChange={(option)=>{ this.setState({classDate:option.label})}}>
                <TextInput 
                  label='And, the date and time for the class?' 
                  name='name'
                  editable={false}
                  value={this.state.classDate}
                  style={styles.newTextBox}
                  fullWidth
                />
              </ModalSelector>
            </View>
          <View style={{position:'relative'}}>
            <View style={styles.block}>
              <TextInput 
                label='Upload an event icon (100 x 100px) - Optional' 
                name='eventIcon'
                value={eventIcon}
                style={{paddingLeft: 20}}
                onPress ={this.onCloseIcon}
                close={uploadedIcon}
              />
              <TouchableOpacity onPress={this.uploadIconImage} style={styles.underline}><Text style={[styles.text,styles.newText]}>Browse</Text></TouchableOpacity>
            </View>
            {iconSize && 
            <View style={styles.errorFullWidth}>
              <Image style={{width: 27, height: 27}} source={require('../../../assets/images/error.png')}/>
              <Text style={{color:config.errorColor,paddingLeft:10,width: '90%', fontSize:16,fontFamily: config.fontSecondory}}>Large Size</Text>
            </View>}
          </View>
          {/*<View style={{position:'relative'}}>
            <View style={styles.block}>
              <TextInput
                label="Upload an event pic (375 x 375px) - Optional"
                name="event"
                value={event}
                keyboardType="phone-pad"
                returnType="done"
                style={{paddingLeft: 20}}
                onPress ={this.onCloseEvent}
                close={uploadedEvent}
              />
              <TouchableOpacity onPress={this.uploadEventImage} style={styles.underline}><Text style={[styles.text,styles.newText]}>Browse</Text></TouchableOpacity>
            </View>
            {eventSize && 
            <View style={styles.errorFullWidth}>
              <Image style={{width: 27, height: 27}} source={require('../../../assets/images/error.png')}/>
              <Text style={{color:config.errorColor,paddingLeft:10,width: '90%', fontSize:16,fontFamily: config.fontSecondory}}>Large Size</Text>
            </View>}
          </View>*/}
            <View style={styles.block}>
              <TextInput
                label="Upload a ride badge - Optional"
                name="badge"
                value={badge}
                keyboardType="phone-pad"
                returnType="done"
                style={{paddingLeft: 20}}
                onPress ={this.onClose}
                close={uploaded}
              />
              <TouchableOpacity onPress={this.uploadImage} style={styles.underline}><Text style={[styles.text,styles.newText]}>Browse</Text></TouchableOpacity>
            </View>
            <Button
              onPress={this.handleSubmit}
              uppercase
              width="100%"
              // bgColor={config.linkColor}
              label="Take your event live"
              loader={this.state.loaderStatus}
            />
          </View>}
        
        </ScrollView>
    );
  }
}

function mapStateToProps(state) {
    return {
        instructors: state.getInstructor.data.message,
        pelotonClass: state.getClass.data.message,
        classTime: state.getClassTime.data.message
    }
}

export default connect(mapStateToProps, { createEventAction, editEventAction, eventByIdAction })(NewEventForm);
