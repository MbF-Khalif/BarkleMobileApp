import React, { Component } from 'react';
import { View, Text, Image, ScrollView,Dimensions, TouchableOpacity, StatusBar,SafeAreaView,StyleSheet } from 'react-native';
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
import { addChallengeAction } from '../../../actions/seletedChallengeAction';
import { getAllChallengeAction } from '../../../actions/getChallenge';

import { styles } from './style';

const windowHeight = Dimensions.get('window').height;
 
const styl = StyleSheet.create({
    menuHeight:{
      minHeight: windowHeight/1.8,
    }
});
class challanges extends Component {
	constructor(){
        super();
        this.state = {
            upcoming: false,
            completed: false,
            activeMissions: true,
            allChallenge:[],
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
			this.props.getAllChallengeAction(headers).then(res =>{
					console.log(res,'getAllChallengeAction')
					this.setState({
						allChallenge: res.getAllChallenge.data
					})
			      console.log(res,'getAllChallengeAction')
			    }).catch(err => {
			      console.log(err.response,err,'errorgetAllChallengeAction')
		    });
			}
		passStateValue = (el) => {
			console.log(el,'alert');
			this.setState({
				bodyScroll:el
			})
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
		this.props.addChallengeAction(el);
		console.log(el,'onEventsDetails')
		Actions.challengesDetails();
	}
	handleSubmit = () => {
		Actions.createMissions();
	}
    
	render() {
		const { bodyScroll,allChallenge } = this.state;
		let numWeeks = 2;
		let now = new Date();
		now.setDate(now.getDate() + numWeeks * 7);
		console.log(moment(now).format('DD MMM YYYY'),now,'now');
		var firstday = new Date(now.setDate(now.getDate() - now.getDay()));
		var lastday = new Date(now.setDate(now.getDate() - now.getDay()+6));
		return (
			<>
				<StatusBar backgroundColor='#5862E9' />
				<SafeAreaView style={[bodyScroll === true ?styles.topSafeArea: styles.menuColor]} />
				<View style={styles.container} >
					<ScrollView backgroundColor='#5862E9'>
						<View style={styles.bG}>
							<Header passStateValue={this.passStateValue} back/>
						   {bodyScroll && <View style={styles.eventsDetails}>
						    	<Text style={styles.p}>Challenges</Text>
						    	<Text style={styles.workTitle}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod temporincididunt ut labore et dolore magna aliqua.</Text>
						    </View>}
					    </View>
					    {bodyScroll && <View style={[styles.body,styl.menuHeight]}>
							  <View style={styles.blockEvent}>
							    {map(allChallenge, (el, i) => <LinkList key={i} dates={el.start_date} style={styles.removeBorer} onPress={this.onEventsDetails.bind(this, el)} challenge title={el.name} value={el.partc_teams.length} mail={el.tot_weeks} startday={moment(el.start_date).format('DD MMM YYYY')} endday={moment((now).setDate((now).getDate() + el.tot_weeks * 7)).format('DD MMM YYYY')} time={el.tot_weeks} />)}
						    </View>
							</View>}					    
					</ScrollView>
				</View>
			</>
		);
	}
}

export default connect(null, {addChallengeAction, getAllChallengeAction })(challanges);
