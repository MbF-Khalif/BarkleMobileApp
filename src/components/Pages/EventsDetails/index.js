import React, { Component } from 'react';
import { View, Text, Image,ScrollView,TouchableOpacity,StatusBar,SafeAreaView, FlatList } from 'react-native';
import Textarea from 'react-native-textarea';
import { Actions } from 'react-native-router-flux';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { connect } from 'react-redux';
import { isEmpty, map,filter } from "lodash";
import moment from 'moment';
import H2 from "../../Common/Typos/h2";
import P from "../../Common/Typos/p";
import Footer from "../../Common/Footer";
import CalenderEvent from "../../Common/calenderEvent";
import Button from "../../Common/FormElements/Button";
import Header from "../../Common/Header";
import { goingmaybeEventAction } from '../../../actions/goingMaybeEvent';
import { checkgoingmaybeAction } from '../../../actions/checkGoingMaybe';
import { getmaybeAction } from '../../../actions/getMaybe';
import { getongoingAction } from '../../../actions/getOnGoing';
import { leaderBoardAction } from '../../../actions/getLeaderBoard';
import ImageDownloader from "../../Common/ImageDownloader";
import { getWorkouts } from '../../../actions/workoutsAction';
import { styles } from './style';
 
class EventsDetails extends Component {
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
            bodyScroll: true, 
            going: false,
            maybe: false,
            count: 0,
            counts: 0,
            goingUser: '',
            maybeUser: '',
            goingLength: '',
            maybeLength: '',
            maybeUsers:[],
            eventsIds: ''
        }
    }   

    componentDidMount() {
	    this.getData();
	  }
	  async getData() {
	    const tocken = await AsyncStorage.getItem("bearertoken");
	    const userIds = await AsyncStorage.getItem("barkleUserID");
	    this.setState({
	      bearerAccess: tocken,
	      userId: userIds
	    })
	    const {userId,bearerAccess} = this.state;
    	const headers = {
      		Authorization: "Bearer " + bearerAccess,
	    };

	    const { selectedEvent } = this.props;
	    const evevtID = selectedEvent.event_id;
	    console.log(evevtID,'evevtID')
	    this.setState({
	    	eventsIds: evevtID
	    })
	    this.mayBe();
	    this.ongoing();
	    const {eventsIds} = this.state;
	    this.props.leaderBoardAction();
	    this.props.checkgoingmaybeAction(userId,eventsIds,headers).then(res =>{
	    	const check = res.checkgoingmaybe.data.message.event_type;
	    	console.log(res,'checkgoingmaybeAction')
	    	this.setState({
	    		checked: check
	    	})
	    	const {checked} = this.state;
	    	if(checked === 11){
	    		this.setState({
	    			going: true
	    		})
	    	}else {
	    		this.setState({
	    			going: false
	    		})
	    	}
	    	if(checked === 22){
	    		this.setState({
	    			maybe: true
	    		})
	    	}else {
	    		this.setState({
	    			maybe: false
	    		})
	    	}
	    	
	    }).catch(err => {
	      console.log(err.response,err,'error')
	    });
	  }
	  mayBe() {
	  	const {eventsIds,bearerAccess} = this.state;
	  	const headers = {
      	Authorization: "Bearer " + bearerAccess,
	    };
	  	this.props.getmaybeAction(eventsIds,headers).then(res =>{
	    	const maybeData = res.getmaybe.data.message
	    	const upComingEvent = filter(maybeData, (el, i) => el);
	    	var names = maybeData.map(function(i) {
			  return i;
			});
	    	this.setState({
	    		maybeUser: names,
	    		maybeLength: names,
	    		MaybeList: maybeData
	    	})
	    }).catch(err => {
	      console.log(err.response,err,'error')
	    });
	  }
		ongoing() {
			const {eventsIds,bearerAccess} = this.state;
			const headers = {
      	Authorization: "Bearer " + bearerAccess,
	    };
			this.props.getongoingAction(eventsIds,headers).then(res =>{
	    	const maybeData = res.getongoing.data.message;
	    	const upComingEvent = filter(maybeData, (el, i) => i)
	    	var names = maybeData.map(function(i) {
				  return i;
				});
	    	this.setState({
	    		goingUser: names,
	    		goingLength: names
	    	})
	      const {goingUser,list} = this.state;
	    }).catch(err => {
	      console.log(err.response,err,'error')
	    });
		}
	    handleSubmit = () => {
	    	const { selectedEvent } = this.props;
	    	Actions.editEvent({ id: selectedEvent.id })
	    } 
    onMaybe = () => {
    	const {userId,bearerAccess,checked} = this.state;
    	const headers = {
      Authorization: "Bearer " + bearerAccess,
	    };
	    const { selectedEvent } = this.props;
	    const evevtID = selectedEvent.event_id;
	    const reqObj = {
	      event_type: '22',
	      event_id: evevtID,
	      user_id: userId
	    }
	    
    	if(this.state.counts === 1) {
	    	this.setState({
	    		maybe: false,
	    		counts: 0
	    	})
	    } else {	
	    if(checked === 22) {
	    	this.setState({
		    		going: false,
            maybe: false,
            counts: 0,
            checked:0
		    	})
	    }else {	
		    	this.setState({
		    		going: false,
            maybe: true,
            count: 0,
		    		counts: this.state.counts + 1
		    	})
		    }
	    }
	    this.props.goingmaybeEventAction(reqObj,headers).then(res =>{
	      this.ongoing();
	    	this.mayBe();
	    }).catch(err => {
	      console.log(err.response,err,'error')
	    });
    }
    onGoing = () => {
    	const {userId,bearerAccess,checked} = this.state;
    	const headers = {
      Authorization: "Bearer " + bearerAccess,
	    };
	    const { selectedEvent } = this.props;
	    const evevtID = selectedEvent.event_id;
	    const reqObj = {
	      event_type: '11',
	      event_id: evevtID,
	      user_id: userId
	    }
	    
    	if(this.state.count === 1) {
    		this.setState({
	    		going: false,
	    		count: 0
	    	})
	    } else {
	    	if(checked === 11) {
	    		this.setState({
		    		going: false,
            maybe: false,
            count: 0,
            counts: 0,
            checked:0
		    	})
	    	}else {
		    	this.setState({
		    		going: true,
		            maybe: false,
		            count: this.state.count + 1,
		            counts: 0
		    	})
		    }
	    }
	    this.props.goingmaybeEventAction(reqObj,headers).then(res =>{
	    	this.ongoing();
	    	this.mayBe();
	    }).catch(err => {
	      console.log(err.response,err,'error')
	    });
    }
    onChange = () => {
    	this.setState({
    		upcoming: true,
    		completed: false,    		
    	})
    } 

    onChanges = () => {
    	this.setState({
    		upcoming: false,
    		completed: true
    	})
    } 
    onBack = () => {
		Actions.events();
	}
	onProfile = () => {
		Actions.profile();
	}

	renderItem = ({item, index}) => {
		return (
			<View style={styles.listRow}>
				<View style={{flexDirection: 'row'}}>
					<View style={styles.listIndex}>
						<Text style={styles.listIndexText}>{index+1}</Text>
					</View>
					<View>
					    <Text style={styles.listPelName}>{item.pelot_username}</Text>
					    <Text style={styles.listName}>{item.Name}</Text>
					</View>
				</View>
				<Text style={styles.listRank}>{Math.trunc(item.rank/1000)}kj</Text>
			</View>
		);
	}
	passStateValue = (el) => {
		this.setState({
			bodyScroll:el
		})
	}
	render() {
		const { name,bodyScroll, gender, age, location, currentEvent, image, completed, upcoming, maybe, going, goingUser, maybeUser, goingLength, maybeLength, maybeUsers } = this.state;
		const { selectedEvent, leaderBoard } = this.props;
		const goingEventLength = goingLength.length;
		const maybeEventLength = maybeLength.length;
		const time = selectedEvent.eventtime;
	    const evevtID = selectedEvent.event_id;
	    let eventLeaderBord = [];
	    if(!isEmpty(leaderBoard) && !isEmpty(leaderBoard.message)) {
	    	eventLeaderBord = leaderBoard.message.filter(el=> el.event_id === evevtID);
	    }
		return (
			<View style={styles.container} >
				<StatusBar backgroundColor='#F45B56' />
				<SafeAreaView style={[bodyScroll === true ?styles.topSafeArea: styles.menuColor]} />
				<ScrollView scrollEnabled={true} showsVerticalScrollIndicator={false} style={[bodyScroll === true ?styles.topSafeArea: styles.menuColor]}>	
						<Header back passStateValue={this.passStateValue} style={{paddingBottom:18}}/>
						{/*<CalenderEvent/>*/}
						{bodyScroll && <View>
				    	<View style={[styles.block,styles.bottomSpace,styles.spaceArea]}>
				    		<View style ={styles.roundBlk}>
				    			<Image style={{width: 49, height: 42,resizeMode: 'cover' }} source={require('../../../assets/images/default.png')} />
				    		</View>
					    	<View style={styles.rightCondent}>
						    	<Text style={styles.p}>{selectedEvent.eventname}</Text>
						    	<Text style={styles.workTitle}>{moment(selectedEvent.eventdate).format('dddd,DD MMM YYYY')} 
						    	</Text>
						    	<Text style={styles.workTitle}>
						    	{time}</Text>
					 			</View>
					 			<TouchableOpacity onPress={this.handleSubmit} style ={styles.editBlock}>
					    			<Image style={{width: 25, height: 25, }} source={require('../../../assets/images/edit.png')} />
					    		</TouchableOpacity>
							</View>
							<View style={[styles.block,styles.goingEvent]}>
						    	<TouchableOpacity onPress={this.onGoing} style={[styles.borderRight,styles.block,styles.eventWidth,going && styles.activeColor]}>
							    	{going && <View><Image style={[styles.imgArea]} source={require('../../../assets/images/activeRide.png')}/></View>}
							    	<Text style={[styles.tabicon,going && styles.activeTabText]}>Going</Text>
						    	</TouchableOpacity>
						    	<TouchableOpacity  onPress={this.onMaybe} style={[styles.block,styles.eventWidth,maybe && styles.activeColor]}>
							    	{maybe && <View><Image style={[styles.imgArea]} source={require('../../../assets/images/activeRide.png')}/></View>}
							    	<Text style={[styles.tabicon,maybe && styles.activeTabText]}>Maybe</Text>
						    	</TouchableOpacity>
						  </View>	
							<View style={{backgroundColor: 'white',paddingTop: 32}}>
						    <View style={styles.spaceArea}>
						    	<Text style={styles.profileTitle}>EVENT ORGANISED BY</Text>
							    <TouchableOpacity onPress={this.onProfile}><Text style={[styles.p,styles.profileName]}>Vernon Dias (MadeByFire)</Text></TouchableOpacity>
						    	<P style={{color:'#525252'}}>{selectedEvent.eventdesc}</P>
						    	<P style={{color:'#525252'}}>Never in my wildest dreams did I think that I would get to this magical number. But the hectic riding in the last couple of months with the Bulldogs has dragged me very quickly to this number.</P>
						    	<P style={styles.boldColor}>I wonder if you guys could join me for a 70s ride with our own Leanne Hainsby.</P>
						    	<Text style={[styles.p,styles.boldColor,styles.bottomArea]}>Peloton class for this ride</Text>
						    </View>	
						  </View>
				    	<Image style={{width: '100%', height: 296}} source={require('../../../assets/images/badge.png')}/>
							<View style={[styles.body,styles.spaceBlk]}> 
	              <Text style={styles.rideTitle}>45 min Sweat Steady Ride</Text>
	              <Text style={styles.rideDate}>JESS KINGS - 16/01/21 @ 12:58</Text>
	              <View style={styles.borders}>
	              	<ImageDownloader badgeLabel='Download the ride badge'/>
	              </View>  
	            </View>
				    
				{/*<View style={{height:375,width:'100%',paddingBottom: 35,backgroundColor:'white'}}>
					<Image style={{width: '100%', height: '100%', }} source={require('../../../assets/images/cycle.png')} />
			  </View>*/}
				<View style={styles.body}> 
		    	<View style={styles.tabSec}>
			    	<TouchableOpacity onPress={this.onChange}  style={[styles.tabBlock,upcoming && styles.activeTab]}>
		    			<Text style={[styles.tabtext,upcoming && styles.activeText]}>Going ({goingEventLength})</Text>
		    		</TouchableOpacity>
		    		<TouchableOpacity onPress={this.onChanges}  style={[styles.tabBlock,completed && styles.activeTab]}>
		    			<Text style={[styles.tabtext,completed && styles.activeText]}>Maybe ({maybeEventLength})</Text>
		    		</TouchableOpacity>
		    	</View>
			    {upcoming && <View style={styles.blockEvent}>
		       	{map(goingUser, (el, i) => <TouchableOpacity key={i}  onPress={this.onProfile} style={[styles.block,styles.listBorder]}>
		    		<Image style={{width: 50, height: 50,marginRight: 15}} source={require('../../../assets/images/profile.png')}/>
		    		<View>
			    		<Text style={styles.eventTitle}>MadeByFire</Text>
			    		<Text style={styles.eventDate}>{el[0].name} / London</Text>
			    	</View>
			    	<Image style={{width: 10, height: 10,marginLeft:'auto'}} source={require('../../../assets/images/rightArrow.png')}/>
		        </TouchableOpacity>)}
			    </View>}
			    {completed && <View style={styles.blockEvent}>
			    	{map(maybeUser, (el, i) => <TouchableOpacity key={i}  onPress={this.onProfile} style={[styles.block,styles.listBorder]}>
			    		<Image style={{width: 50, height: 50,marginRight: 15}} source={require('../../../assets/images/profile.png')}/>
			    		<View>
				    		<Text style={styles.eventTitle}>MadeByFire</Text>
				    		<Text style={styles.eventDate}>{el[0].name} / London</Text>
				    	</View>
				    	<Image style={{width: 10, height: 10,marginLeft:'auto'}} source={require('../../../assets/images/rightArrow.png')}/>
			        </TouchableOpacity>)}
			    </View> }
			    {!isEmpty(eventLeaderBord) && !isEmpty(eventLeaderBord[0].partc_ranking) && <FlatList
			        data={eventLeaderBord[0].partc_ranking}
			        renderItem={this.renderItem}
			        keyExtractor={item => item.id}
			    />}
			</View>	
			</View>}			   
			</ScrollView>
		</View>
		);
	}
}

function mapStateToProps(state) {
  return {
    selectedEvent: state.selectedEvent.items,
    leaderBoard: state.leaderBoard.data
  }
}

export default connect(mapStateToProps, {checkgoingmaybeAction,getongoingAction,getmaybeAction,goingmaybeEventAction,leaderBoardAction})(EventsDetails);

