import React, { Component } from 'react';
import { View, Text,Image,ScrollView,TouchableOpacity,StatusBar,SafeAreaView,Dimensions,StyleSheet } from 'react-native';
import moment from 'moment';

import H2 from "../../Common/Typos/h2";
import Header from "../../Common/Header";
import Card from "../../Common/Card/card";
import Button from "../../Common/FormElements/Button";

import { Actions } from 'react-native-router-flux';
import AsyncStorage from '@react-native-async-storage/async-storage';
import LinkList from "../../Common/LinkList";
import { getAllEventAction } from '../../../actions/getAllEvent';
import { getInstructorAction, classTypeAction, classTimeAction } from '../../../actions/refDataAction';
import { addItemAction } from '../../../actions/seletedEventAction';
import { connect } from 'react-redux';
import { isEmpty, map,filter } from "lodash";
import { getWorkouts } from '../../../actions/workoutsAction';
import { styles } from './style';

const windowHeight = Dimensions.get('window').height;

const styl = StyleSheet.create({
    menuHeight:{
      minHeight: windowHeight/1.8,
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
    this.props.classTypeAction(headers).then(res => {
    	// console.log(res, 'class')
    }).catch(err => {
      console.log(err.response, err,'error class');
    });
    this.props.classTimeAction(headers).then(res => {
    	// console.log(res, 'class time');
    }).catch(err => {
      console.log(err.response, err,'error class time');
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
	onEventsDetails = (el) => {
		Actions.eventsDetails(el);
		this.props.addItemAction(el);
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
		const completedEvent = filter(allEvents, (el, i) => el.eventdate < pickDate);
		const upComingEvent = filter(allEvents, (el, i) => el.eventdate > pickDate);
		return (
			<View style={styles.container} >
				<StatusBar backgroundColor='#F45B56' />
				<SafeAreaView style={styles.topSafeArea} />
				<ScrollView scrollEnabled={true} showsVerticalScrollIndicator={false} style={[bodyScroll === true ?styles.topSafeArea: styles.menuColor]}>
					<View style={styles.bG}>
						<Header hamburger back passStateValue={this.passStateValue} style={{paddingBottom:18}}/>
					    <View style={[bodyScroll === false && styles.bodyHidden ,styles.eventsDetails]}>
					    	<Text style={styles.p}>Events</Text>
					    	<Text style={styles.workTitle}>Get ready to ride together with your pack! View exciting events or create your own.</Text>
					    	<Button
				              onPress={this.handleSubmit}
				              uppercase
				              width="100%"
				              // bgColor={config.linkColor}
				              label="Create a new ride"
				              loader={this.state.loaderStatus}
				            />
					    </View>
				    </View>
				    <View style={[styl.menuHeight,styles.body]}>
				    	<View style={styles.tabSec}>
				    	<ScrollView horizontal={true}>
					    	<TouchableOpacity onPress={this.onChange}  style={[styles.tabBlock,upcoming && styles.activeTab]}>
				    			<Text style={[styles.tabtext,upcoming && styles.activeText]}>Upcoming ({upComingEvent.length})</Text>
				    		</TouchableOpacity>
				    		<TouchableOpacity onPress={this.onChanges}  style={[styles.tabBlock,completed && styles.activeTab]}>
				    			<Text style={[styles.tabtext,completed && styles.activeText]}>Completed ({completedEvent.length})</Text>
				    		</TouchableOpacity>
				    	</ScrollView>
				    	</View>

					    {upcoming && <View style={styles.blockEvent}>
					     {map(upComingEvent, (el, i) => <LinkList key={i} onPress={this.onEventsDetails.bind(this, el)} timeOnly title={el.eventname} dayOnly days={moment(el.eventdate).format('dddd')} time={el.eventtime} date={moment(el.eventdate).format('DD MMM YYYY')} />)}
					    </View> }
					    {completed && <View style={styles.blockEvent}>
						    {map(completedEvent, (el, i) => <LinkList   key={i} onPress={this.onEventsDetails.bind(this, el)} timeOnly title={el.eventname} dayOnly days={moment(el.eventdate).format('dddd')} time={el.eventtime} date={moment(el.eventdate).format('DD MMM YYYY')} />)}
					    </View>}
					    {myride && <View style={styles.blockEvent}>
						    {map(completedEvent, (el, i) => <LinkList key={i} onPress={this.onEventsDetails.bind(this, el)} timeOnly title={el.eventname}  time={el.eventtime} date={moment(el.eventdate).format('DD MMM YYYY')} />)}
					    </View>}
					</View>
				</ScrollView>
			</View>
		);
	}
}

export default connect(null, { addItemAction, getAllEventAction, getInstructorAction, classTypeAction, classTimeAction })(Events);
