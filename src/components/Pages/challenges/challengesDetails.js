import React, { Component } from 'react';
import { View, Text, Image, ScrollView, TouchableOpacity, StatusBar,SafeAreaView } from 'react-native';
import { Actions } from 'react-native-router-flux';
import {AccordionList} from 'accordion-collapse-react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { isEmpty, map,filter } from "lodash";
import { connect } from 'react-redux';
import Profile from "../../Common/Profile";
import moment from 'moment';

import Card from "../../Common/Card/card";
import H2 from "../../Common/Typos/h2";
import P from "../../Common/Typos/p";
import Header from "../../Common/Header";
import Button from "../../Common/FormElements/Button";
import LinkList from "../../Common/LinkList";

import { config } from "../../../theme/config";
import { addMissionAction } from '../../../actions/seletedMissionsAction';
import { getAllChallengeIdAction } from '../../../actions/getChallengeId';

import { getTeamsAction } from '../../../actions/getTeams';

import { styles } from './style';
 
class ChallengesDetails extends Component {
	constructor(){
        super();
        this.state = {
            upcoming: false,
            completed: false,
            activeMissions: true,
            seletedChallenge:[],
            teams:[],
            bodyScroll: true,
            tabOpen: false,
            tabClose: false,
            
        }
    }   
    componentDidMount(){
	    this.getData();
	    const {selectedChallenges} = this.props;
	    console.log(selectedChallenges,'weeksList');
	  }
    async getData() {
	    const tocken = await AsyncStorage.getItem("bearertoken");
	    const userIds = await AsyncStorage.getItem("barkleUserID");
	    const username = await AsyncStorage.getItem("username");
	    console.log(userId,tocken,'userId')
	    const { bearerAccess } = this.state;
	    const {selectedChallenges} = this.props;
	    const challID = selectedChallenges.chall_id;
	    this.setState({
	      bearerAccess: tocken,
	      userId: userIds,
	      organiserName: JSON.parse(username),
	    })
	    const headers = {
	      Authorization: "Bearer " + tocken,
	    };
	    const {userId} = this.state;
			this.props.getAllChallengeIdAction(challID,userId,headers).then(res =>{
				console.log(res,'getAllChallengeIdAction')
				this.setState({
					seletedChallenge: res.getAllChallengeId.data.message
				})
		      console.log(this.state.seletedChallenge,'res')
		    }).catch(err => {
		      console.log(err.response,err,'errorgetAllChallengeIdAction')
	    	});
	    	this.props.getTeamsAction(headers).then(res =>{
				console.log(res,'getAllChallengeIdAction')
				this.setState({
					teams: res.getTeams.data
				})
		      console.log(res,'res')
		    }).catch(err => {
		      console.log(err.response,err,'errorgetAllChallengeIdAction')
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
			this.setState({
				bodyScroll:el
			})
		}
		onWeekDetails = (el,i) => {
			console.log(el,i,i=i,'elvvv')
			if(i=i){
				this.setState({
					tabClose: false,
					tabOpen: true
				});
			}else{
				this.setState({
					tabOpen: true
				});
			}
		}
		onProfile = () => {
			Actions.profile();
		}
	  _head =(item)=>{
	  	console.log(item,'item')

	  	const {seletedChallenge} = this.state;
	  	const hedChallange = seletedChallenge.member_weeks
	    console.log(seletedChallenge,hedChallange,'weeksList444');
	    return(
	        <View style={styles.accordin}>
	          <Text style={styles.accordinTitle}>{item.title}</Text>
	          <Text style={styles.range}>{item.startdate} - {item.enddate}</Text>
	        </View>
	    );
		}
	_body(item){
	    return (
	        <View style={{padding:10}}>
	          <Text style={styles.bodyCondent}>5 min Peloton All-Star Warm Up Ride</Text>
	          <Text style={styles.bodyCondent}>Alex Toussaint - 30 May 2020 @ 04:20 pm</Text>
	        </View>
	    );
	}  
	render() {
		const { tabOpen,seletedChallenge,bodyScroll,organiserName,teams } = this.state;
		const weeks = seletedChallenge.member_weeks;
		const gete = map(weeks, (el,i) => {
              return {
				        id:i,
				        title: 'Week',
				        startdate: moment(el.start_date).format('DD'),
				        enddate: moment(el.end_date).format('DD MMM'),
				        body: 'React native Accordion/Collapse component, very good to use in toggles & show/hide content'
				      };
            });
		console.log(gete,'gete')

		const list = gete;
		
		const teamsMembers = map(teams, (el, i) => el.team_members )
		const teamsMember = map(teams, (el, i) => el.team_members )
		const teamsMemb = map(teamsMember, (el, i) => el.length )
		console.log(teamsMembers,teamsMemb,'teamsMembers')
		const teamsLength = teams.length;
		const {selectedChallenges} = this.props;
		console.log(selectedChallenges,'selectedChallenges')
		let startDates = selectedChallenges.start_date;
		console.log(startDates,'startDates')
		let numWeeks = selectedChallenges.tot_weeks;
		let now = new Date(startDates);
		let today = new Date(startDates);
		const endDate = now.setDate(now.getDate() + numWeeks * 7);
		console.log(endDate,'now');
		var week1firstday = new Date(today.setDate(today.getDate() - today.getDay()));
		var week1lastday = new Date(today.setDate(today.getDate() - today.getDay()+6));
		var week2firstday = new Date(today.setDate(today.getDate() - today.getDay()));
		var week2lastday = new Date(today.setDate(today.getDate() - today.getDay()+6));
		console.log(seletedChallenge,seletedChallenge.leader_data,'seletedChallenge')
		console.log(moment(1618099199).format('DD MMM YYYY'),new Date(1616284799),new Date(1618099199),map(weeks, (el, i) =>el.end_date));
		const riders = seletedChallenge.leader_data;
		const ridersDetails = map(riders, (el, i) => el.member_val.length);
		const ridersDetail = map(ridersDetails, (el, i) => el);
		// const intialArray = new Array(ridersDetail);
		let sum = [ridersDetail].reduce((sum, x) => sum + x);
		return (
			<>
				<StatusBar backgroundColor='#0C3033' />
				<SafeAreaView style={[bodyScroll === true ?styles.topSafeAreas: styles.menuColor]} />
				<View style={styles.container} >
					<ScrollView showsVerticalScrollIndicator={false} style={[bodyScroll === true ?styles.topSafeAreas: styles.menuColor]}>
						<View style={styles.bGCol}>
							<Header passStateValue={this.passStateValue} back/>
						    {bodyScroll && <Profile challenge title={selectedChallenges.name} mail={teamsLength} startDate={moment(selectedChallenges.start_date).format('DD MMM YYYY')} endDate={moment(endDate).format('DD MMM YYYY')} value={teamsLength} weeks={selectedChallenges.tot_weeks}/>}
					    </View>
					    {bodyScroll && <View style={styles.body}>
					    <Text style={styles.profileTitle}>EVENT ORGANISED BY</Text>
					    <TouchableOpacity onPress={this.onProfile}><Text style={[styles.p,styles.profileName]}>{organiserName}</Text></TouchableOpacity>

					    <P style={{color:'#0C3033'}}>{selectedChallenges.chall_desc}</P>
					    	<AccordionList
			            list={list}
			            header={this._head}
			            body={this._body}
			            keyExtractor={item => `${item.id}`}
			          />
					    	{/*map(weeks, (el, i) =><TouchableOpacity key={i}  style={styles.accordin} onPress={this.onWeekDetails.bind(this, el,i)}>
					    		<Text style={styles.accordinTitle}>week {i} </Text>
					    		<Text style={styles.range}>{moment(el.start_date).format('DD')} - {moment(el.end_date).format('DD MMM')}</Text>
					    	</TouchableOpacity>
					    )}
					    {tabOpen && <View style={styles.accordinBloks}>
					    		</View>*/}
					   
					    	
						{/*<View style={styles.blockEvent}>
						    <LinkList onPress={this.onEventsDetails} mils title='sdfsd' value='sdfsdf' mail="sdfsd" startday={moment().format('DD MMM YYYY')} endday={moment().format('DD MMM YYYY')}/>
						    <LinkList onPress={this.onEventsDetails} mils title='sdfsd' value='sdfsdf' mail="sdfsd" startday={moment().format('DD MMM YYYY')} endday={moment().format('DD MMM YYYY')}/>
					    </View>*/}
						</View>}					    
					</ScrollView>
				</View>
			</>
		);
	}
}
function mapStateToProps(state) {
	console.log(state,'state')
  return {
    selectedChallenges: state.seletedChallenges.challenges,
  }
}
export default connect(mapStateToProps, {addMissionAction, getAllChallengeIdAction,getTeamsAction })(ChallengesDetails);
