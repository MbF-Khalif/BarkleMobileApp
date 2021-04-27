import React, { Component } from 'react';
import { View, Text, Image, ScrollView, TouchableOpacity, StatusBar,SafeAreaView } from 'react-native';
import { Actions } from 'react-native-router-flux';
import {AccordionList} from 'accordion-collapse-react-native';
import { Separator } from 'native-base';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { isEmpty, map,filter } from "lodash";
import { connect } from 'react-redux';
import Profile from "../../Common/Profile";
import moment from 'moment';

import Card from "../../Common/Card/card";
import H2 from "../../Common/Typos/h2";
import H5 from "../../Common/Typos/h5";
import H4 from "../../Common/Typos/h4";
import P from "../../Common/Typos/p";
import Header from "../../Common/Header";
import Button from "../../Common/FormElements/Button";
import ImageDownloader from "../../Common/ImageDownloader";
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
            activeTab: 'tab1',
            
			  list:[
			      {
			        id:1,
			        title: 'Week 1',
			        startdate: moment().format('DD'),
				      enddate: moment().format('DD MMM'),
			        body: <LinkList onPress={this.onEventsDetails} mils title='sdfsd' value='sdfsdf' mail="sdfsd" startday={moment().format('DD MMM YYYY')} endday={moment().format('DD MMM YYYY')}/>

			      },
			      {
			        id:2,
			        title: 'Week 2',
			        startdate: moment().format('DD'),
				      enddate: moment().format('DD MMM'),
			        body: 'AccordionList,Collapse,CollapseHeader & CollapseBody'
			      },
			      {
			        id:3,
			        title: 'Week 3',
			        startdate: moment().format('DD'),
				      enddate: moment().format('DD MMM'),
			        body: 'React native Accordion/Collapse component, very good to use in toggles & show/hide content'
			      },
			      {
			        id:4,
			        title: 'Week 4',
			        startdate: moment().format('DD'),
				      enddate: moment().format('DD MMM'),
			        body: 'React native Accordion/Collapse component, very good to use in toggles & show/hide content'
			      },

			      ],
			
            
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
		onActiveTab = (tab) => {
			this.setState({
				activeTab: tab
			})
			console.log(tab)
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
		onDetails = () => {
		}
	  _head =(item)=>{
	  	console.log(item,'item')

	  	const {seletedChallenge} = this.state;
	  	const hedChallange = seletedChallenge.member_weeks
	    console.log(seletedChallenge,hedChallange,'weeksList444');
	    return(
	        <Separator bordered style={styles.accordin}>
	          <Text style={styles.accordinTitle}>{item.title}</Text>
	          <Text style={styles.range}>{item.startdate} - {item.enddate}</Text>
	        </Separator>
	    );
		}
	_body(item){
	    return (
	        <View style={{padding:10}}>
	        <TouchableOpacity  style={styles.blockEvent}>
						  <H5>5 min Peloton All-Star Warm Up Ride</H5>  
						  <P style={{color: '#0c3033',paddingBottom:0}}>Alex Toussaint - 30 May 2020 @ 04:20 pm</P>
					</TouchableOpacity>
	        <TouchableOpacity  style={styles.blockEvent}>
						  <H5>5 min Peloton All-Star Warm Up Ride</H5>  
						  <P style={{color: '#0c3033',paddingBottom:0}}>Alex Toussaint - 30 May 2020 @ 04:20 pm</P>
					</TouchableOpacity>
					<TouchableOpacity  style={styles.blockEvent}>
						  <H5>5 min Peloton All-Star Warm Up Ride</H5>  
						  <P style={{color: '#0c3033',paddingBottom:0}}>Alex Toussaint - 30 May 2020 @ 04:20 pm</P>
					</TouchableOpacity>
	        </View>
	    );
	}  
	render() {
		const { tabOpen,seletedChallenge,activeTab,bodyScroll,organiserName,teams } = this.state;
		const weeks = seletedChallenge.member_weeks;
		console.log(weeks,'weeks')
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
				<SafeAreaView style={styles.topSafeAreas} />
				<View style={styles.container} >
					<ScrollView showsVerticalScrollIndicator={false} style={styles.topSafeAreas}>
						<View style={styles.bGCol}>
							<Header hamburger passStateValue={this.passStateValue} back/>
						    <Profile challenge title={selectedChallenges.name} mail={teamsLength} startDate={moment(selectedChallenges.start_date).format('DD MMM YYYY')} endDate={moment(endDate).format('DD MMM YYYY')} value={teamsLength} weeks={selectedChallenges.tot_weeks}/>
					    </View>
					    <View style={styles.body}>
					    <H4 style={{color:'#0c3033',paddingVertical: 20}}>The challenge</H4>
					    <Text style={styles.profileTitle}>CHALLENGE ORGANISED BY</Text>
					    <TouchableOpacity onPress={this.onProfile}><Text style={[styles.p,styles.profileName]}>{organiserName}</Text></TouchableOpacity>

					    <P style={{color:'#0C3033'}}>{selectedChallenges.chall_desc}</P>
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
					    <ScrollView horizontal={true}>
					    <View style={styles.tabBody}>
					    	<TouchableOpacity onPress = {this.onActiveTab.bind(this,'tab1')} style={[styles.tabBlk,styles.deActive,activeTab === 'tab1' && styles.activeColor]}>
									{activeTab === 'tab1' && <View style={[styles.activeBox,activeTab === 'tab1' && styles.activeBoxs]}></View>}
									<Text style={[styles.tabItem,styles.tabItems,activeTab === 'tab1' && styles.activeTexts]}>FINAL RESULTS</Text>
								</TouchableOpacity>	
								<TouchableOpacity onPress = {this.onActiveTab.bind(this,'tab2')} style={styles.tabBlk}>
									{activeTab === 'tab2' && <View style={styles.activeBox}></View>}
									<Text style={[styles.tabItem,activeTab === 'tab2' && styles.activeText]}>Week 1</Text>
								</TouchableOpacity>
								<TouchableOpacity onPress = {this.onActiveTab.bind(this,'tab3')} style={styles.tabBlk}>
									{activeTab === 'tab3' && <View style={styles.activeBox}></View>}
									<Text style={[styles.tabItem,activeTab === 'tab3' && styles.activeText]}>Week 2</Text>
								</TouchableOpacity>
								<TouchableOpacity onPress = {this.onActiveTab.bind(this,'tab4')} style={styles.tabBlk}>
									{activeTab === 'tab4' && <View style={styles.activeBox}></View>}	
									<Text style={[styles.tabItem,activeTab === 'tab4' && styles.activeText]}>Week 3</Text>
								</TouchableOpacity>
								<TouchableOpacity onPress = {this.onActiveTab.bind(this,'tab5')} style={styles.tabBlk}>
									{activeTab === 'tab5' && <View style={styles.activeBox}></View>}
									<Text style={[styles.tabItem,activeTab === 'tab5' && styles.activeText]}>Week 4</Text>
								</TouchableOpacity>
							</View>	
							</ScrollView>
							<View style={styles.condentBorder}>
							<H4 style={{color:'#0c3033',paddingVertical: 20}}>Leaderboard</H4>	
							{activeTab === 'tab1' && <View>
								<TouchableOpacity onPress={this.onDetails} style={[styles.item,styles.textBottomspace]}>
					    			<View style={styles.roundBlk}>
					    				<Text style={styles.count}>1</Text>
					    			</View>
					    			<View style={{flexShrink: 1}}>
									    <Text style={[styles.title,styles.textColor]}>Trap 3 Canines</Text>
										</View>
								    <View style={{flexDirection: 'column',alignItems:'flex-end',marginLeft: 'auto',paddingRight: 15}}>
								      <H5 style={{color:'#e98ea4'}}> 210</H5>
								      <P style={{color:'#e98ea4',paddingBottom: 0}}> Points</P>
								    </View>
								</TouchableOpacity>
								<TouchableOpacity onPress={this.onDetails} style={[styles.item,styles.textBottomspace]}>
					    			<View style={styles.roundBlk}>
					    				<Text style={styles.count}>2</Text>
					    			</View>
					    			<View style={{flexShrink: 1}}>
									    <Text style={[styles.title,styles.textColor]}>CookednotBurnt</Text>
										</View>
								    <View style={{flexDirection: 'column',alignItems:'flex-end',marginLeft: 'auto',paddingRight: 15}}>
								      <H5 style={{color:'#e98ea4'}}> 175</H5>
								      <P style={{color:'#e98ea4',paddingBottom: 0}}> Points</P>
								    </View>
								</TouchableOpacity>
								<TouchableOpacity onPress={this.onDetails} style={[styles.item,styles.textBottomspace]}>
					    			<View style={styles.roundBlk}>
					    				<Text style={styles.count}>3</Text>
					    			</View>
					    			<View style={{flexShrink: 1}}>
									    <Text style={[styles.title,styles.textColor]}>CookednotBurnt</Text>
										</View>
								    <View style={{flexDirection: 'column',alignItems:'flex-end',marginLeft: 'auto',paddingRight: 15}}>
								      <H5 style={{color:'#e98ea4'}}> 210</H5>
								      <P style={{color:'#e98ea4',paddingBottom: 0}}> Points</P>
								    </View>
								</TouchableOpacity>
								<TouchableOpacity onPress={this.onDetails} style={[styles.item,styles.textBottomspace]}>
					    			<View style={styles.roundBlk}>
					    				<Text style={styles.count}>4</Text>
					    			</View>
					    			<View style={{flexShrink: 1}}>
									    <Text style={[styles.title,styles.textColor]}>CookednotBurnt</Text>
										</View>
								    <View style={{flexDirection: 'column',alignItems:'flex-end',marginLeft: 'auto',paddingRight: 15}}>
								      <H5 style={{color:'#e98ea4'}}> 210</H5>
								      <P style={{color:'#e98ea4',paddingBottom: 0}}> Points</P>
								    </View>
								</TouchableOpacity>
								<TouchableOpacity onPress={this.onDetails} style={[styles.item,styles.textBottomspace]}>
					    			<View style={styles.roundBlk}>
					    				<Text style={styles.count}>5</Text>
					    			</View>
					    			<View style={{flexShrink: 1}}>
									    <Text style={[styles.title,styles.textColor]}>CookednotBurnt</Text>
										</View>
								    <View style={{flexDirection: 'column',alignItems:'flex-end',marginLeft: 'auto',paddingRight: 15}}>
								      <H5 style={{color:'#e98ea4'}}> 210</H5>
								      <P style={{color:'#e98ea4',paddingBottom: 0}}> Points</P>
								    </View>
								</TouchableOpacity>
							</View>}
							{activeTab === 'tab2' && <View>
								<TouchableOpacity onPress={this.onDetails} style={[styles.item,styles.textBottomspace]}>
					    			<View style={styles.roundBlk}>
					    				<Text style={styles.count}>1</Text>
					    			</View>
					    			<View style={{flexShrink: 1}}>
									    <Text style={[styles.title,styles.textColor]}>CookednotBurnt</Text>
										</View>
								    <View style={{flexDirection: 'column',marginLeft: 'auto',paddingLeft: 20}}>
								      <Text style={styles.info}> 60 (19.20%)</Text>
								    </View>
								</TouchableOpacity>
								<TouchableOpacity onPress={this.onDetails} style={[styles.item,styles.textBottomspace]}>
					    			<View style={styles.roundBlk}>
					    				<Text style={styles.count}>2</Text>
					    			</View>
					    			<View style={{flexShrink: 1}}>
									    <Text style={[styles.title,styles.textColor]}>CookednotBurnt</Text>
										</View>
								    <View style={{flexDirection: 'column',marginLeft: 'auto'}}>
								      <Text style={styles.info}> 60 (19.20%)</Text>
								    </View>
								</TouchableOpacity>
								<TouchableOpacity onPress={this.onDetails} style={[styles.item,styles.textBottomspace]}>
					    			<View style={styles.roundBlk}>
					    				<Text style={styles.count}>3</Text>
					    			</View>
					    			<View style={{flexShrink: 1}}>
									    <Text style={[styles.title,styles.textColor]}>CookednotBurnt</Text>
										</View>
								    <View style={{flexDirection: 'column',marginLeft: 'auto'}}>
								      <Text style={styles.info}> 60 (19.20%)</Text>
								    </View>
								</TouchableOpacity>
								<TouchableOpacity onPress={this.onDetails} style={[styles.item,styles.textBottomspace]}>
					    			<View style={styles.roundBlk}>
					    				<Text style={styles.count}>4</Text>
					    			</View>
					    			<View style={{flexShrink: 1}}>
									    <Text style={[styles.title,styles.textColor]}>CookednotBurnt</Text>
										</View>
								    <View style={{flexDirection: 'column',marginLeft: 'auto'}}>
								      <Text style={styles.info}> 60 (19.20%)</Text>
								    </View>
								</TouchableOpacity>
								<TouchableOpacity onPress={this.onDetails} style={[styles.item,styles.textBottomspace]}>
					    			<View style={styles.roundBlk}>
					    				<Text style={styles.count}>5</Text>
					    			</View>
					    			<View style={{flexShrink: 1}}>
									    <Text style={[styles.title,styles.textColor]}>CookednotBurnt</Text>
										</View>
								    <View style={{flexDirection: 'column',marginLeft: 'auto'}}>
								      <Text style={styles.info}> 60 (19.20%)</Text>
								    </View>
								</TouchableOpacity>
							</View>}
							{activeTab === 'tab3' && <View>
								<TouchableOpacity onPress={this.onDetails} style={[styles.item,styles.textBottomspace]}>
					    			<View style={styles.roundBlk}>
					    				<Text style={styles.count}>5</Text>
					    			</View>
					    			<View style={{flexShrink: 1}}>
									    <Text style={[styles.title,styles.textColor]}>CookednotBurnt</Text>
										</View>
								    <View style={{flexDirection: 'column',marginLeft: 'auto'}}>
								      <Text style={styles.info}> 60 (19.20%)</Text>
								    </View>
								</TouchableOpacity>
								<TouchableOpacity onPress={this.onDetails} style={[styles.item,styles.textBottomspace]}>
					    			<View style={styles.roundBlk}>
					    				<Text style={styles.count}>15</Text>
					    			</View>
					    			<View style={{flexShrink: 1}}>
									    <Text style={[styles.title,styles.textColor]}>CookednotBurnt</Text>
										</View>
								    <View style={{flexDirection: 'column',marginLeft: 'auto'}}>
								      <Text style={styles.info}> 60 (19.20%)</Text>
								    </View>
								</TouchableOpacity>
								<TouchableOpacity onPress={this.onDetails} style={[styles.item,styles.textBottomspace]}>
					    			<View style={styles.roundBlk}>
					    				<Text style={styles.count}>6</Text>
					    			</View>
					    			<View style={{flexShrink: 1}}>
									    <Text style={[styles.title,styles.textColor]}>CookednotBurnt</Text>
										</View>
								    <View style={{flexDirection: 'column',marginLeft: 'auto'}}>
								      <Text style={styles.info}> 60 (19.20%)</Text>
								    </View>
								</TouchableOpacity>
								<TouchableOpacity onPress={this.onDetails} style={[styles.item,styles.textBottomspace]}>
					    			<View style={styles.roundBlk}>
					    				<Text style={styles.count}>17</Text>
					    			</View>
					    			<View style={{flexShrink: 1}}>
									    <Text style={[styles.title,styles.textColor]}>CookednotBurnt</Text>
										</View>
								    <View style={{flexDirection: 'column',marginLeft: 'auto'}}>
								      <Text style={styles.info}> 60 (19.20%)</Text>
								    </View>
								</TouchableOpacity>
								<TouchableOpacity onPress={this.onDetails} style={[styles.item,styles.textBottomspace]}>
					    			<View style={styles.roundBlk}>
					    				<Text style={styles.count}>7</Text>
					    			</View>
					    			<View style={{flexShrink: 1}}>
									    <Text style={[styles.title,styles.textColor]}>CookednotBurnt</Text>
										</View>
								    <View style={{flexDirection: 'column',marginLeft: 'auto'}}>
								      <Text style={styles.info}> 60 (19.20%)</Text>
								    </View>
								</TouchableOpacity>
							</View>}
							{activeTab === 'tab4' && <View>
								<TouchableOpacity onPress={this.onDetails} style={[styles.item,styles.textBottomspace]}>
					    			<View style={styles.roundBlk}>
					    				<Text style={styles.count}>8</Text>
					    			</View>
					    			<View style={{flexShrink: 1}}>
									    <Text style={[styles.title,styles.textColor]}>CookednotBurnt</Text>
										</View>
								    <View style={{flexDirection: 'column',marginLeft: 'auto',paddingLeft: 20}}>
								      <Text style={styles.info}> 60 (19.20%)</Text>
								    </View>
								</TouchableOpacity>
								<TouchableOpacity onPress={this.onDetails} style={[styles.item,styles.textBottomspace]}>
					    			<View style={styles.roundBlk}>
					    				<Text style={styles.count}>9</Text>
					    			</View>
					    			<View style={{flexShrink: 1}}>
									    <Text style={[styles.title,styles.textColor]}>CookednotBurnt</Text>
										</View>
								    <View style={{flexDirection: 'column',marginLeft: 'auto'}}>
								      <Text style={styles.info}> 60 (19.20%)</Text>
								    </View>
								</TouchableOpacity>
								<TouchableOpacity onPress={this.onDetails} style={[styles.item,styles.textBottomspace]}>
					    			<View style={styles.roundBlk}>
					    				<Text style={styles.count}>10</Text>
					    			</View>
					    			<View style={{flexShrink: 1}}>
									    <Text style={[styles.title,styles.textColor]}>CookednotBurnt</Text>
										</View>
								    <View style={{flexDirection: 'column',marginLeft: 'auto'}}>
								      <Text style={styles.info}> 60 (19.20%)</Text>
								    </View>
								</TouchableOpacity>
								<TouchableOpacity onPress={this.onDetails} style={[styles.item,styles.textBottomspace]}>
					    			<View style={styles.roundBlk}>
					    				<Text style={styles.count}>11</Text>
					    			</View>
					    			<View style={{flexShrink: 1}}>
									    <Text style={[styles.title,styles.textColor]}>CookednotBurnt</Text>
										</View>
								    <View style={{flexDirection: 'column',marginLeft: 'auto'}}>
								      <Text style={styles.info}> 60 (19.20%)</Text>
								    </View>
								</TouchableOpacity>
								<TouchableOpacity onPress={this.onDetails} style={[styles.item,styles.textBottomspace]}>
					    			<View style={styles.roundBlk}>
					    				<Text style={styles.count}>12</Text>
					    			</View>
					    			<View style={{flexShrink: 1}}>
									    <Text style={[styles.title,styles.textColor]}>CookednotBurnt</Text>
										</View>
								    <View style={{flexDirection: 'column',marginLeft: 'auto'}}>
								      <Text style={styles.info}> 60 (19.20%)</Text>
								    </View>
								</TouchableOpacity>
							</View>}
							{activeTab === 'tab5' && <View>
								<TouchableOpacity onPress={this.onDetails} style={[styles.item,styles.textBottomspace]}>
					    			<View style={styles.roundBlk}>
					    				<Text style={styles.count}>13</Text>
					    			</View>
					    			<View style={{flexShrink: 1}}>
									    <Text style={[styles.title,styles.textColor]}>CookednotBurnt</Text>
										</View>
								    <View style={{flexDirection: 'column',marginLeft: 'auto'}}>
								      <Text style={styles.info}> 60 (19.20%)</Text>
								    </View>
								</TouchableOpacity>
								<TouchableOpacity onPress={this.onDetails} style={[styles.item,styles.textBottomspace]}>
					    			<View style={styles.roundBlk}>
					    				<Text style={styles.count}>14</Text>
					    			</View>
					    			<View style={{flexShrink: 1}}>
									    <Text style={[styles.title,styles.textColor]}>CookednotBurnt</Text>
										</View>
								    <View style={{flexDirection: 'column',marginLeft: 'auto'}}>
								      <Text style={styles.info}> 60 (19.20%)</Text>
								    </View>
								</TouchableOpacity>
								<TouchableOpacity onPress={this.onDetails} style={[styles.item,styles.textBottomspace]}>
					    			<View style={styles.roundBlk}>
					    				<Text style={styles.count}>15</Text>
					    			</View>
					    			<View style={{flexShrink: 1}}>
									    <Text style={[styles.title,styles.textColor]}>CookednotBurnt</Text>
										</View>
								    <View style={{flexDirection: 'column',marginLeft: 'auto'}}>
								      <Text style={styles.info}> 60 (19.20%)</Text>
								    </View>
								</TouchableOpacity>
								<TouchableOpacity onPress={this.onDetails} style={[styles.item,styles.textBottomspace]}>
					    			<View style={styles.roundBlk}>
					    				<Text style={styles.count}>16</Text>
					    			</View>
					    			<View style={{flexShrink: 1}}>
									    <Text style={[styles.title,styles.textColor]}>CookednotBurnt</Text>
										</View>
								    <View style={{flexDirection: 'column',marginLeft: 'auto'}}>
								      <Text style={styles.info}> 60 (19.20%)</Text>
								    </View>
								</TouchableOpacity>
								<TouchableOpacity onPress={this.onDetails} style={[styles.item,styles.textBottomspace]}>
					    			<View style={styles.roundBlk}>
					    				<Text style={styles.count}>17</Text>
					    			</View>
					    			<View style={{flexShrink: 1}}>
									    <Text style={[styles.title,styles.textColor]}>CookednotBurnt</Text>
										</View>
								    <View style={{flexDirection: 'column',marginLeft: 'auto'}}>
								      <Text style={styles.info}> 60 (19.20%)</Text>
								    </View>
								</TouchableOpacity>
							</View>}
							<H4 style={{color:'#0c3033',paddingVertical: 20}}>Ride schedule</H4>
							<AccordionList
			            list={this.state.list}
			            header={this._head}
			            body={this._body}
			            keyExtractor={item => `${item.id}`}
			          />
							</View>
							<View style={[styles.accordin,styles.newView]}>
              	<ImageDownloader style={{color: '#e98ea4'}} badgeLabel='Download the ride badge'/>
              	<P style={{color: '#e98ea4'}}>Display it on your peloton profile</P>
              </View> 
						</View>	
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
