import React, { Component } from 'react';
import { View, Text, Image, ScrollView, StatusBar, SafeAreaView, TouchableOpacity } from 'react-native';
import { Actions } from 'react-native-router-flux';
import AsyncStorage from "@react-native-async-storage/async-storage";
import { connect } from 'react-redux';
import Header from "../../Common/Header";
import Profile from "../../Common/Profile";
import Button from "../../Common/FormElements/Button";
import { joinMissionsAction } from '../../../actions/joinMission';
import moment from 'moment';

import H2 from "../../Common/Typos/h2";
import List from "../../Common/List";
import Range from "./range";
import { styles } from './style';

const DATA = [
  {
    name: 'Andy Webber',
    info: '260.2 mi / 13%',
    lead: 1
  },
  {
    name: 'Ollie Beukes',
    info: '197.1 mi / 12%',
    lead: 2
  },
  {
    name: 'Christopher Fielding',
    info: '197.1 mi / 12%',
    lead: 3
  },
];

 
class Individual extends Component {
	constructor(props) {
	    super(props);
	    this.state = {
	      loaderStatus: false,
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
  postDistance = () => {
  	Actions.postDistance();
  }
	handleSubmit = () => {
    const {errors,bearerAccess,userId} = this.state;
    const headers = {
      Authorization: "Bearer " + bearerAccess,
      'Content-Type': 'multipart/form-data;'
    };
    console.log(headers,'headers')
    const {selectedMission} = this.props;
    const missionID = selectedMission.mission_id;
    console.log(missionID,'missionID',selectedMission)
    // if (this.isValid()) {}
      this.setState({ errors: {}, loaderStatus: !this.state.loaderStatus });
        // Actions.dashboard();
      this.props.joinMissionsAction(userId,missionID,headers).then(res =>{
      console.log(res,'respostADistance')
      }).catch(err => {
      console.log(err.response,err,'error')
      });
      console.log(errors)
    
  };
	onDetails =()=>{
		Actions.leaderboard();
	}
	passStateValue = (el) => {
		console.log(el,'alert');
		this.setState({
			bodyScroll:el
		})
	}
	render() {
		const distance = ((3700/1903.3) * 100).toFixed(2);
		const time = ((550/359) * 100);
		const {selectedMission} = this.props;
		console.log(selectedMission,'selectedMission')
		var start = moment(selectedMission.mission_startdate);
		var end = moment(selectedMission.mission_enddate);
		const totaldays = end.diff(start, "days")
		const today = moment(new Date());
		const missionCompleted = end < today
		const pendingDays = end.diff(today, "days");
		const pastDays = today.diff(start, "days");
		const completeMission = end.diff(start, "days");
		const closeMission = totaldays < pastDays;
						console.log(closeMission,'closeMission')

		console.log(pendingDays,'pendingDays',pastDays,'pastDays',end.diff(start, "days"),totaldays,'totaldays')

		return (
			<>
				<StatusBar backgroundColor='#44C0C6' />
				<SafeAreaView style={styles.topSafeArea} />
				<View style={styles.container}>
					<ScrollView showsVerticalScrollIndicator={false}>
						<View style={styles.bG}>
							<Header passStateValue={this.passStateValue} hamburger back/>
							<Profile profile title={selectedMission.mission_name} suptitle={selectedMission.mission_details} startDate={moment(selectedMission.mission_startdate).format('DD MMM YYYY')} endDate={moment(selectedMission.mission_enddate).format('DD MMM YYYY')}/>
								{missionCompleted === false && <View>
					    	{selectedMission.mission_status !== "active"  ? 
					    	<Button
	              onPress={this.handleSubmit}
	              style={{marginLeft: 130}}
	              uppercase
	              width="100%"
	              secondary
	              label="Join this mission"
	              loader={this.state.loaderStatus}
	            />:<Button
	              onPress={this.postDistance}
	              style={{marginLeft: 130}}
	              uppercase
	              width="100%"
	              secondary
	              label="Add a non-Peloton activity"
	              loader={this.state.loaderStatus}
	            />}
	            </View>}
					    </View>
					    <View style={styles.body}>
					    	<Range 
					    		title="Distance - 2021 miles"
					    		width={`${distance}%`}
					    		finished={`${117.7} miles`}
					    		pending={`${1903.3} miles`}
					    	/>
					    	<Range 
					    		title={`Time - ${totaldays} days`}
					    		// title="Time - 365 days" ,{totaldays}
					    		width={`${time}%`}
					    		finished={`${pastDays} days`}
					    		pending={`${pendingDays+1} days`}
					    	/>
					    	<View>
					    		<View style={styles.Textborder}>
					    			<Text style={styles.sectionTitle}>Leaderboard</Text>
					    		</View>
					    		<TouchableOpacity onPress={this.onDetails} style={styles.item}>
					    			<View style={styles.roundBlk}>
					    				<Text style={styles.count}>11</Text>
					    			</View>
					    			<View>
									    <Text style={styles.title}>CookednotBurnt</Text>
									    <Text style={styles.name}>STEVEN CONNELL</Text>
										</View>
								    <View style={{flexDirection: 'column',marginLeft: 'auto'}}>
								      <Text style={styles.info}>3500 mi</Text>
								      <Text style={styles.lead}>25%</Text>
								    </View>
								</TouchableOpacity>
									<View style={styles.item}>
					    			<View style={styles.roundBlk}>
					    				<Text style={styles.count}>11</Text>
					    			</View>
					    			<View>
									    <Text style={styles.title}>CookednotBurnt</Text>
									    <Text style={styles.name}>STEVEN CONNELL</Text>
										</View>
								    <View style={{flexDirection: 'column',marginLeft: 'auto'}}>
								      <Text style={styles.info}>3500 mi</Text>
								      <Text style={styles.lead}>25%</Text>
								    </View>
									</View>
									<View style={styles.item}>
					    			<View style={styles.roundBlk}>
					    				<Text style={styles.count}>11</Text>
					    			</View>
					    			<View>
									    <Text style={styles.title}>CookednotBurnt</Text>
									    <Text style={styles.name}>STEVEN CONNELL</Text>
										</View>
								    <View style={{flexDirection: 'column',marginLeft: 'auto'}}>
								      <Text style={styles.info}>3500 mi</Text>
								      <Text style={styles.lead}>25%</Text>
								    </View>
									</View>
									<View style={styles.item}>
					    			<View style={styles.roundBlk}>
					    				<Text style={styles.count}>11</Text>
					    			</View>
					    			<View>
									    <Text style={styles.title}>CookednotBurnt</Text>
									    <Text style={styles.name}>STEVEN CONNELL</Text>
										</View>
								    <View style={{flexDirection: 'column',marginLeft: 'auto'}}>
								      <Text style={styles.info}>3500 mi</Text>
								      <Text style={styles.lead}>25%</Text>
								    </View>
									</View>
									<View style={styles.item}>
					    			<View style={styles.roundBlk}>
					    				<Text style={styles.count}>11</Text>
					    			</View>
					    			<View>
									    <Text style={styles.title}>CookednotBurnt</Text>
									    <Text style={styles.name}>STEVEN CONNELL</Text>
										</View>
								    <View style={{flexDirection: 'column',marginLeft: 'auto'}}>
								      <Text style={styles.info}>3500 mi</Text>
								      <Text style={styles.lead}>25%</Text>
								    </View>
									</View>
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
    selectedMission: state.selectedMissions.missions,
  }
}

export default connect(mapStateToProps, {joinMissionsAction})(Individual);

