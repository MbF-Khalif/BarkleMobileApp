import React, { Component } from 'react';
import { View,Dimensions, Text,Image,ScrollView,TouchableOpacity,StyleSheet,StatusBar,SafeAreaView } from 'react-native';
import moment from 'moment';

import H2 from "../../Common/Typos/h2";
import Header from "../../Common/Header";
import Card from "../../Common/Card/card";
import Button from "../../Common/FormElements/Button";

import { Actions } from 'react-native-router-flux';
import AsyncStorage from '@react-native-async-storage/async-storage';
import LinkList from "../../Common/LinkList";
import { getAllEventAction } from '../../../actions/getAllEvent';
import { getInstructorAction, getClassAction } from '../../../actions/refDataAction';
import { addItemAction } from '../../../actions/seletedEventAction';
import { connect } from 'react-redux';
import { isEmpty, map,filter } from "lodash";
import { getWorkouts } from '../../../actions/workoutsAction';
import { styles } from './style';

const windowHeight = Dimensions.get('window').height;
 
const styl = StyleSheet.create({
    menuHeight:{
      minHeight: windowHeight/1.5,
    }
}); 
class Events extends Component {
	constructor(){
        super();
        this.state = {
            name: "",
            gender: "",
            age: "",
            location: "",
            userName: "",
            image: "",
            upcoming: true,
            completed: false,
            bearerAccess: '',
            userId: '',
            allEvents:'',
            myride: false,
            bodyScroll: true 
        }
    }   

	componentDidMount(){
     this.getData();
  }
    handleSubmit = () => {
    	Actions.createEvent();
    } 
    onChange = () => {
    	this.setState({
    		upcoming: true,
    		completed: false,
    		myride: false
    	})
    } 
    onChanges = () => {
    	this.setState({
    		upcoming: false,
    		completed: true,
    		myride: false
    	})
    } 
	onChanged = () => {
	    	this.setState({
	    		upcoming: false,
	    		completed: false,
	    		myride: true
	    	})
	    } 

  async getData() {
    const tocken = await AsyncStorage.getItem("bearertoken");
    const userId = await AsyncStorage.getItem("barkleUserID");
    console.log(userId,tocken,'userId')
    const { bearerAccess } = this.state;
    this.setState({
      bearerAccess: tocken,
      userId: userId
    })
    const headers = {
      Authorization: "Bearer " + tocken,
    };
    this.props.getInstructorAction(headers).then(res => {
    	// console.log(res, 'instructor')
    }).catch(err => {
      console.log(err.response, err,'error instructor')
    });
    this.props.getClassAction(headers).then(res => {
    	// console.log(res, 'instructor')
    }).catch(err => {
      console.log(err.response, err,'error instructor')
    });
	this.props.getAllEventAction(headers).then(res =>{
		this.setState({
			allEvents: res.getAllEvent.data.event
		})
      console.log(res,'res')
    }).catch(err => {
      console.log(err.response,err,'error')
    });
	}
	onBack = () => {
		Actions.dashboard();
	}
	onEventsDetails = () => {
		Actions.ogc();
	}
	passStateValue = (el) => {
		this.setState({
			bodyScroll:el
		})
	}
	render() {
		const { name, bodyScroll,gender, age, location, image,completed,upcoming,allEvents,myride} = this.state;
		const pickDate = moment(new Date()).format('YYYY-MM-DD');
		console.log(filter(allEvents, (el, i) => el.eventdate < pickDate),pickDate);
		const completedEvent = filter(allEvents, (el, i) => el.eventdate < pickDate)
		const upComingEvent = filter(allEvents, (el, i) => el.eventdate > pickDate)
		console.log(upComingEvent,completedEvent,pickDate,allEvents);
		return (
			     <ScrollView scrollEnabled={true} showsVerticalScrollIndicator={false} style={[bodyScroll === true ?styles.topSafeArea: styles.menuColor]}>
				<StatusBar backgroundColor='#F45B56' />
				<SafeAreaView style={[bodyScroll === true ?styles.topSafeArea: styles.menuColor]} />
				
					<View style={styles.bG}>
						<Header back passStateValue={this.passStateValue} style={{paddingBottom:18}}/>
					    {bodyScroll && <View style={styles.eventsDetails}>
					    	<Text style={styles.p}>Tools</Text>
					    	<Text style={styles.workTitle}>Fine tune your performance, find a tribe with similar capabilities, and determine how to get yourself to the next level.</Text>
					    </View>}
				    </View>
				    {bodyScroll && <View style={[styl.menuHeight,styles.body]}>
				    <LinkList onPress={this.onEventsDetails} border  title='Output Goal Calculator' />
				    </View>}
				</ScrollView>
			
		);
	}
}

export default connect(null, { addItemAction, getAllEventAction, getInstructorAction, getClassAction })(Events);
