import React, { Component } from 'react';
import { View, Text, Image,StyleSheet, ScrollView,Dimensions, TouchableOpacity, StatusBar,SafeAreaView } from 'react-native';
import { Actions } from 'react-native-router-flux';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { isEmpty, map,filter } from "lodash";
import { connect } from 'react-redux';
import moment from 'moment';

import Card from "../../Common/Card/card";
import H2 from "../../Common/Typos/h2";
import Header from "../../Common/Header";
import Button from "../../Common/FormElements/Button";
import LinkList from "../../Common/LinkList";

import { config } from "../../../theme/config";
import { addMissionAction } from '../../../actions/seletedMissionsAction';
import { getAllMissionsAction } from '../../../actions/getAllMissions';

import { styles } from './style';

const windowHeight = Dimensions.get('window').height;
 
const styl = StyleSheet.create({
    menuHeight:{
      minHeight: windowHeight/2,
    }
});
class Missions extends Component {
	constructor(){
        super();
        this.state = {
            upcoming: false,
            completed: false,
            activeMissions: true,
            allMissions:[],
            bodyScroll: true
        }
    }   
    componentDidMount(){
	    this.getData();
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
			this.props.getAllMissionsAction(headers).then(res =>{
				console.log(res,'getAllMissionsAction')
				this.setState({
					allMissions: res.getAllMissions.data.message
				})
		      console.log(res,'res')
		    }).catch(err => {
		      console.log(err.response,err,'errorgetAllMissionsAction')
	    });
		}

    onChange = () => {
    	this.setState({
    		upcoming: true,
    		completed: false,
    		activeMissions: false
    	})
    } 
    onChanges = () => {
    	this.setState({
    		upcoming: false,
    		completed: true,
    		activeMissions: false
    	})
    }
    onChanged = () => {
    	this.setState({
    		upcoming: false,
    		completed: false,
    		activeMissions: true
    	})
    } 
    onBack = () => {
		Actions.dashboard();
	}
	onEventsDetails = (el) => {
		this.props.addMissionAction(el);
		console.log(el,'onEventsDetails')
		Actions.individual();
	}
	handleSubmit = () => {
		Actions.createMissions();
	}
	passStateValue = (el) => {
		console.log(el,'alert');
		this.setState({
			bodyScroll:el
		})
	}
    
	render() {
		const { completed,bodyScroll, upcoming,activeMissions,allMissions } = this.state;
		console.log(allMissions,'allMissions')
		const Today = moment(new Date()).format('YYYY-MM-DD');
		const completedMissions = filter(allMissions, (el, i) => el.mission_enddate < Today)
		const upComingMissions = filter(allMissions, (el, i) => el.mission_startdate > Today)
		const activeEvent = filter(allMissions, (el, i) => el.mission_startdate < Today && el.mission_enddate > Today)
		console.log(allMissions,completedMissions,'completedEvent',upComingMissions,'upComingEvent',activeEvent,'activeEvent','allMissions')
		return (
			<>
				<StatusBar backgroundColor='#44C0C6' />
				<SafeAreaView style={styles.topSafeArea} />
				<View style={styles.container} >
					<ScrollView showsVerticalScrollIndicator={false} passStateValue={this.passStateValue}backgroundColor='#44C0C6'>
						<View style={styles.bG}>
							<Header hamburger passStateValue={this.passStateValue} back/>
						    <View style={styles.eventsDetails}>
						    	<Text style={styles.p}>Missions</Text>
						    	<Text style={styles.workTitle}>Ride your chosen route and achieve your goals with a team or alone! Record your details or create your own mission.</Text>
						    	<Button
					              onPress={this.handleSubmit}
					              uppercase
					              width="100%"
					              secondary
					              label="Create a new mission"
					              loader={this.state.loaderStatus}
					            />
						    </View>
					    </View>
					    <View style={[styl.menuHeight,styles.body]}>
					    	<View style={styles.tabSec}>
						    	<ScrollView horizontal={true}>
						    		<TouchableOpacity onPress={this.onChanged}  style={[styles.tabBlock,activeMissions && styles.activeTab]}>
						    			<Text style={[styles.tabtext,activeMissions && styles.activeText]}>Active ({activeEvent.length})</Text>
						    		</TouchableOpacity>
							    	<TouchableOpacity onPress={this.onChange}  style={[styles.tabBlock,upcoming && styles.activeTab]}>
						    			<Text style={[styles.tabtext,upcoming && styles.activeText]}>Upcoming ({upComingMissions.length})</Text>
						    		</TouchableOpacity>
						    		<TouchableOpacity onPress={this.onChanges}  style={[styles.tabBlock,completed && styles.activeTab]}>
						    			<Text style={[styles.tabtext,completed && styles.activeText]}>Completed ({completedMissions.length})</Text>
						    		</TouchableOpacity>
						    	</ScrollView>
					    	</View>
						  {upcoming && <View style={styles.blockEvent}>
						    {map(upComingMissions, (el, i) => <LinkList key={i} onPress={this.onEventsDetails.bind(this, el)} mils title={el.mission_name} value={el.mission_type_val} mail={el.mission_value} startday={moment(el.mission_startdate).format('DD MMM YYYY')} endday={moment(el.mission_enddate).format('DD MMM YYYY')}/>)}
					    </View> }
					    {completed && <View style={styles.blockEvent}>
						    {map(completedMissions, (el, i) => <LinkList key={i} onPress={this.onEventsDetails.bind(this, el)} mils title={el.mission_name} value={el.mission_type_val} mail={el.mission_value} startday={moment(el.mission_startdate).format('DD MMM YYYY')} endday={moment(el.mission_enddate).format('DD MMM YYYY')}/>)}
					    </View>}
					    {activeMissions && <View style={styles.blockEvent}>
						    {map(activeEvent, (el, i) => <LinkList key={i} onPress={this.onEventsDetails.bind(this, el)} mils title={el.mission_name} value={el.mission_type_val} mail={el.mission_value} startday={moment(el.mission_startdate).format('DD MMM YYYY')} endday={moment(el.mission_enddate).format('DD MMM YYYY')}/>)}
					    </View>}
						</View>				    
					</ScrollView>
				</View>
			</>
		);
	}
}

export default connect(null, {addMissionAction, getAllMissionsAction })(Missions);
