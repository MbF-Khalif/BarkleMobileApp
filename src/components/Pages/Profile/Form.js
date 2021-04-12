import React, { Component } from "react";
import { View, Alert,Text,Image,TouchableOpacity,ScrollView,StatusBar,SafeAreaView } from "react-native";
import PropTypes from "prop-types";
import AsyncStorage from "@react-native-async-storage/async-storage";
import ImagePicker from 'react-native-image-crop-picker';
import { Actions } from "react-native-router-flux";
import { connect } from "react-redux";
import Textarea from 'react-native-textarea';

import validateCreateEvent from "../../Common/Validations/newEvent";
import { validMobileNumber } from '../../Common/Validations/rules';
import NotifyPopup from "../../Common/GlobalError";  
import TextInput from "../../Common/FormElements/TextBox";
import DatePicker from "../../Common/FormElements/DatePicker";
import Button from "../../Common/FormElements/Button";
import H1 from "../../Common/Typos/h1";
import H2 from "../../Common/Typos/h2";
import H3 from "../../Common/Typos/h3";


import { config } from "../../../theme/config";

import { styles } from "./style";

class NewEventForm extends Component {

  constructor(props) {
    super(props);
    this.state = {
      time: "",
      eventdate: "",
      event: "",
      password: "",
      event: "",
      loaderStatus: false,
      errors: {},
      loader: false,
      errorState:false,
      errorMsg:'',
      isPasswordVisible:true,
      path:'',
      imageSource:{},
      upcoming: true,
      completed: false
    };
  }
  handleSubmit = () => {
    const {errors} = this.state;
    if (this.isValid()) {
      this.setState({ errors: {}, loaderStatus: !this.state.loaderStatus });
        Actions.dashboard();
      console.log(errors)
    }
  };
  isValid() {
    const { errors, isValid } = validateCreateEvent(this.state);
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
      console.log(image);
    });

  }
  onChange = () => {
    this.setState({
      upcoming: true,
      completed: false
    })
  } 
  onChanges = () => {
    this.setState({
      upcoming: false,
      completed: true
    })
  } 
  onBack = () => {
    Actions.pop();
  }
  render() {
    const {
      time,
      eventdate,
      event,
      password,
      email,
      errors,
      errorState,
      completed,
      upcoming
    } = this.state;

    return (      
      <View style={styles.formContainer}>
        {errorState === true && <NotifyPopup content={MEMBER_EXIST} cancel />}
        <View style={styles.blueBg}>
          <View style={styles.bG}>
              <View style={styles.profile}>
                <TouchableOpacity onPress={this.onBack} style={styles.imgBlk}>
                  <Image style={{width: 30, height: 20, }} source={require('../../../assets/images/backArrow.png')} />
                </TouchableOpacity>
                  <View style={{width:'100%',paddingBottom: 48}}>
                    <View style={styles.titleBlk}>
                      <H3 style={{ paddingRight: 5}}>MadeByFire</H3>
                    </View>
                    <Text style={styles.profileName}>Vernon Dias</Text>
                  </View>
                </View>
                <View style={styles.eventsDetails}>
                  <Text style={styles.workTitle}>Total Mileage </Text>
                  <Text style={[styles.workTitle,styles.boldFamily]}>800 mi (350 rides)</Text>
                </View>
              </View>

          <View style={styles.tabBox}>          
            <View style={styles.spaceTabBox}>        
              <TouchableOpacity onPress={this.onChange} style={[styles.tabBlk,styles.deactiveTab,upcoming && styles.active]}> 
                {upcoming && <View style={styles.activeBox}></View>}
                <Text style={styles.yearText}>2021</Text>
                <Text style={[styles.yearText,styles.boldFamily]}>88888 mi</Text>
              </TouchableOpacity>
            </View>
           <View style={styles.spaceTabBox}>        
              <TouchableOpacity onPress={this.onChanges} style={[styles.tabBlk,styles.deactiveTab,completed && styles.active]}> 
                {completed && <View style={styles.activeBox}></View>}
                <Text style={styles.yearText}>2021</Text>
                <Text style={[styles.yearText,styles.boldFamily]}>88888 mi</Text>
              </TouchableOpacity>
            </View>
          </View>
          {upcoming && <View style={[styles.tabBox,styles.block,styles.bottomMar]}>  
            <View style={styles.spaceBox}>        
              <TouchableOpacity style={styles.tabBlk}> 
                <Text style={styles.yearText}>Jan</Text>
                <Text style={[styles.yearText,styles.boldFamily]}>350 mi</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.spaceBox}>        
              <TouchableOpacity style={styles.tabBlk}> 
                <Text style={styles.yearText}>Feb</Text>
                <Text style={[styles.yearText,styles.boldFamily]}>350 mi</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.spaceBox}>        
              <TouchableOpacity style={styles.tabBlk}> 
                <Text style={styles.yearText}>Mar</Text>
                <Text style={[styles.yearText,styles.boldFamily]}>350 mi</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.spaceBox}>        
              <TouchableOpacity style={styles.tabBlk}> 
                <Text style={styles.yearText}>Apr</Text>
                <Text style={[styles.yearText,styles.boldFamily]}>350 mi</Text>
              </TouchableOpacity>
            </View>
           <View style={styles.spaceBox}>        
              <TouchableOpacity style={styles.tabBlk}> 
                <Text style={styles.yearText}>May</Text>
                <Text style={[styles.yearText,styles.boldFamily]}>350 mi</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.spaceBox}>        
              <TouchableOpacity style={styles.tabBlk}> 
                <Text style={styles.yearText}>Jun</Text>
                <Text style={[styles.yearText,styles.boldFamily]}>350 mi</Text>
              </TouchableOpacity>
            </View>
           <View style={styles.spaceBox}>        
              <TouchableOpacity style={styles.tabBlk}> 
                <Text style={styles.yearText}>Jul</Text>
                <Text style={[styles.yearText,styles.boldFamily]}>350 mi</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.spaceBox}>        
              <TouchableOpacity style={styles.tabBlk}> 
                <Text style={styles.yearText}>Aug</Text>
                <Text style={[styles.yearText,styles.boldFamily]}>350 mi</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.spaceBox}>        
              <TouchableOpacity style={styles.tabBlk}> 
                <Text style={styles.yearText}>Sep</Text>
                <Text style={[styles.yearText,styles.boldFamily]}>350 mi</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.spaceBox}>        
              <TouchableOpacity style={styles.tabBlk}> 
                <Text style={styles.yearText}>Oct</Text>
                <Text style={[styles.yearText,styles.boldFamily]}>350 mi</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.spaceBox}>        
              <TouchableOpacity style={styles.tabBlk}> 
                <Text style={styles.yearText}>Nov</Text>
                <Text style={[styles.yearText,styles.boldFamily]}>350 mi</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.spaceBox}>        
              <TouchableOpacity style={styles.tabBlk}> 
                <Text style={styles.yearText}>Dec</Text>
                <Text style={[styles.yearText,styles.boldFamily]}>350 mi</Text>
              </TouchableOpacity>
            </View>
          </View>}
          {completed && <View style={[styles.tabBox,styles.block,styles.bottomMar]}>  
            <View style={styles.spaceBox}>        
              <TouchableOpacity style={styles.tabBlk}> 
                <Text style={styles.yearText}>Jan</Text>
                <Text style={[styles.yearText,styles.boldFamily]}>350 mi</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.spaceBox}>        
              <TouchableOpacity style={styles.tabBlk}> 
                <Text style={styles.yearText}>Feb</Text>
                <Text style={[styles.yearText,styles.boldFamily]}>350 mi</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.spaceBox}>        
              <TouchableOpacity style={styles.tabBlk}> 
                <Text style={styles.yearText}>Mar</Text>
                <Text style={[styles.yearText,styles.boldFamily]}>350 mi</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.spaceBox}>        
              <TouchableOpacity style={styles.tabBlk}> 
                <Text style={styles.yearText}>Apr</Text>
                <Text style={[styles.yearText,styles.boldFamily]}>350 mi</Text>
              </TouchableOpacity>
            </View>
           <View style={styles.spaceBox}>        
              <TouchableOpacity style={styles.tabBlk}> 
                <Text style={styles.yearText}>May</Text>
                <Text style={[styles.yearText,styles.boldFamily]}>350 mi</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.spaceBox}>        
              <TouchableOpacity style={styles.tabBlk}> 
                <Text style={styles.yearText}>Jun</Text>
                <Text style={[styles.yearText,styles.boldFamily]}>350 mi</Text>
              </TouchableOpacity>
            </View>
           <View style={styles.spaceBox}>        
              <TouchableOpacity style={styles.tabBlk}> 
                <Text style={styles.yearText}>Jul</Text>
                <Text style={[styles.yearText,styles.boldFamily]}>350 mi</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.spaceBox}>        
              <TouchableOpacity style={styles.tabBlk}> 
                <Text style={styles.yearText}>Aug</Text>
                <Text style={[styles.yearText,styles.boldFamily]}>350 mi</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.spaceBox}>        
              <TouchableOpacity style={styles.tabBlk}> 
                <Text style={styles.yearText}>Sep</Text>
                <Text style={[styles.yearText,styles.boldFamily]}>350 mi</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.spaceBox}>        
              <TouchableOpacity style={styles.tabBlk}> 
                <Text style={styles.yearText}>Oct</Text>
                <Text style={[styles.yearText,styles.boldFamily]}>350 mi</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.spaceBox}>        
              <TouchableOpacity style={styles.tabBlk}> 
                <Text style={styles.yearText}>Nov</Text>
                <Text style={[styles.yearText,styles.boldFamily]}>350 mi</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.spaceBox}>        
              <TouchableOpacity style={styles.tabBlk}> 
                <Text style={styles.yearText}>Dec</Text>
                <Text style={[styles.yearText,styles.boldFamily]}>350 mi</Text>
              </TouchableOpacity>
            </View>
          </View>}
          <View style={{paddingBottom:60}}>
            <Text style={styles.yearText}>This week - 17 to 23 Jan, 2021 </Text>
            <Text style={[styles.yearText,styles.boldFamily]}>350 mi (20 rides)</Text>
          </View>
        </View>
          <View style={styles.whitebG}>

              <Text style={styles.rideTitle}>45 min Sweat Steady Ride </Text>
              <Text style={[styles.rideDate,styles.bottomSpace]}>Jess king - 16/01/21 @ 12:58</Text>
              <View style={[styles.block,styles.listBorder]}>
                <View style={styles.rideDetail}>
                  <Text style={styles.rideTitle}>454 kj</Text>
                  <Text style={styles.rideDate}>output</Text>
                </View>
                <View style={[styles.rideDetail,styles.leftSpace]}>
                  <Text style={styles.rideTitle}>454 kj</Text>
                  <Text style={styles.rideDate}>output</Text>
                </View>
                <View style={[styles.rideDetail,styles.leftSpace]}>
                  <Text style={styles.rideTitle}>454 kj</Text>
                  <Text style={styles.rideDate}>output</Text>
                </View>
                <Image style={{width: 10, height: 20,marginLeft:'auto'}} source={require('../../../assets/images/rightArrow.png')}/>
              </View>
            

              <Text style={styles.rideTitle}>45 min Sweat Steady Ride </Text>
              <Text style={[styles.rideDate,styles.bottomSpace]}>Jess king - 16/01/21 @ 12:58</Text>
              <View style={[styles.block,styles.listBorder]}>
                <View style={styles.rideDetail}>
                  <Text style={styles.rideTitle}>454 kj</Text>
                  <Text style={styles.rideDate}>output</Text>
                </View>
                <View style={[styles.rideDetail,styles.leftSpace]}>
                  <Text style={styles.rideTitle}>454 kj</Text>
                  <Text style={styles.rideDate}>output</Text>
                </View>
                <View style={[styles.rideDetail,styles.leftSpace]}>
                  <Text style={styles.rideTitle}>454 kj</Text>
                  <Text style={styles.rideDate}>output</Text>
                </View>
                <Image style={{width: 10, height: 20,marginLeft:'auto'}} source={require('../../../assets/images/rightArrow.png')}/>
              </View>
            

              <Text style={styles.rideTitle}>45 min Sweat Steady Ride </Text>
              <Text style={[styles.rideDate,styles.bottomSpace]}>Jess king - 16/01/21 @ 12:58</Text>
              <View style={[styles.block,styles.listBorder]}>
                <View style={styles.rideDetail}>
                  <Text style={styles.rideTitle}>454 kj</Text>
                  <Text style={styles.rideDate}>output</Text>
                </View>
                <View style={[styles.rideDetail,styles.leftSpace]}>
                  <Text style={styles.rideTitle}>454 kj</Text>
                  <Text style={styles.rideDate}>output</Text>
                </View>
                <View style={[styles.rideDetail,styles.leftSpace]}>
                  <Text style={styles.rideTitle}>454 kj</Text>
                  <Text style={styles.rideDate}>output</Text>
                </View>
                <Image style={{width: 10, height: 20,marginLeft:'auto'}} source={require('../../../assets/images/rightArrow.png')}/>
              </View>
            

              <Text style={styles.rideTitle}>45 min Sweat Steady Ride </Text>
              <Text style={[styles.rideDate,styles.bottomSpace]}>Jess king - 16/01/21 @ 12:58</Text>
              <View style={[styles.block,styles.listBorder]}>
                <View style={styles.rideDetail}>
                  <Text style={styles.rideTitle}>454 kj</Text>
                  <Text style={styles.rideDate}>output</Text>
                </View>
                <View style={[styles.rideDetail,styles.leftSpace]}>
                  <Text style={styles.rideTitle}>454 kj</Text>
                  <Text style={styles.rideDate}>output</Text>
                </View>
                <View style={[styles.rideDetail,styles.leftSpace]}>
                  <Text style={styles.rideTitle}>454 kj</Text>
                  <Text style={styles.rideDate}>output</Text>
                </View>
                <Image style={{width: 10, height: 20,marginLeft:'auto'}} source={require('../../../assets/images/rightArrow.png')}/>
              </View>
            

              <Text style={styles.rideTitle}>45 min Sweat Steady Ride </Text>
              <Text style={[styles.rideDate,styles.bottomSpace]}>Jess king - 16/01/21 @ 12:58</Text>
              <View style={[styles.block,styles.listBorder]}>
                <View style={styles.rideDetail}>
                  <Text style={styles.rideTitle}>454 kj</Text>
                  <Text style={styles.rideDate}>output</Text>
                </View>
                <View style={[styles.rideDetail,styles.leftSpace]}>
                  <Text style={styles.rideTitle}>454 kj</Text>
                  <Text style={styles.rideDate}>output</Text>
                </View>
                <View style={[styles.rideDetail,styles.leftSpace]}>
                  <Text style={styles.rideTitle}>454 kj</Text>
                  <Text style={styles.rideDate}>output</Text>
                </View>
                <Image style={{width: 10, height: 20,marginLeft:'auto'}} source={require('../../../assets/images/rightArrow.png')}/>
              </View>
            

              <Text style={styles.rideTitle}>45 min Sweat Steady Ride </Text>
              <Text style={[styles.rideDate,styles.bottomSpace]}>Jess king - 16/01/21 @ 12:58</Text>
              <View style={[styles.block,styles.listBorder]}>
                <View style={styles.rideDetail}>
                  <Text style={styles.rideTitle}>454 kj</Text>
                  <Text style={styles.rideDate}>output</Text>
                </View>
                <View style={[styles.rideDetail,styles.leftSpace]}>
                  <Text style={styles.rideTitle}>454 kj</Text>
                  <Text style={styles.rideDate}>output</Text>
                </View>
                <View style={[styles.rideDetail,styles.leftSpace]}>
                  <Text style={styles.rideTitle}>454 kj</Text>
                  <Text style={styles.rideDate}>output</Text>
                </View>
                <Image style={{width: 10, height: 20,marginLeft:'auto'}} source={require('../../../assets/images/rightArrow.png')}/>
              </View>
            

              <Text style={styles.rideTitle}>45 min Sweat Steady Ride </Text>
              <Text style={[styles.rideDate,styles.bottomSpace]}>Jess king - 16/01/21 @ 12:58</Text>
              <View style={[styles.block,styles.listBorder]}>
                <View style={styles.rideDetail}>
                  <Text style={styles.rideTitle}>454 kj</Text>
                  <Text style={styles.rideDate}>output</Text>
                </View>
                <View style={[styles.rideDetail,styles.leftSpace]}>
                  <Text style={styles.rideTitle}>454 kj</Text>
                  <Text style={styles.rideDate}>output</Text>
                </View>
                <View style={[styles.rideDetail,styles.leftSpace]}>
                  <Text style={styles.rideTitle}>454 kj</Text>
                  <Text style={styles.rideDate}>output</Text>
                </View>
                <Image style={{width: 10, height: 20,marginLeft:'auto'}} source={require('../../../assets/images/rightArrow.png')}/>
              </View>
            

              <Text style={styles.rideTitle}>45 min Sweat Steady Ride </Text>
              <Text style={[styles.rideDate,styles.bottomSpace]}>Jess king - 16/01/21 @ 12:58</Text>
              <View style={[styles.block,styles.listBorder]}>
                <View style={styles.rideDetail}>
                  <Text style={styles.rideTitle}>454 kj</Text>
                  <Text style={styles.rideDate}>output</Text>
                </View>
                <View style={[styles.rideDetail,styles.leftSpace]}>
                  <Text style={styles.rideTitle}>454 kj</Text>
                  <Text style={styles.rideDate}>output</Text>
                </View>
                <View style={[styles.rideDetail,styles.leftSpace]}>
                  <Text style={styles.rideTitle}>454 kj</Text>
                  <Text style={styles.rideDate}>output</Text>
                </View>
                <Image style={{width: 10, height: 20,marginLeft:'auto'}} source={require('../../../assets/images/rightArrow.png')}/>
              </View>
            </View>
          </View>
    );
  }
}

export default NewEventForm;
