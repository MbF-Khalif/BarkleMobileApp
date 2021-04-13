import React, { Component } from 'react';
import { View, Text, Image,ScrollView,TouchableOpacity,StatusBar,SafeAreaView } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Actions } from 'react-native-router-flux';
import { connect } from 'react-redux';
import moment from 'moment';
import { isEmpty, map,filter } from "lodash";

import H2 from "../../Common/Typos/h2";
import H3 from "../../Common/Typos/h3";
import H4 from "../../Common/Typos/h4";
import P from "../../Common/Typos/p";
import Header from "../../Common/Header";
import Card from "../../Common/Card/card";
import LinkList from "../../Common/LinkList";
import Updating from "../../Common/Updating";
import { getAllEventAction } from '../../../actions/getAllEvent';
import { getgoingmaybeAction } from '../../../actions/getGoingMaybeList';
import { addChallengeAction } from '../../../actions/seletedChallengeAction';
import { getAllChallengeAction } from '../../../actions/getChallenge';
import { addItemAction } from '../../../actions/seletedEventAction';
import { getWorkouts } from '../../../actions/workoutsAction';
import { styles } from './style';
 
class Dashboard extends Component {
	constructor(){
        super();
        this.state = {
            name: "",
            gender: "",
            age: "",
            location: "",
            userName: "",
            image: "",
            loader:true,
            allEvents:'',
            eventList:[],
            eventsDetail:[],
            workoutsList:[],
            allChallenge:[],
            hashName:'',
            bodyScroll: true
        }
    }   

	componentDidMount(){
       this.getData();
       setTimeout(()=>{
	    	this.setState({
		    	loader:false
		    });
	    	
	    },1800)
    }

    async getData() {
	    // const userData = await AsyncStorage.getItem("userData");
	    // const age = await AsyncStorage.getItem("age");
	    // // const userId = await AsyncStorage.getItem("userId");
	    // const parsedData = JSON.parse(userData);
	    // const parsedUserId = JSON.parse(userId);
	    // this.props.getWorkouts(parsedUserId);


			const tocken = await AsyncStorage.getItem("bearertoken");
			const userIds = await AsyncStorage.getItem("barkleUserID");
			const workouts = await AsyncStorage.getItem("workouts");
			const username = await AsyncStorage.getItem("username");
			console.log(username,'userId')
			
			const { bearerAccess } = this.state;
			this.setState({
			bearerAccess: tocken,
			userId: userIds,
			workoutsList: JSON.parse(workouts),
			hashName: JSON.parse(username)
			})
			const headers = {
			Authorization: "Bearer " + tocken,
			};
			const {userId} = this.state;
			const data = {
				userIds
			};
			this.props.getAllEventAction(headers).then(res =>{
			this.setState({
				allEvents: res.getAllEvent.data.event
			})
			}).catch(err => {
			console.log(err.response,err,'error')
			});
			this.props.getgoingmaybeAction(userIds,headers).then(res =>{
				const list = res.getgoingmaybe.data.message
				var events = list.map(function(i) {
				  return i;
				});
			this.setState({
				eventList: list,
				eventsDetail: events
			})
			}).catch(err => {
			console.log(err,err.response,err,'errorError')
			});
	    // this.setState({
	    // 	name: parsedData.name,
	    // 	gender: parsedData.gender,
	    // 	age: JSON.parse(age),
	    // 	location: parsedData.location,
	    // 	image: parsedData.image_url,

	    // });
	    setTimeout(()=>{
	    	loader:false
	    },1800)
	    this.props.getAllChallengeAction(headers).then(res =>{
					this.setState({
						allChallenge: res.getAllChallenge.data
					})
			    }).catch(err => {
			      console.log(err.response,err,'errorgetAllChallengeAction')
		    });
			
	}
	onEvents = () => {
		Actions.eventsDetails();
	}
	onEvent = () => {
		Actions.events();
	}
	onChallenges = () => {
		// Actions.challenges();
	}
	onMissions = () => {
		Actions.missions();
	}
	onEventsDetails = (el) => {
		Actions.eventsDetails(el);
		this.props.addItemAction(el);
	}
	onChallengeDetails = (el) => {
		this.props.addChallengeAction(el);
		Actions.challengesDetails();
	}
	passStateValue = (el) => {
		this.setState({
			bodyScroll:el
		})
	}
	render() {
		const { name, gender, workoutsList,age,bodyScroll, location, image,loader,allEvents,eventsDetail,eventList,hashName,allChallenge } = this.state;
		const { workOuts } = this.props;
		const pickDate = moment(new Date()).format('YYYY-MM-DD');
		const upComingEvent = filter(allEvents, (el, i) => el.eventdate > pickDate)
		const upComingEventLength = upComingEvent.length;
		const eventsLength = eventList.length;
		let numWeeks = 2;
		let now = new Date();
		now.setDate(now.getDate() + numWeeks * 7);
		var firstday = new Date(now.setDate(now.getDate() - now.getDay()));
		var lastday = new Date(now.setDate(now.getDate() - now.getDay()+6));
		return (
			<>
			{loader === true && <Updating/>}
			<StatusBar backgroundColor='#F45B56' />
			<SafeAreaView style={styles.topSafeArea} />
			<ScrollView showsVerticalScrollIndicator={false} style={styles.topSafeArea}>
				<View style={styles.container} >
						<View style={[styles.profile,styles.leftSpaces]}>
							<View style={styles.imgBlk}>
								{/*!isEmpty(image) && <Image
									style={{width: 65, height: 65}}
							        source={{
							          uri: image,
							        }}
							      />*/}
								<Image style={{width: 82, height: 82,borderRadius:100}} source={require('../../../assets/images/profile.png')}/>
							</View>

							<View style={styles.leftSpace}>	
							    <Header passStateValue={this.passStateValue} style={{paddingBottom:18}}/>
							    <Text style={styles.normalText}>
							    #{hashName}</Text>
							</View>
						    
					    </View>
					    <View style={styles.body}>
					    	<View style={styles.blkBSpace}>
						    	<TouchableOpacity onPress={this.onEvent}>
						    	<H4 style={{color:'#f45b56',paddingBottom: 20,}}>Events you’re attending ({upComingEventLength})</H4></TouchableOpacity>
						    	{upComingEvent === 0?<View>
						    	<View style={styles.eventBox}>
						    		<P style={{color:	'#525252',width: '80%'}}>You haven’t joined any events yet. Check out all our &nbsp;<TouchableOpacity onPress={this.onEvent} style={styles.borderBottom}><P style={styles.linkText}>upcoming events</P></TouchableOpacity>&nbsp; and get started! 👊
						    		</P>
						    	</View>
						    	<TouchableOpacity onPress={this.onEvent} style={[styles.borderBottom,styles.bottomSpace]}><P style={styles.linkText}>Your events history</P></TouchableOpacity>
						    	</View>:
					    	<View style={styles.blockEvent}>
							    {/*map(eventsDetail, (el, i) => <LinkList key={i} onPress={this.onEventsDetails.bind(this, el[0])} timeOnly title={el[0].eventname}  dayOnly days={moment(el[0].eventdate).format('dddd')} time={el[0].eventtime} date={moment(el[0].eventdate).format('DD MMM YYYY')} />)*/}
							    {map(upComingEvent, (el, i) => <LinkList key={i} onPress={this.onEventsDetails.bind(this, el)} timeOnly title={el.eventname}  dayOnly days={moment(el.eventdate).format('dddd')} time={el.eventtime} date={moment(el.eventdate).format('DD MMM YYYY')} />)}
						    </View>}
					    	</View>
					    	<View style={styles.blkBSpace}>
						    	{/*TouchableOpacity onPress={this.onEvent}><H4>Events ({upComingEventLength})</H4></TouchableOpacity>*/}
						    	<TouchableOpacity onPress={this.onChallenges}>
						    	<H4 style={{color:'#f45b56',paddingBottom: 20,}}>Challenges</H4></TouchableOpacity>

						    	
							  <View style={styles.blockEvent}>
							    {map(allChallenge, (el, i) => <LinkList key={i} dates={el.start_date} style={styles.removeBorer} onPress={this.onChallengeDetails.bind(this, el)} challenge title={el.name} value={el.partc_teams.length} mail={el.tot_weeks} startday={moment(el.start_date).format('DD MMM YYYY')} endday={moment((now).setDate((now).getDate() + el.tot_weeks * 7)).format('DD MMM YYYY')} time={el.tot_weeks} />)}
						    </View>
							
						    	{/*<View style={styles.eventBox}>
						    		<P style={{color:	'#525252',width: '80%'}}>You haven’t joined any missions yet. Check out all our &nbsp;<TouchableOpacity style={styles.borderBottom}><P style={styles.linkText}>upcoming missions</P></TouchableOpacity>&nbsp; and get started! 👊
						    		</P>
						    	</View>
						    	<TouchableOpacity style={[styles.borderBottom,styles.bottomSpace]}><P style={styles.linkText}>Your missions history</P></TouchableOpacity>*/}
					    	</View>
						    {/*<TouchableOpacity onPress={this.onEvents}><H4>Missions(4)</H4></TouchableOpacity>
						    <View style={styles.blockEvent}>				
						    	<LinkList onPress={this.onEvents} title='Visit the Dogs' date='1,228 miles' />
						    	<LinkList onPress={this.onEvents} title='2021 in 2021' date='1,228 miles' />
						    	<LinkList onPress={this.onEvents} title='Drill the Earth' date='1,228 miles' />
						    	<LinkList onPress={this.onEvents} title='Pelofondo' date='1,228 miles' />
						    </View>*/}
							</View>
					    {!isEmpty(workOuts) && !isEmpty(workOuts.data) && <H4>{`Workouts (${workOuts.data.length})`}</H4>}

					    <View style={styles.workOutsBg}>
					    	<H4 style={{color:'#000000'}}>Workouts ({workoutsList.length})</H4>
						    <View style={styles.workOuts}>
						    	{map(workoutsList, (el, i) => <View key={i} style={styles.coverBlk}>
							    	<View style={styles.workOutsBlk}>
							    		<Text style={styles.workTitle}>{el.count}</Text>
							    		<Text style={styles.workDetails}>{el.name}</Text>
							    	</View>
							    </View>)}
						    </View>
					    </View>						
				</View>
				</ScrollView>
			</>
		);
	}
}


function mapStateToProps(state) {
    return {
        workOuts:state.workOuts.data,
    }
}

export default connect(null, {addChallengeAction,getgoingmaybeAction,getAllChallengeAction, addItemAction, getAllEventAction,getWorkouts })(Dashboard);
	